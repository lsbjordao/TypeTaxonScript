import fs from 'fs'
import Mustache from 'mustache'

export default function ttsNewDesc(genus: string, species: string): void {
    try {
        if (species === '') {
            console.error('\x1b[31m✖ Argument `--species` cannot be empty.\x1b[0m')
            return
        }
        if (genus === '') {
            console.error('\x1b[31m✖ Argument `--genus` cannot be empty.\x1b[0m')
            return
        }

        const outputDir = 'output/'
        const templatePath = `./taxon/${genus}/${genus}_template.txt`
        if (!fs.existsSync(templatePath)) {
            console.error(`\x1b[31m✖ A TTS project for genus \x1b[33m\x1b[3m${genus}\x1b[0m\x1b[31m has not been implemented yet.\x1b[0m`)
            console.log('\x1b[36m   + ℹ️ To create a new TTS project, visit:\x1b[0m')
            console.log('\x1b[33m     https://www.npmjs.com/package/typetaxonscript?activeTab=readme#creating-and-editing-a-genus-template.\x1b[0m')
            return
        }

        const template = fs.readFileSync(templatePath, 'utf-8')
        let sanitizeSpecificEpithet = species.replace(/\s/g, '_')
        sanitizeSpecificEpithet = sanitizeSpecificEpithet.replace(/-(\w)/, function (match, p1) {
            return p1.toUpperCase()
        })

        const context = {
            specificEpithet: sanitizeSpecificEpithet
        }

        const output = Mustache.render(template, context)
        const fileName = `${outputDir}${genus}_${species.replace(/\s/g, '_')}.ts`

        if (output.trim() !== '') {
            fs.writeFileSync(fileName, output)
            console.log(`\x1b[1m\x1b[32m✔ New script file: \x1b[0m\x1b[1m\x1b[33m./${fileName}\x1b[0m`)
        }
    } catch (error) {
        console.error('An error occurred:', error)
    }
}
