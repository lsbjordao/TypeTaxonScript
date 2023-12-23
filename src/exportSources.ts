import fs from 'fs'
import _ from 'lodash'

export default function ttsExportSources(genus: string): void {
    if (genus === '') {
        console.error('\x1b[31m✖ Argument `--genus` cannot be empty.\x1b[0m');
        return;
    }
    
    const filePath = `./output/${genus}DB.json`

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err)
            return
        }

        try {
            const jsonData = JSON.parse(data)

            const findObjectsWithSources = (obj: any, currentPath: string[] = []) => {
                let objectsWithSources: any[] = []

                const findObjectsWithSourcesRecursively = (currentObj: any, path: string[]) => {
                    if (_.isObject(currentObj)) {
                        _.forOwn(currentObj, (value: string | number, key) => {
                            if (key === 'sources' && Array.isArray(value) && value.length > 0) {
                                value.forEach((source: any) => {
                                    objectsWithSources.push({
                                        index: path[0],
                                        path: path.join('.'),
                                        specificEpithet: _.get(jsonData[path[0]], 'specificEpithet'),
                                        source: source
                                    })
                                })
                            }
                            if (_.isObject(value)) {
                                findObjectsWithSourcesRecursively(value, [...path, key])
                            }
                        })
                    }
                }

                findObjectsWithSourcesRecursively(obj, currentPath)

                objectsWithSources.forEach(item => {
                    item.path = item.path.replace(new RegExp(`^${item.index}\\.|${item.index}$`), '')
                })

                return objectsWithSources
            }

            const objectsWithSources = findObjectsWithSources(jsonData.map((item: any, index: number) => ({ ...item, index })))

            const filePathOutput = `./output/${genus}SourcesDB.json`
            const jsonContent = JSON.stringify(objectsWithSources, null, 2)
            fs.writeFileSync(filePathOutput, jsonContent, 'utf-8')
            console.log(`\x1b[1m\x1b[32m✔ Database exported: \x1b[33m${filePathOutput}\x1b[0m\x1b[1m\x1b[32m\x1b[0m`)
        } catch (jsonErr) {
            console.error('Error parsing JSON:', jsonErr)
        }
    })
}