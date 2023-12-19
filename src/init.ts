import * as fs from 'fs';
import * as path from 'path';

function createInputCSVFiles(): void {
    const inputDir = '../input';

    if (!fs.existsSync(inputDir)) {
        fs.mkdirSync(inputDir);
        console.log('\x1b[36mℹ️ The `./input` directory has been created.\x1b[0m');
    }

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

    const importTaxaContent = `"specificEpithet","leaf.bipinnate.pinnae.numberOfPairs.rarelyMin","leaf.bipinnate.pinnae.numberOfPairs.min","leaf.bipinnate.pinnae.numberOfPairs.max","leaf.bipinnate.pinnae.numberOfPairs.rarelyMax","leaf.bipinnate.pinnae.numberOfPairs.value","leaf.bipinnate.pinnae.leaflet.numberOfPairs.rarelyMin","leaf.bipinnate.pinnae.leaflet.numberOfPairs.min","leaf.bipinnate.pinnae.leaflet.numberOfPairs.max","leaf.bipinnate.pinnae.leaflet.numberOfPairs.rarelyMax","leaf.bipinnate.pinnae.leaflet.numberOfPairs.value","inflorescence.spicate","inflorescence.capitate","flower.merism","flower.calyx.shape","flower.corolla.shape","flower.numberWhorlsOfStamens","androecium.filaments.colour","descriptionAuthorship","timestamp"
    "arenosa var arenosa","","4","12","","","","12","30","","","yes","","4-merous","campanulate","turbinate","diplostemonous","withish","Lucas Sá Barreto Jordão","12312"
    "artemisiana","","7","12","","","","15","29","","","yes","","4-merous","campanulate","campanulate","diplostemonous","withish","Lucas Sá Barreto Jordão","12312"`;

    const taxaToExportPath = path.join(inputDir, 'taxaToExport.csv');
    const importTaxaPath = path.join(inputDir, 'importTaxa.csv');

    fs.writeFileSync(taxaToExportPath, taxaToExportContent);
    fs.writeFileSync(importTaxaPath, importTaxaContent);

    console.log('\x1b[36mℹ️ Two .csv files have been created inside the `./input` directory.\x1b[0m');
}

export default function ttsInit(): any {
    // Checking directories
    fs.readdir('../', (err, dirs) => {
        if (err) {
            console.error('Error reading directories:', err);
            return;
        }

        const requiredDirs = ['input', 'output', 'node_modules'];

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
            const excludedDirectories = ['node_modules', '.git', 'dist', 'bin'];

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
            hasPreviousProject('../')
            console.error('\x1b[36mℹ️ A previous project is already found.\x1b[0m');
            return
        } else {
            const outputDir = '../output';
            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir);
                const gitKeepFile = `${outputDir}/.gitkeep`;
                fs.writeFileSync(gitKeepFile, '');
                console.log('\x1b[36mℹ️ The `./output` directory has been created.\x1b[0m');
            }

            createInputCSVFiles();

            console.log('\x1b[36mℹ️ The `./input` directory has been created.\x1b[0m');
        }
    });
}