// prepareExport.js

const fs = require('fs');
const csvParser = require('csv-parser')

const filePath = '../input/taxaToExport.csv';

const results = [];

fs.createReadStream(filePath)
    .pipe(csvParser({ headers: false }))
    .on('data', (data) => {
        results.push(data['0'])
    })
    .on('end', () => {
        console.log(results)
        console.log('\x1b[1m\x1b[32m✔ File export.ts prepared.\x1b[0m')
    });
