const fs = require('fs');
const _ = require('lodash');

const args = process.argv.slice(2)
const genus = args[0]

const filePath = `../output/${genus}DB.json`;

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);

        const findObjectsWithSources = (obj, currentPath = []) => {
            let objectsWithSources = [];

            const findObjectsWithSourcesRecursively = (currentObj, path) => {
                if (_.isObject(currentObj)) {
                    _.forOwn(currentObj, (value, key) => {
                        if (key === 'sources' && Array.isArray(value) && value.length > 0) {
                            value.forEach(source => {
                                objectsWithSources.push({
                                    index: path[0],
                                    path: path.join('.'),
                                    specificEpithet: _.get(jsonData[path[0]], 'specificEpithet'),
                                    source: source
                                });
                            });
                        }
                        if (_.isObject(value)) {
                            findObjectsWithSourcesRecursively(value, [...path, key]);
                        }
                    });
                }
            };

            findObjectsWithSourcesRecursively(obj, currentPath);

            objectsWithSources.forEach(item => {
                item.path = item.path.replace(new RegExp(`^${item.index}\\.|${item.index}$`), '');
            });

            return objectsWithSources;
        };

        const objectsWithSources = findObjectsWithSources(jsonData.map((item, index) => ({ ...item, index })));

        const filePathOutput = `../output/${genus}DBsources.json`
        const jsonContent = JSON.stringify(objectsWithSources, null, 2);
        fs.writeFileSync(filePathOutput, jsonContent, 'utf-8')
        console.log(`\x1b[1m\x1b[32m✔ Database exported: file ./output/${genus}DBsources.json created.\x1b[0m`)
    } catch (jsonErr) {
        console.error('Error parsing JSON:', jsonErr);
    }
});
