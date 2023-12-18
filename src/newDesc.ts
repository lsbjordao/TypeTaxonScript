import fs from 'fs';
import path from 'path';
import Mustache from 'mustache';

const outputPath = path.resolve(__dirname, '../../output/');

export default function newDesc(genus: string, specificEpithet: string): void {
    try {
        const template = fs.readFileSync(path.resolve(__dirname, `../../taxon/${genus}/${genus}_template.txt`), 'utf-8');

        const context = {
            specificEpithet: specificEpithet
        };

        const output = Mustache.render(template, context);
        const fileName = path.join(outputPath, `${genus} ${specificEpithet}.ts`);

        if (output.trim() !== "") {
            fs.writeFileSync(fileName, output);
            console.log(`\x1b[1m\x1b[33m${fileName}\x1b[0m`);
            console.log('\x1b[1m\x1b[32m✔ Finished\x1b[0m');
        }
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('\x1b[31mTemplate of the genus not implemented yet.\x1b[0m');
        } else {
            console.error('An error occurred while reading the file:', error);
        }
    }
}
