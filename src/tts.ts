//@ts-ignore
import { Command, OptionValues } from 'commander'
import ttsNewDesc from './newDesc'
// import ttsImportFromCsv from './importFromCsv'
// import ttsExport from './export'
// import ttsExportSources from './exportSources'
// import ttsFindProperty from './findProperty'

const program = new Command()

program
  .option('--newDesc')
  .option('-g, --genus <char>')
  .option('-s, --specificEpithet <char>')
  .action((arg, command)=>{
    const {genus, specificEpithet} = command.opts()
    ttsNewDesc(genus, specificEpithet)
  })
program.parse()

// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(options);