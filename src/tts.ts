//@ts-ignore
import { Command, OptionValues } from 'commander'
import newDesc from './newDesc'

const program = new Command()

program
  .option('--newDesc')
  .option('-g, --genus <char>')
  .option('-s, --specificEpithet <char>')
  .action((arg, command)=>{
    const {genus, specificEpithet} = command.opts()
    newDesc(genus, specificEpithet)
  })
program.parse()

// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(options);