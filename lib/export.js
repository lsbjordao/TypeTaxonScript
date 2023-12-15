const fs = require('fs')
const path = require('path')
const csvParser = require('csv-parser')
const { exec } = require('child_process')

const taxa = []

const args = process.argv.slice(2)
genus = args[0]
load = args[1]

if (load !== undefined && load !== '-loadListFromCsv') {
    console.error('\x1b[31m✖ Invalid command! Accepted inputs: Use no argument to export all taxa by default, or `-loadListFromCsv` to load taxa from `./input/importTaxa.csv`.\x1b[0m');
}

if (load === undefined) {
    const directoryPath = `../taxon/${genus}/`
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err)
            return;
        }

        const taxa = files
            .filter(file => file.endsWith('.ts') && file !== 'index.ts')
            .map(file => path.parse(file).name)

        const importStatements = taxa.map((species) => {
            return `import { ${species.replace(/\s/g, '_').replace(/\-([a-z])/, (_, match) => match.toUpperCase())} } from '../taxon/${genus}/${species}'`
        }).join('\n')

        const speciesCall = taxa.map((species) => {
            return `    ${species.replace(/\s/g, '_').replace(/\-([a-z])/, (_, match) => match.toUpperCase())},`
        }).join('\n');

        const fileContent = `
// Import genus ${genus}
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
console.log('\\x1b[1m\\x1b[32m✔ Process finished.\\x1b[0m')
`;

        const tempFilePath = '../lib/exportTemp.ts'
        fs.writeFileSync(tempFilePath, fileContent, 'utf-8')

        const fileToTranspile = 'exportTemp'
        exec(`tsc ${fileToTranspile}.ts`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Erro: ${error.message}`)
                return
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`)
                return
            }

            try {
                fs.unlinkSync(`${fileToTranspile}.ts`)
            } catch (err) {
                console.error(`An error occurred while deleting the file: ${err}`)
            }

            exec(`node ${fileToTranspile}.js`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Erro: ${error.message}`)
                    return
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`)
                    return
                }
                console.log(`\x1b[1m\x1b[32m✔ Database exported: file ./output/${genus}DB.json created.\x1b[0m`)

                try {
                    fs.unlinkSync(`${fileToTranspile}.js`)
                } catch (err) {
                    console.error(`An error occurred while deleting the file: ${err}`)
                }
            });
        });
    });
}

if (load === '-loadListFromCsv') {

    const inputFilePath = '../input/taxaToExport.csv'
    const tempFilePath = '../lib/exportTemp.ts'

    fs.createReadStream(inputFilePath)
        .pipe(csvParser({ headers: false }))
        .on('data', (data) => {
            taxa.push(data['0'])
        })
        .on('end', async () => {
            const importStatements = taxa.map((species) => {
                return `import { ${species.replace(/\s/g, '_').replace(/\-([a-z])/, (_, match) => match.toUpperCase())} } from '../taxon/${genus}/${species}'`
            }).join('\n')

            const speciesCall = taxa.map((species) => {
                return `    ${species.replace(/\s/g, '_').replace(/\-([a-z])/, (_, match) => match.toUpperCase())},`
            }).join('\n');

            const fileContent = `
// Import genus ${genus}
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
console.log('\\x1b[1m\\x1b[32m✔ Process finished.\\x1b[0m')
`;

            fs.writeFileSync(tempFilePath, fileContent, 'utf-8')

            const fileToTranspile = 'exportTemp'
            exec(`tsc ${fileToTranspile}.ts`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Erro: ${error.message}`)
                    return
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`)
                    return
                }

                try {
                    fs.unlinkSync(`${fileToTranspile}.ts`)
                } catch (err) {
                    console.error(`An error occurred while deleting the file: ${err}`)
                }

                exec(`node ${fileToTranspile}.js`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Erro: ${error.message}`)
                        return
                    }
                    if (stderr) {
                        console.error(`stderr: ${stderr}`)
                        return
                    }
                    console.log(`\x1b[1m\x1b[32m✔ Database exported: file ./output/${genus}DB.json created.\x1b[0m`)

                    try {
                        fs.unlinkSync(`${fileToTranspile}.js`)
                    } catch (err) {
                        console.error(`An error occurred while deleting the file: ${err}`)
                    }
                });
            });
        });
}
