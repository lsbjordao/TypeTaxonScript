"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = require("yargs");
var init_1 = require("./init");
var new_1 = require("./new");
var import_1 = require("./import");
var export_1 = require("./export");
var exportSources_1 = require("./exportSources");
var exportToCsv_1 = require("./exportToCsv");
var findProperty_1 = require("./findProperty");
yargs_1.default.version();
yargs_1.default.command({
    command: 'init',
    describe: 'Initiate a TTS project',
    builder: {},
    handler: function () { return (0, init_1.default)(); },
});
yargs_1.default.command({
    command: 'new',
    describe: 'Create a new description entry',
    builder: {
        genus: {
            describe: 'Genus name',
            demandOption: true,
            type: 'string',
        },
        species: {
            describe: 'Specific epithet',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function (argv) {
        (0, new_1.default)(argv.genus, argv.species);
    },
});
yargs_1.default.command({
    command: 'import',
    describe: 'Import taxa and characters from CSV file',
    builder: {
        genus: {
            describe: 'Genus name',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function (argv) {
        (0, import_1.default)(argv.genus);
    },
});
yargs_1.default.command({
    command: 'export',
    describe: 'Export a JSON database',
    builder: {
        genus: {
            describe: 'Genus name',
            demandOption: true,
            type: 'string',
        },
        load: {
            describe: 'Load a list of taxa to export from the csv file: "./input/taxaToExport.csv".',
            demandOption: false,
            type: 'string',
            choices: ['all', 'csv'],
            default: 'all'
        }
    },
    handler: function (argv) {
        (0, export_1.default)(argv.genus, argv.load);
    },
});
yargs_1.default.command({
    command: 'exportSources',
    describe: 'Export sources database',
    builder: {
        genus: {
            describe: 'Genus name',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function (argv) {
        (0, exportSources_1.default)(argv.genus);
    },
});
yargs_1.default.command({
    command: 'exportToCsv',
    describe: 'Export a CSV database',
    builder: {
        genus: {
            describe: 'Genus name',
            demandOption: true,
            type: 'string',
        },
        load: {
            describe: 'Load a list of taxa to export from the csv file: "./input/taxaToExport.csv".',
            demandOption: false,
            type: 'string',
            choices: ['all', 'csv'],
            default: 'all'
        }
    },
    handler: function (argv) {
        (0, exportToCsv_1.default)(argv.genus, argv.load);
    },
});
yargs_1.default.command({
    command: 'findProperty',
    describe: 'Find a property',
    builder: {
        property: {
            describe: 'Property path to find',
            demandOption: true,
            type: 'string',
        },
        genus: {
            describe: 'Genus name',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (argv) {
        (0, findProperty_1.default)(argv.property, argv.genus);
    },
});
yargs_1.default
    .parse();
