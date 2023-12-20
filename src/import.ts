import fs from 'fs'
import csvParser from 'csv-parser'
import Mustache from 'mustache'

const mapColumns: Record<string, string> = {
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
}

let genusErrorShown: Record<string, boolean> = {}

function generateDescription(taxon: Record<string, string>, genus: string) {
  try {
    const template = fs.readFileSync(`./taxon/${genus}/${genus}_template.txt`, 'utf-8')
    const outputDir = 'output/'

    const context: Record<string, string | boolean> = {}

    for (const column in mapColumns) {
      const templateColumn = mapColumns[column]
      if (taxon[column]) {
        context[templateColumn] = taxon[column]
      }
    }

    if (taxon['inflorescence.capitate'] === 'yes') {
      context['capitateInflorescence'] = true
    }
    if (taxon['inflorescence.spicate'] === 'yes') {
      context['spicateInflorescence'] = true
    }

    let sanitizeSpecificEpithet = taxon['specificEpithet'].replace(/\s/g, '_')
    sanitizeSpecificEpithet = sanitizeSpecificEpithet.replace(/-(\w)/, function (match, p1) {
      return p1.toUpperCase()
    })

    context['specificEpithet'] = sanitizeSpecificEpithet

    const output = Mustache.render(template, context)
    const specificEpithet = taxon['specificEpithet']
    const fileName = `${outputDir}${genus}_${specificEpithet.replace(/\s/g, '_')}.ts`

    if (output.trim() !== '') {
      fs.writeFileSync(fileName, output)
      console.log(`\x1b[1m\x1b[32m✔ New script file: \x1b[0m\x1b[1m\x1b[33m./${fileName}\x1b[0m`)
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      if (genus !== '' && !genusErrorShown[genus]) {
        console.error(`\x1b[31m✖ The template for genus \x1b[33m\x1b[3m${genus}\x1b[0m\x1b[31m has not been implemented yet.\x1b[0m`)
        genusErrorShown[genus] = true
      }
    } else {
      console.error('An error occurred while reading the file:', error)
    }
  }
}

export default function ttsImportFromCsv(genus: string): void {
  if (genus === '') {
    console.error('\x1b[31m✖ Argument `--genus` cannot be empty.\x1b[0m')
    return
  }
  fs.createReadStream('./input/importTaxa.csv')
    .pipe(csvParser())
    .on('data', (taxon: Record<string, string>) => {
      generateDescription(taxon, genus)
    })
    .on('end', () => {
      if (!genusErrorShown[genus]) {
        //console.log('\x1b[1m\x1b[32m✔ Process finished.\x1b[0m')
      }
    })
}
