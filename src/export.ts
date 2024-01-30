import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'
import csvParser from 'csv-parser'
import { Spinner } from "cli-spinner"

async function deleteJSFiles(folderPath: string): Promise<void> {
    try {
        const files = await fs.promises.readdir(folderPath);

        for (const file of files) {
            if (file.endsWith('.js')) {
                await fs.promises.unlink(`${folderPath}/${file}`);
            }
        }
    } catch (err) {
        console.error('Error deleting files:', err);
    }
}

export default async function ttsExport(genus: string, load?: 'all' | 'csv'): Promise<void> {
    if (genus === '') {
        console.error('\x1b[31m✖ Argument `--genus` cannot be empty.\x1b[0m')
        return
    }

    if (!fs.existsSync('./input') && !fs.existsSync('./output')) {
        console.error("\x1b[31m✖ The ./input and ./output directories are not present within the project.\x1b[0m\n\x1b[33mℹ️ Please run `tts init` before attempting to export a database.\x1b[0m")
        return
    }

    const spinner = new Spinner('\x1b[36mProcessing... %s\x1b[0m')
    spinner.setSpinnerString('|/-\\') // spinner sequence

    spinner.start()

    const taxa: string[] = []

    fs.mkdirSync('./temp', { recursive: true })

    if (load === 'all') {
        const directoryPath = `./taxon/${genus}/`
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                spinner.stop()
                console.error('Error reading directory:', err)
                process.exit()
            }

            const taxa = files
                .filter(file => file.endsWith('.ts') && file !== 'index.ts')
                .map(file => path.parse(file).name)

            const importStatements = taxa.map((species) => {
                return `import { ${species.replace(/\s/g, '_').replace(/\-([a-z])/, (_, match) => match.toUpperCase())} } from '../taxon/${genus}/${species.replace(/\s/g, '_')}'`
            }).join('\n')

            const speciesCall = taxa.map((species) => {
                return `    ${species.replace(/\s/g, '_').replace(/\-([a-z])/, (_, match) => match.toUpperCase())},`
            }).join('\n')

            const fileContent = `// Import genus ${genus}
import { ${genus} } from '../taxon/${genus}'
            
// Import species of ${genus}
${importStatements}
            
const ${genus}_species: ${genus}[] = [
    ${speciesCall}
]
            
// Export ${genus}DB.json
//import { writeFileSync } from 'fs'
const jsonData = JSON.stringify(${genus}_species);
console.log(jsonData)
//const inputFilePath = '../output/${genus}DB.json'
//writeFileSync(inputFilePath, jsonData, 'utf-8')
//console.log('\\x1b[1m\\x1b[32m✔ Process finished.\\x1b[0m')`


            const tempFilePath = './temp/exportTemp.ts'
            fs.writeFileSync(tempFilePath, fileContent, 'utf-8')

            const fileToTranspile = 'exportTemp'
            exec(`tsc ./temp/${fileToTranspile}.ts`, (error, stdout, stderr) => {
                if (stdout) {
                    spinner.stop()
                    console.error('\x1b[31m✖ TS Error:\x1b[0m\n\n' + `${stdout}`)
                    process.exit()
                }
                if (stderr) {
                    spinner.stop()
                    console.error('\x1b[31m✖ TS Error:\x1b[0m\n\n' + `${stderr}`)
                    process.exit()
                }

                try {
                    fs.unlinkSync(`./temp/${fileToTranspile}.ts`)
                } catch (err) {
                    spinner.stop()
                    console.error(`An error occurred while deleting the file: ${err}`)
                    process.exit()
                }

                exec(`node ./temp/${fileToTranspile}.js > ./output/${genus}DB.json`, (error, stdout, stderr) => {
                    // if (error) {
                    //     spinner.stop()
                    //     console.error('\x1b[31m✖ JS execution time error:\x1b[0m\n\n' + `${error.message}`)
                    //     process.exit()
                    // }
                    if (stdout) {
                        spinner.stop()
                        console.error('\x1b[31m✖ JS execution time error:\x1b[0m\n\n' + `${stdout}`)
                        process.exit()
                    }
                    if (stderr) {
                        spinner.stop()
                        console.error('\x1b[31m✖ JS execution time error:\x1b[0m\n\n' + `${stderr}`)
                        process.exit()
                    }

                    deleteJSFiles(`./taxon/${genus}`).then(() => {
                        const filePath = './output/'
                        console.log(`\x1b[1m\x1b[32m✔ Database exported: \x1b[33m${filePath}${genus}DB.json\x1b[0m\x1b[1m\x1b[32m\x1b[0m`)
                        spinner.stop()
                        try {
                            fs.unlinkSync(`./temp/${fileToTranspile}.js`)
                            fs.rm('./temp', { recursive: true }, (err) => {
                                if (err) {
                                    console.error('Error deleting directory:', err)
                                    process.exit()
                                }
                            })
                        } catch (err) {
                            console.error(`An error occurred while deleting the file: ${err}`)
                            process.exit()
                        }
                    })
                })
            })

        })
    }

    if (load === 'csv') {
        const inputFilePath = './input/taxaToExport.csv'
        const tempFilePath = './temp/exportTemp.ts'

        fs.createReadStream(inputFilePath)
            .pipe(csvParser({ headers: false }))
            .on('data', (data: any) => {
                taxa.push(data['0'])
            })
            .on('end', async () => {
                const importStatements = taxa.map((species) => {

                    return `import { ${species.replace(/\s/g, '_').replace(/\-([a-z])/, (_, match) => match.toUpperCase())} } from '../taxon/${genus}/${species.replace(/\s/g, '_')}'`
                }).join('\n')

                const speciesCall = taxa.map((species) => {
                    return `    ${species.replace(/\s/g, '_').replace(/\-([a-z])/, (_, match) => match.toUpperCase())},`
                }).join('\n')

                const fileContent = `// Import genus ${genus}
import { ${genus} } from '../taxon/${genus}'
                
// Import species of ${genus}
${importStatements}
                
const ${genus}_species: ${genus}[] = [
    ${speciesCall}
]
                
// Export ${genus}DB.json
const jsonData = JSON.stringify(${genus}_species);
console.log(jsonData)
// import { writeFileSync } from 'fs'
// const jsonData = JSON.stringify(${genus}_species)
// const inputFilePath = '../output/${genus}DB.json'
// writeFileSync(inputFilePath, jsonData, 'utf-8')
// console.log('\\x1b[1m\\x1b[32m✔ Process finished.\\x1b[0m')`

                fs.writeFileSync(tempFilePath, fileContent, 'utf-8')

                const fileToTranspile = 'exportTemp'
                exec(`tsc ./temp/${fileToTranspile}.ts`, (error, stdout, stderr) => {
                    if (stdout) {
                        spinner.stop()
                        console.error('\x1b[31m✖ TS Error:\x1b[0m\n\n' + `${stdout}`)
                        process.exit()
                    }

                    if (stderr) {
                        spinner.stop()
                        console.error('\x1b[31m✖ TS Error:\x1b[0m\n\n' + `${stdout}`)
                        process.exit()
                    }

                    try {
                        fs.unlinkSync(`./temp/${fileToTranspile}.ts`)
                    } catch (err) {
                        spinner.stop()
                        console.error(`An error occurred while deleting the file: ${err}`)
                        process.exit()
                    }

                    exec(`node ./temp/${fileToTranspile}.js > ./output/${genus}DB.json`, (error, stdout, stderr) => {
                        // if (error) {
                        //     spinner.stop()
                        //     console.error('\x1b[31m✖ JS execution time error:\x1b[0m\n\n' + `${error.message}`)
                        //     process.exit()
                        // }
                        if (stdout) {
                            spinner.stop()
                            console.error('\x1b[31m✖ JS execution time error:\x1b[0m\n\n' + `${stdout}`)
                            process.exit()
                        }
                        if (stderr) {
                            spinner.stop()
                            console.error('\x1b[31m✖ JS execution time error:\x1b[0m\n\n' + `${stderr}`)
                            process.exit()
                        }

                        deleteJSFiles(`./taxon/${genus}`).then(() => {
                            const filePath = './output/'
                            console.log(`\x1b[1m\x1b[32m✔ Database exported: \x1b[33m${filePath}${genus}DB.json\x1b[0m\x1b[1m\x1b[32m\x1b[0m`)
                            spinner.stop()
                            try {
                                fs.unlinkSync(`./temp/${fileToTranspile}.js`)
                                fs.rm('./temp', { recursive: true }, (err) => {
                                    if (err) {
                                        console.error('Error deleting directory:', err)
                                        process.exit()
                                    }
                                })
                            } catch (err) {
                                console.error(`An error occurred while deleting the file: ${err}`)
                                process.exit()
                            }
                        })
                    })
                })

            })
    }
}
