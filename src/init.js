"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
function createInputCSVFiles() {
    var inputDir = 'input';
    if (!fs.existsSync(inputDir)) {
        fs.mkdirSync(inputDir);
        console.log('\x1b[36mℹ️ The', '\x1b[33m./input', '\x1b[36mdirectory has been created.\x1b[0m');
        var taxaToExportContent = "Mimosa afranioi\nMimosa arenosa var arenosa\nMimosa aurivillus var calothamnos\nMimosa bimucronata\nMimosa blanchetii\nMimosa caesalpiniifolia\nMimosa campicola\nMimosa cordistipula\nMimosa cubatanensis\nMimosa debilis var debilis\nMimosa diplotricha var diplotricha\nMimosa dolens var dolens\nMimosa dryandroides var dryandroides\nMimosa elliptica";
        var importTaxaContent = "\"specificEpithet\";\"leaf.bipinnate.pinnae.numberOfPairs.rarelyMin\";\"leaf.bipinnate.pinnae.numberOfPairs.min\";\"leaf.bipinnate.pinnae.numberOfPairs.max\";\"leaf.bipinnate.pinnae.numberOfPairs.rarelyMax\";\"leaf.bipinnate.pinnae.numberOfPairs.value\";\"leaf.bipinnate.pinnae.leaflet.numberOfPairs.rarelyMin\";\"leaf.bipinnate.pinnae.leaflet.numberOfPairs.min\";\"leaf.bipinnate.pinnae.leaflet.numberOfPairs.max\";\"leaf.bipinnate.pinnae.leaflet.numberOfPairs.rarelyMax\";\"leaf.bipinnate.pinnae.leaflet.numberOfPairs.value\";\"inflorescence.spicate\";\"inflorescence.capitate\";\"flower.merism\";\"flower.calyx.shape\";\"flower.corolla.shape\";\"flower.numberWhorlsOfStamens\";\"androecium.filaments.colour\";\"descriptionAuthorship\"\n\"arenosa var arenosa\";\"\";\"4\";\"12\";\"\";\"\";\"\";\"12\";\"30\";\"\";\"\";\"yes\";\"\";\"['4-merous', '5-merous']\";\"campanulate\";\"turbinate\";\"diplostemonous\";\"withish\";\"June Doe\"\n\"artemisiana\";\"\";\"7\";\"12\";\"\";\"\";\"\";\"15\";\"29\";\"\";\"\";\"yes\";\"\";\"4-merous\";\"campanulate\";\"campanulate\";\"diplostemonous\";\"withish\";\"June Doe\"\n\"ceratonia var pseudo-obovata\";\"\";\"2\";\"4\";\"5\";\"\";\"\";\"2\";\"4\";\"5\";\"\";\"\";\"yes\";\"3-merous\";\"campanulate\";\"turbinate\";\"diplostemonous\";\"withish\";\"June Doe\"";
        var taxaToExportPath = path.join(inputDir, 'taxaToExport.csv');
        var importTaxaPath = path.join(inputDir, 'importTaxa.csv');
        fs.writeFileSync(taxaToExportPath, taxaToExportContent);
        fs.writeFileSync(importTaxaPath, importTaxaContent);
        console.log('\x1b[36mℹ️ The', '\x1b[33m./input/importTaxa.csv', '\x1b[36mfile has been created.\x1b[0m');
        console.log('\x1b[90m  + This file is needed to execute the `import` command.\x1b[0m');
        console.log('\x1b[90m  + It is a simple headerless CSV with each taxon on a separate line/row.\x1b[0m');
        console.log('\x1b[36mℹ️ The', '\x1b[33m./input/taxaToExport.csv', '\x1b[36mfile has been created.\x1b[0m');
        console.log('\x1b[90m  + This file is needed to execute argument `--load csv` of `export` command.\x1b[0m');
        console.log('\x1b[90m  + It is used to export a specific list of taxa instead of exporting all, which is the default setting.\x1b[0m');
    }
}
function ttsInit() {
    // Checking directories
    fs.readdir('./', function (err, dirs) {
        if (err) {
            console.error('Error reading directories:', err);
            return;
        }
        if (dirs.length === 0) {
            console.error('\x1b[36mℹ️ The directory is empty. Please clone a TTS project first.\x1b[0m');
            console.log('\x1b[36mℹ️ Please, visit:\x1b[0m');
            console.log('\x1b[36m  TypeTaxonScript package:', '\x1b[33mhttps://www.npmjs.com/package/@lsbjordao/type-taxon-script.\x1b[0m');
            console.log('\x1b[36m  TTS project (Mimosa):', '\x1b[33mhttps://github.com/lsbjordao/TTS-Mimosa.\x1b[0m');
            return;
        }
        if (!dirs.includes('taxon') && !dirs.includes('character')) {
            console.error('\x1b[36mℹ️ The directory does not contain a TTS project.\x1b[0m');
            console.log('\x1b[36mℹ️ Please, visit:\x1b[0m');
            console.log('\x1b[36m  TypeTaxonScript package:', '\x1b[33mhttps://www.npmjs.com/package/@lsbjordao/type-taxon-script.\x1b[0m');
            console.log('\x1b[36m  TTS project (Mimosa):', '\x1b[33mhttps://github.com/lsbjordao/TTS-Mimosa.\x1b[0m');
            return;
        }
        var requiredDirs = ['input', 'output', 'characters', 'taxon'];
        var allRequiredDirsPresent = requiredDirs.every(function (dir) { return dirs.includes(dir); });
        if (allRequiredDirsPresent) {
            console.error('\x1b[36mℹ️ The root directory is not clean. Look:\x1b[0m');
            var listDirectoryTree_1 = function (dir, prefix) {
                if (prefix === void 0) { prefix = ''; }
                var files = fs.readdirSync(dir);
                files.forEach(function (file, index) {
                    var filePath = path.join(dir, file);
                    var isDirectory = fs.statSync(filePath).isDirectory();
                    var isLast = index === files.length - 1;
                    console.log("".concat(prefix).concat(isLast ? '└──' : '├──', " ").concat(file));
                    if (isDirectory) {
                        var nestedPrefix = "".concat(prefix).concat(isLast ? '   ' : '│  ');
                        listDirectoryTree_1(filePath, nestedPrefix);
                    }
                });
            };
            var excludedDirectories_1 = ['node_modules', '.git', 'dist'];
            var hasPreviousProject_1 = function (dir, prefix) {
                if (prefix === void 0) { prefix = ''; }
                var files = fs.readdirSync(dir, { withFileTypes: true });
                var directories = files
                    .filter(function (dirent) { return dirent.isDirectory() && !excludedDirectories_1.includes(dirent.name); })
                    .map(function (dirent) { return dirent.name; });
                directories.forEach(function (directory, index) {
                    var directoryPath = path.join(dir, directory);
                    var isLast = index === directories.length - 1;
                    console.log("".concat(prefix).concat(isLast ? '└──' : '├──', " ").concat(directory));
                    var nestedPrefix = "".concat(prefix).concat(isLast ? '   ' : '│  ');
                    hasPreviousProject_1(directoryPath, nestedPrefix);
                });
            };
            hasPreviousProject_1('./');
            console.error('\x1b[36mℹ️ A previous project is already found.\x1b[0m');
            return;
        }
        else {
            createInputCSVFiles();
            var outputDir = 'output';
            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir);
                var gitKeepFile = "".concat(outputDir, "/.gitkeep");
                fs.writeFileSync(gitKeepFile, '');
                console.log('\x1b[36mℹ️ The', '\x1b[33m./output', '\x1b[36mdirectory has been created.\x1b[0m');
            }
        }
    });
}
exports.default = ttsInit;
