"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
function createInputCSVFiles() {
    var inputDir = '../input';
    if (!fs.existsSync(inputDir)) {
        fs.mkdirSync(inputDir);
        console.log('\x1b[36mℹ️ The `./input` directory has been created.\x1b[0m');
    }
    var taxaToExportContent = "Mimosa afranioi\n    Mimosa arenosa var arenosa\n    Mimosa aurivillus var calothamnos\n    Mimosa bimucronata\n    Mimosa blanchetii\n    Mimosa caesalpiniifolia\n    Mimosa campicola\n    Mimosa cordistipula\n    Mimosa cubatanensis\n    Mimosa debilis var debilis\n    Mimosa diplotricha var diplotricha\n    Mimosa dolens var dolens\n    Mimosa dryandroides var dryandroides\n    Mimosa elliptica";
    var importTaxaContent = "\"specificEpithet\",\"leaf.bipinnate.pinnae.numberOfPairs.rarelyMin\",\"leaf.bipinnate.pinnae.numberOfPairs.min\",\"leaf.bipinnate.pinnae.numberOfPairs.max\",\"leaf.bipinnate.pinnae.numberOfPairs.rarelyMax\",\"leaf.bipinnate.pinnae.numberOfPairs.value\",\"leaf.bipinnate.pinnae.leaflet.numberOfPairs.rarelyMin\",\"leaf.bipinnate.pinnae.leaflet.numberOfPairs.min\",\"leaf.bipinnate.pinnae.leaflet.numberOfPairs.max\",\"leaf.bipinnate.pinnae.leaflet.numberOfPairs.rarelyMax\",\"leaf.bipinnate.pinnae.leaflet.numberOfPairs.value\",\"inflorescence.spicate\",\"inflorescence.capitate\",\"flower.merism\",\"flower.calyx.shape\",\"flower.corolla.shape\",\"flower.numberWhorlsOfStamens\",\"androecium.filaments.colour\",\"descriptionAuthorship\",\"timestamp\"\n    \"arenosa var arenosa\",\"\",\"4\",\"12\",\"\",\"\",\"\",\"12\",\"30\",\"\",\"\",\"yes\",\"\",\"4-merous\",\"campanulate\",\"turbinate\",\"diplostemonous\",\"withish\",\"Lucas S\u00E1 Barreto Jord\u00E3o\",\"12312\"\n    \"artemisiana\",\"\",\"7\",\"12\",\"\",\"\",\"\",\"15\",\"29\",\"\",\"\",\"yes\",\"\",\"4-merous\",\"campanulate\",\"campanulate\",\"diplostemonous\",\"withish\",\"Lucas S\u00E1 Barreto Jord\u00E3o\",\"12312\"";
    var taxaToExportPath = path.join(inputDir, 'taxaToExport.csv');
    var importTaxaPath = path.join(inputDir, 'importTaxa.csv');
    fs.writeFileSync(taxaToExportPath, taxaToExportContent);
    fs.writeFileSync(importTaxaPath, importTaxaContent);
    console.log('\x1b[36mℹ️ Two .csv files have been created inside the `./input` directory.\x1b[0m');
}
function ttsInit() {
    // Checking directories
    fs.readdir('../', function (err, dirs) {
        if (err) {
            console.error('Error reading directories:', err);
            return;
        }
        var requiredDirs = ['input', 'output', 'node_modules'];
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
            var excludedDirectories_1 = ['node_modules', '.git', 'dist', 'bin'];
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
            hasPreviousProject_1('../');
            console.error('\x1b[36mℹ️ A previous project is already found.\x1b[0m');
            return;
        }
        else {
            var outputDir = '../output';
            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir);
                var gitKeepFile = "".concat(outputDir, "/.gitkeep");
                fs.writeFileSync(gitKeepFile, '');
                console.log('\x1b[36mℹ️ The `./output` directory has been created.\x1b[0m');
            }
            createInputCSVFiles();
            console.log('\x1b[36mℹ️ The `./input` directory has been created.\x1b[0m');
        }
    });
}
exports.default = ttsInit;
