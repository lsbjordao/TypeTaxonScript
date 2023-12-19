import yargs from 'yargs'
import ttsInit from './init'
import ttsNew from './new'
import ttsImport from './import'
import ttsExport from './export'
import ttsExportSources from './exportSources'
import ttsfindProperty from './findProperty'

yargs.version('1.0.0')

yargs.command({
  command: 'init',
  describe: 'Initiate a TTS project',
  builder: { },
  handler: ttsInit(),
})

yargs.command({
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
  handler: (argv) => {
    ttsNew(argv.genus as string, argv.species as string)
  },
})

yargs.command({
  command: 'import',
  describe: 'Import taxa and characters from CSV file',
  builder: {
    genus: {
      describe: 'Genus name',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    ttsImport(argv.genus as string)
  },
})

yargs.command({
  command: 'export',
  describe: 'Export database',
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
  handler: (argv) => {
    ttsExport(argv.genus as string, argv.load as 'all'|'csv')
  },
})

yargs.command({
  command: 'exportSources',
  describe: 'Export sources database',
  builder: {
    genus: {
      describe: 'Genus name',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    ttsExportSources(argv.genus as string)
  },
})

yargs.command({
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
  handler: (argv) => {
    ttsfindProperty(argv.property as string, argv.genus as string)
  },
})

yargs
  .parse()
