import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'
import csvParser from 'csv-parser'
import { Spinner } from "cli-spinner"

export default function ttsExport(genus: string, load?: 'all' | 'csv'): void {
    if (genus === '') {
        console.error('\x1b[31m✖ Argument `--genus` cannot be empty.\x1b[0m')
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
                return
            }

            const taxa = files
                .filter(file => file.endsWith('.ts') && file !== 'index.ts')
                .map(file => path.parse(file).name)

            const importStatements = taxa.map((species) => {
                return `import { ${species.replace(/\s/g, '_').replace(/\-([a-z])/, (_, match) => match.toUpperCase())} } from '../taxon/${genus}/${species}'`
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
import { writeFileSync } from 'fs'
const jsonData = JSON.stringify(${genus}_species)
const inputFilePath = '../output/${genus}DB.json'
writeFileSync(inputFilePath, jsonData, 'utf-8')
console.log('\\x1b[1m\\x1b[32m✔ Process finished.\\x1b[0m')`

            const tempFilePath = './temp/exportTemp.ts'
            fs.writeFileSync(tempFilePath, fileContent, 'utf-8')

            const fileToTranspile = 'exportTemp'
            exec(`tsc ./temp/${fileToTranspile}.ts`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error: ${error.message}`)
                    return
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`)
                    return
                }

                try {
                    fs.unlinkSync(`./temp/${fileToTranspile}.ts`)
                } catch (err) {
                    console.error(`An error occurred while deleting the file: ${err}`)
                }

                exec(`node ./temp/${fileToTranspile}.js`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Error: ${error.message}`)
                        return
                    }
                    if (stderr) {
                        console.error(`stderr: ${stderr}`)
                        return
                    }

                    const filePath = '.output/'
                    console.log(`\x1b[1m\x1b[32m✔ Database exported: \x1b[33m${filePath}${genus}DB.json\x1b[0m\x1b[1m\x1b[32m\x1b[0m`)
                    spinner.stop()
                    try {
                        fs.unlinkSync(`./temp/${fileToTranspile}.js`)
                    } catch (err) {
                        console.error(`An error occurred while deleting the file: ${err}`)
                    }
                })
            })

            // fs.rm('./temp', { recursive: true }, (err) => {
            //     if (err) {
            //         console.error('Error deleting directory:', err);
            //     }
            // })
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
                    return `import { ${species.replace(/\s/g, '_').replace(/\-([a-z])/, (_, match) => match.toUpperCase())} } from './taxon/${genus}/${species}'`
                }).join('\n')

                const speciesCall = taxa.map((species) => {
                    return `    ${species.replace(/\s/g, '_').replace(/\-([a-z])/, (_, match) => match.toUpperCase())},`
                }).join('\n')

                const fileContent = `// Import genus ${genus}
import { ${genus} } from './taxon/${genus}'
                
// Import species of ${genus}
${importStatements}
                
const ${genus}_species: ${genus}[] = [
    ${speciesCall}
]
                
// Export ${genus}DB.json
import { writeFileSync } from 'fs'
const jsonData = JSON.stringify(${genus}_species)
const inputFilePath = '../output/${genus}DB.json'
writeFileSync(inputFilePath, jsonData, 'utf-8')
console.log('\\x1b[1m\\x1b[32m✔ Process finished.\\x1b[0m')`

                fs.writeFileSync(tempFilePath, fileContent, 'utf-8')

                const fileToTranspile = 'exportTemp'
                exec(`tsc ./temp/${fileToTranspile}.ts`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Error: ${error.message}`)
                        return
                    }
                    if (stderr) {
                        console.error(`stderr: ${stderr}`)
                        return
                    }

                    try {
                        fs.unlinkSync(`./temp/${fileToTranspile}.ts`)
                    } catch (err) {
                        console.error(`An error occurred while deleting the file: ${err}`)
                    }

                    exec(`node ./temp/${fileToTranspile}.js`, (error, stdout, stderr) => {
                        if (error) {
                            console.error(`Error: ${error.message}`)
                            return
                        }
                        if (stderr) {
                            console.error(`stderr: ${stderr}`)
                            return
                        }

                        const filePath = '.output/'
                        console.log(`\x1b[1m\x1b[32m✔ Database exported: \x1b[33m${filePath}${genus}DB.json\x1b[0m\x1b[1m\x1b[32m\x1b[0m`)
                        spinner.stop()
                        try {
                            fs.unlinkSync(`./temp/${fileToTranspile}.js`)
                        } catch (err) {
                            console.error(`An error occurred while deleting the file: ${err}`)
                        }
                    })
                })

                // fs.rm('./temp', { recursive: true }, (err) => {
                //     if (err) {
                //         console.error('Error deleting directory:', err);
                //     }
                // })
            })
    }
}
