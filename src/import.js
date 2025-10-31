"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var csv_parser_1 = require("csv-parser");
var mustache_1 = require("mustache");
var mapColumns = {
    'specificEpithet': 'specificEpithet',
    'descriptionAuthorship': 'descriptionAuthorship',
    'leaf.bipinnate.pinnae.numberOfPairs.rarelyMin': 'leafBipinnatePinnaeNumberOfPairsRarelyMin',
    'leaf.bipinnate.pinnae.numberOfPairs.min': 'leafBipinnatePinnaeNumberOfPairsMin',
    'leaf.bipinnate.pinnae.numberOfPairs.max': 'leafBipinnatePinnaeNumberOfPairsMax',
    'leaf.bipinnate.pinnae.numberOfPairs.rarelyMax': 'leafBipinnatePinnaeNumberOfPairsRarelyMax',
    'leaf.bipinnate.pinnae.numberOfPairs.value': 'leafBipinnatePinnaeNumberOfPairsValue',
    'leaf.bipinnate.pinnae.leaflet.numberOfPairs.rarelyMin': 'leafBipinnatePinnaeLeafletNumberOfPairsRarelyMin',
    'leaf.bipinnate.pinnae.leaflet.numberOfPairs.min': 'leafBipinnatePinnaeLeafletNumberOfPairsMin',
    'leaf.bipinnate.pinnae.leaflet.numberOfPairs.max': 'leafBipinnatePinnaeLeafletNumberOfPairsMax',
    'leaf.bipinnate.pinnae.leaflet.numberOfPairs.rarelyMax': 'leafBipinnatePinnaeLeafletNumberOfPairsRarelyMax',
    'leaf.bipinnate.pinnae.leaflet.numberOfPairs.value': 'leafBipinnatePinnaeLeafletNumberOfPairsValue',
    'inflorescence.type': 'inflorescenceType',
    'inflorescence.shape': 'inflorescenceShape',
    'flower.merism': 'flowerMerism',
    'flower.numberWhorlsOfStamens': 'numberWhorlsOfStamens',
    'flower.calyx.shape': 'flowerCalyxShape',
    'flower.corolla.shape': 'flowerCorollaShape',
    'androecium.filaments.colour': 'androeciumFilamentsColour',
    'timestamp': 'timestamp'
};
var genusErrorShown = {};
function generateDescription(taxon, genus) {
    try {
        var template = fs_1.default.readFileSync("./taxon/".concat(genus, "/").concat(genus, "_template.txt"), 'utf-8');
        var outputDir = 'output/';
        var context = {};
        for (var column in mapColumns) {
            var templateColumn = mapColumns[column];
            if (taxon[column]) {
                context[templateColumn] = taxon[column];
            }
        }
        if (taxon['inflorescence.capitate'] === 'yes') {
            context['capitateInflorescence'] = true;
        }
        if (taxon['inflorescence.spicate'] === 'yes') {
            context['spicateInflorescence'] = true;
        }
        var sanitizeSpecificEpithet = taxon['specificEpithet'].replace(/\s/g, '_');
        sanitizeSpecificEpithet = sanitizeSpecificEpithet.replace(/-(\w)/, function (match, p1) {
            return p1.toUpperCase();
        });
        context['specificEpithet'] = sanitizeSpecificEpithet;
        var output = mustache_1.default.render(template, context);
        var specificEpithet = taxon['specificEpithet'];
        var fileName = "".concat(outputDir).concat(genus, "_").concat(specificEpithet.replace(/\s/g, '_'), ".ts");
        // timestamp
        output = output.replace('date:', "date: " + Math.floor(Date.now() / 1000));
        output = output
            .replace(/'\[/g, '[')
            .replace(/\]'/g, ']')
            .replace(/&#39;/g, '\'');
        if (output.trim() !== '') {
            fs_1.default.writeFileSync(fileName, output);
            console.log("\u001B[1m\u001B[32m\u2714 New script file: \u001B[0m\u001B[1m\u001B[33m./".concat(fileName, "\u001B[0m"));
        }
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            if (genus !== '' && !genusErrorShown[genus]) {
                console.error("\u001B[31m\u2716 A TTS project for genus \u001B[33m\u001B[3m".concat(genus, "\u001B[0m\u001B[31m has not been implemented yet.\u001B[0m"));
                console.log('\x1b[36m   + ℹ️ To create a new TTS project, visit:\x1b[0m');
                console.log('\x1b[33m     https://www.npmjs.com/package/typetaxonscript?activeTab=readme#creating-and-editing-a-genus-template.\x1b[0m');
                genusErrorShown[genus] = true;
            }
        }
        else {
            console.error('An error occurred while reading the file:', error);
        }
    }
}
function ttsImportFromCsv(genus) {
    if (genus === '') {
        console.error('\x1b[31m✖ Argument `--genus` cannot be empty.\x1b[0m');
        return;
    }
    fs_1.default.createReadStream('./input/importTaxa.csv')
        .pipe((0, csv_parser_1.default)({ separator: ';' }))
        .on('data', function (taxon) {
        generateDescription(taxon, genus);
    })
        .on('end', function () {
        if (!genusErrorShown[genus]) {
            //console.log('\x1b[1m\x1b[32m✔ Process finished.\x1b[0m')
        }
    });
}
exports.default = ttsImportFromCsv;
