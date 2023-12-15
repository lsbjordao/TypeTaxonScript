const fs = require('fs')
const Mustache = require('mustache')

const outputPath = '../output/'

const args = process.argv.slice(2);

function newDescription(genus, specificEpithet) {
    genus = args[0]
    specificEpithet = args[1]

    try {
        const template = fs.readFileSync(`../taxon/${genus}/${genus}_template.txt`, 'utf-8');

        const context = {
            specificEpithet: specificEpithet
        };

        const output = Mustache.render(template, context, 'utf-8')
        const fileName = `${outputPath}${genus} ${specificEpithet}.ts`

        if (output.trim() !== "") {
            fs.writeFileSync(fileName, output)
            console.log(`\x1b[1m\x1b[33m${fileName}\x1b[0m`)
            console.log('\x1b[1m\x1b[32m✔ Finished\x1b[0m')
        }

    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('\x1b[31mTemplate of the genus not implemented yet.\x1b[0m');
        } else {
            console.error('An error occurred while reading the file:', error);
        }
    }
}

newDescription()