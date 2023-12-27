import * as fs from 'fs';
import * as path from 'path';

function createInputCSVFiles(): void {
    const inputDir = 'input';

    if (!fs.existsSync(inputDir)) {
        fs.mkdirSync(inputDir);
        console.log('\x1b[36mℹ️ The', '\x1b[33m./input', '\x1b[36mdirectory has been created.\x1b[0m')

        const taxaToExportContent = `Mimosa afranioi
Mimosa arenosa var arenosa
Mimosa aurivillus var calothamnos
Mimosa bimucronata
Mimosa blanchetii
Mimosa caesalpiniifolia
Mimosa campicola
Mimosa cordistipula
Mimosa cubatanensis
Mimosa debilis var debilis
Mimosa diplotricha var diplotricha
Mimosa dolens var dolens
Mimosa dryandroides var dryandroides
Mimosa elliptica`;

        const importTaxaContent = `"specificEpithet";"leaf.bipinnate.pinnae.numberOfPairs.rarelyMin";"leaf.bipinnate.pinnae.numberOfPairs.min";"leaf.bipinnate.pinnae.numberOfPairs.max";"leaf.bipinnate.pinnae.numberOfPairs.rarelyMax";"leaf.bipinnate.pinnae.numberOfPairs.value";"leaf.bipinnate.pinnae.leaflet.numberOfPairs.rarelyMin";"leaf.bipinnate.pinnae.leaflet.numberOfPairs.min";"leaf.bipinnate.pinnae.leaflet.numberOfPairs.max";"leaf.bipinnate.pinnae.leaflet.numberOfPairs.rarelyMax";"leaf.bipinnate.pinnae.leaflet.numberOfPairs.value";"inflorescence.spicate";"inflorescence.capitate";"flower.merism";"flower.calyx.shape";"flower.corolla.shape";"flower.numberWhorlsOfStamens";"androecium.filaments.colour";"descriptionAuthorship"
        "arenosa var arenosa";"";"4";"12";"";"";"";"12";"30";"";"";"yes";"";"['4-merous', '5-merous']";"campanulate";"turbinate";"diplostemonous";"withish";"June Doe"
        "artemisiana";"";"7";"12";"";"";"";"15";"29";"";"";"yes";"";"4-merous";"campanulate";"campanulate";"diplostemonous";"withish";"June Doe"
        "ceratonia var pseudo-obovata";"";"2";"4";"5";"";"";"2";"4";"5";"";"";"yes";"3-merous";"campanulate";"turbinate";"diplostemonous";"withish";"June Doe"`

        const taxaToExportPath = path.join(inputDir, 'taxaToExport.csv');
        const importTaxaPath = path.join(inputDir, 'importTaxa.csv');

        fs.writeFileSync(taxaToExportPath, taxaToExportContent);
        fs.writeFileSync(importTaxaPath, importTaxaContent);

        console.log('\x1b[36mℹ️ The', '\x1b[33m./input/importTaxa.csv', '\x1b[36mfile has been created.\x1b[0m');
        console.log('\x1b[90m  + This file is needed to execute the `import` command.\x1b[0m');
        console.log('\x1b[90m  + It is a simple headerless CSV with each taxon on a separate line/row.\x1b[0m')
        console.log('\x1b[36mℹ️ The', '\x1b[33m./input/taxaToExport.csv', '\x1b[36mfile has been created.\x1b[0m');
        console.log('\x1b[90m  + This file is needed to execute argument `--load csv` of `export` command.\x1b[0m')
        console.log('\x1b[90m  + It is used to export a specific list of taxa instead of exporting all, which is the default setting.\x1b[0m')
    }
}

export default function ttsInit(): any {
    // Checking directories
    fs.readdir('./', (err, dirs) => {
        if (err) {
            console.error('Error reading directories:', err);
            return;
        }

        if (dirs.length === 0) {
            console.error('\x1b[36mℹ️ The directory is empty. Please clone a TTS project first.\x1b[0m')
            console.log('\x1b[36mℹ️ Please, visit:\x1b[0m')
            console.log('\x1b[36m  TypeTaxonScript package:', '\x1b[33mhttps://www.npmjs.com/package/typetaxonscript.\x1b[0m');
            console.log('\x1b[36m  TTS project (Mimosa):', '\x1b[33mhttps://github.com/lsbjordao/TTS-Mimosa.\x1b[0m');
            return;
        }

        if (!dirs.includes('taxon') && !dirs.includes('character')) {
            console.error('\x1b[36mℹ️ The directory does not contain a TTS project.\x1b[0m')
            console.log('\x1b[36mℹ️ Please, visit:\x1b[0m')
            console.log('\x1b[36m  TypeTaxonScript package:', '\x1b[33mhttps://www.npmjs.com/package/typetaxonscript.\x1b[0m');
            console.log('\x1b[36m  TTS project (Mimosa):', '\x1b[33mhttps://github.com/lsbjordao/TTS-Mimosa.\x1b[0m');
            return;
        }

        const requiredDirs = ['input', 'output', 'characters', 'taxon'];

        const allRequiredDirsPresent = requiredDirs.every(dir => dirs.includes(dir));

        if (allRequiredDirsPresent) {
            console.error('\x1b[36mℹ️ The root directory is not clean. Look:\x1b[0m');
            const listDirectoryTree = (dir: string, prefix = ''): void => {
                const files = fs.readdirSync(dir);

                files.forEach((file, index) => {
                    const filePath = path.join(dir, file);
                    const isDirectory = fs.statSync(filePath).isDirectory();
                    const isLast = index === files.length - 1;

                    console.log(`${prefix}${isLast ? '└──' : '├──'} ${file}`);

                    if (isDirectory) {
                        const nestedPrefix = `${prefix}${isLast ? '   ' : '│  '}`;
                        listDirectoryTree(filePath, nestedPrefix);
                    }
                });
            };
            const excludedDirectories = ['node_modules', '.git', 'dist'];

            const hasPreviousProject = (dir: string, prefix = ''): void => {
                const files = fs.readdirSync(dir, { withFileTypes: true });

                const directories = files
                    .filter(dirent => dirent.isDirectory() && !excludedDirectories.includes(dirent.name))
                    .map(dirent => dirent.name);

                directories.forEach((directory, index) => {
                    const directoryPath = path.join(dir, directory);
                    const isLast = index === directories.length - 1;

                    console.log(`${prefix}${isLast ? '└──' : '├──'} ${directory}`);

                    const nestedPrefix = `${prefix}${isLast ? '   ' : '│  '}`;
                    hasPreviousProject(directoryPath, nestedPrefix);
                });
            };
            hasPreviousProject('./')
            console.error('\x1b[36mℹ️ A previous project is already found.\x1b[0m');
            return
        } else {
            createInputCSVFiles()

            const outputDir = 'output';
            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir);
                const gitKeepFile = `${outputDir}/.gitkeep`;
                fs.writeFileSync(gitKeepFile, '');
                console.log('\x1b[36mℹ️ The', '\x1b[33m./output', '\x1b[36mdirectory has been created.\x1b[0m')
            }

        }
    });
}