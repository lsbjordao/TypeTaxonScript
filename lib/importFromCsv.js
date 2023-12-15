const fs = require('fs')
const csvParser = require('csv-parser')
const Mustache = require('mustache')

const mapColumns = {
  'specificEpithet': 'specificEpithet',
  'descriptionAuthorship': 'descriptionAuthorship',
  'leaf.bipinnate.pinnae.numberOfPairs.value': 'leafBipinnatePinnaeNumberOfPairsValue',
  'leaf.bipinnate.pinnae.numberOfPairs.rarelyMin': 'leafBipinnatePinnaeNumberOfPairsRarelyMin',
  'leaf.bipinnate.pinnae.numberOfPairs.min': 'leafBipinnatePinnaeNumberOfPairsMin',
  'leaf.bipinnate.pinnae.numberOfPairs.max': 'leafBipinnatePinnaeNumberOfPairsMax',
  'leaf.bipinnate.pinnae.numberOfPairs.rarelyMax': 'leafBipinnatePinnaeNumberOfPairsRarelyMax',
  'leaf.bipinnate.pinnae.numberOfPairs.value': 'leafBipinnatePinnaeNumberOfPairsValue',
  'leaf.bipinnate.pinnae.leaflet.numberOfPairs.rarelyMin': 'leafBipinnatePinnaeLeafletNumberOfPairsRarelyMin',
  'leaf.bipinnate.pinnae.leaflet.numberOfPairs.min': 'leafBipinnatePinnaeLeafletNumberOfPairsMin',
  'leaf.bipinnate.pinnae.leaflet.numberOfPairs.max': 'leafBipinnatePinnaeLeafletNumberOfPairsMax',
  'leaf.bipinnate.pinnae.leaflet.numberOfPairs.rarelyMax': 'leafBipinnatePinnaeLeafletNumberOfPairsRarelyMax',
  'leaf.bipinnate.pinnae.numberOfPairs.value': 'leafBipinnatePinnaeLeafletNumberOfPairsValue',
  'inflorescence.type': 'inflorescenceType',
  'inflorescence.shape': 'inflorescenceShape',
  'flower.merism': 'flowerMerism',
  'flower.numberWhorlsOfStamens': 'numberWhorlsOfStamens',
  'flower.calyx.shape': 'flowerCalyxShape',
  'flower.corolla.shape': 'flowerCorollaShape',
  'androecium.filaments.colour': 'androeciumFilamentsColour',
  'timestamp': 'timestamp'
};

const template = fs.readFileSync('../taxon/Mimosa/Mimosa_template.txt', 'utf-8')
const outputPath = '../output/'

console.log('\x1b[1m\x1b[36mProcess started.\x1b[0m')

fs.createReadStream('../input/importTaxa.csv')
  .pipe(csvParser())
  .on('data', (taxon) => {
    generateDescription(taxon)
  })
  .on('end', () => {
    console.log('\x1b[1m\x1b[32m✔ Process finished.\x1b[0m')
  });

function generateDescription(taxon) {
  const context = {};

  for (const column in mapColumns) {
    const templateColumn = mapColumns[column]
    if (taxon[column]) {
      context[templateColumn] = taxon[column]
    }
  }

  // Special conditions
  if (taxon['inflorescence.capitate'] === 'yes') {
    context['capitateInflorescence'] = true
  }
  if (taxon['inflorescence.spicate'] === 'yes') {
    context['spicateInflorescence'] = true
  }

  const output = Mustache.render(template, context, 'utf-8')
  const speciesName = taxon['specificEpithet']
  const fileName = `${outputPath}Mimosa ${speciesName}.ts`

  if (output.trim() !== "") {
    fs.writeFileSync(fileName, output)
    console.log(`\x1b[1m\x1b[33m${fileName}\x1b[0m`);
  }
}
