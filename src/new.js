"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var mustache_1 = require("mustache");
function ttsNewDesc(genus, species) {
    try {
        if (species === '') {
            console.error('\x1b[31m✖ Argument `--species` cannot be empty.\x1b[0m');
            return;
        }
        if (genus === '') {
            console.error('\x1b[31m✖ Argument `--genus` cannot be empty.\x1b[0m');
            return;
        }
        var outputDir = 'output/';
        var templatePath = "./taxon/".concat(genus, "/").concat(genus, "_template.txt");
        if (!fs_1.default.existsSync(templatePath)) {
            console.error("\u001B[31m\u2716 A TTS project for genus \u001B[33m\u001B[3m".concat(genus, "\u001B[0m\u001B[31m has not been implemented yet.\u001B[0m"));
            console.log('\x1b[36m   + ℹ️ To create a new TTS project, visit:\x1b[0m');
            console.log('\x1b[33m     https://www.npmjs.com/package/typetaxonscript?activeTab=readme#creating-and-editing-a-genus-template.\x1b[0m');
            return;
        }
        var template = fs_1.default.readFileSync(templatePath, 'utf-8');
        var sanitizeSpecificEpithet = species.replace(/\s/g, '_');
        sanitizeSpecificEpithet = sanitizeSpecificEpithet.replace(/-(\w)/, function (match, p1) {
            return p1.toUpperCase();
        });
        var context = {
            specificEpithet: sanitizeSpecificEpithet
        };
        var output = mustache_1.default.render(template, context);
        var fileName = "".concat(outputDir).concat(genus, "_").concat(species.replace(/\s/g, '_'), ".ts");
        // timestamp
        output = output.replace('date:', "date: " + Math.floor(Date.now() / 1000));
        if (output.trim() !== '') {
            fs_1.default.writeFileSync(fileName, output);
            console.log("\u001B[1m\u001B[32m\u2714 New script file: \u001B[0m\u001B[1m\u001B[33m./".concat(fileName, "\u001B[0m"));
        }
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
}
exports.default = ttsNewDesc;
