const fs = require('fs')
const csvParser = require('csv-parser')
const Mustache = require('mustache')

const data = []
fs.createReadStream('dados.csv')
  .pipe(csvParser())
  .on('data', (row) => {
    data.push(row)
  })
  .on('end', () => {
    generateDescription(data)
  })

function generateDescription(data) {
  data.forEach((row) => {
    const template = fs.readFileSync('../taxon/Mimosa/Mimosa_template.txt', 'utf-8')

    const context = {}

    if (row['specificEpithet']) {
      context.specificEpithet = row['specificEpithet']
    }
    if (row['descriptionAuthorship']) {
      context.descriptionAuthorship = row['descriptionAuthorship']
    }
    if (row['leaf.bipinnate.pinnae.numberOfPairs.value']) {
      context.leafBipinnatePinnaeNumberOfPairsValue = row['leaf.bipinnate.pinnae.numberOfPairs.value']
    }
    if (row['leaf.bipinnate.pinnae.numberOfPairs.rarelyMin']) {
      context.leafBipinnatePinnaeNumberOfPairsRarelyMin = row['leaf.bipinnate.pinnae.numberOfPairs.rarelyMin']
    }
    if (row['leaf.bipinnate.pinnae.numberOfPairs.min']) {
      
      context.leafBipinnatePinnaeNumberOfPairsMin = row['leaf.bipinnate.pinnae.numberOfPairs.min']
    }
    if (row['leaf.bipinnate.pinnae.numberOfPairs.max']) {
      context.leafBipinnatePinnaeNumberOfPairsMax = row['leaf.bipinnate.pinnae.numberOfPairs.max']
    }
    if (row['leaf.bipinnate.pinnae.numberOfPairs.rarelyMax']) {
      context.leafBipinnatePinnaeNumberOfPairsRarelyMax = row['leaf.bipinnate.pinnae.numberOfPairs.rarelyMax']
    }
    if (row['leaf.bipinnate.pinnae.leaflet.numberOfPairs.value']) {
      context.leafBipinnatePinnaeLeafletNumberOfPairsValue = row['leaf.bipinnate.pinnae.leaflet.numberOfPairs.value']
    }
    if (row['leaf.bipinnate.pinnae.leaflet.numberOfPairs.rarelyMin']) {
      context.leafBipinnatePinnaeLeafletNumberOfPairsRarelyMin = row['leaf.bipinnate.pinnae.leaflet.numberOfPairs.rarelyMin']
    }
    if (row['leaf.bipinnate.pinnae.leaflet.numberOfPairs.min']) {
      
      context.leafBipinnatePinnaeLeafletNumberOfPairsMin = row['leaf.bipinnate.pinnae.leaflet.numberOfPairs.min']
    }
    if (row['leaf.bipinnate.pinnae.leaflet.numberOfPairs.max']) {
      context.leafBipinnatePinnaeLeafletNumberOfPairsMax = row['leaf.bipinnate.pinnae.leaflet.numberOfPairs.max']
    }
    if (row['leaf.bipinnate.pinnae.leaflet.numberOfPairs.rarelyMax']) {
      context.leafBipinnatePinnaeLeafletNumberOfPairsRarelyMax = row['leaf.bipinnate.pinnae.leaflet.numberOfPairs.rarelyMax']
    }
    if (row['inflorescence.type']) {
      context.inflorescenceType = row['inflorescence.type']
    }
    if (row['inflorescence.shape']) {
      context.inflorescenceShape = row['inflorescence.shape']
    }
    if (row['inflorescence.capitate'] === 'yes') {
      context.capitateInflorescence = true
    }
    if (row['inflorescence.spicate'] === 'yes') {
      context.spicate = true
    }
    if (row['flower.merism']) {
      context.flowerMerism = row['flower.merism']
    }
    if (row['flower.numberWhorlsOfStamens']) {
      context.numberWhorlsOfStamens = row['flower.numberWhorlsOfStamens']
    }
    if (row['flower.calyx.shape']) {
      context.flowerCalyxShape = row['flower.calyx.shape']
    }
    if (row['flower.corolla.shape']) {
      context.flowerCorollaShape = row['flower.corolla.shape']
    }
    if (row['androecium.filaments.colour']) {
      context.androeciumFilamentsColour = row['androecium.filaments.colour']
    }
    if (row['timestamp']) {
      context.timestamp = row['timestamp']
    }

    const output = Mustache.render(template, context)

    const speciesName = row.specificEpithet
    const fileName = `./output/Mimosa ${speciesName}.ts`

    if (output.trim() !== "") {
      fs.writeFileSync(fileName, output)
      console.log(`Arquivo TypeScript gerado com sucesso: ${fileName}`)
    }
  })
}
