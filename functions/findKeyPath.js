const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const filePath = './MimosaDB.json';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);

        const findPropertyPaths = (obj, propertyPath, currentPath = []) => {
            const paths = [];

            const traverse = (currentObj, path) => {
                const lastKey = path[path.length - 1];

                if (_.get(currentObj, propertyPath)) {
                    if (typeof lastKey !== 'number') {
                        paths.push(path.join('.'));
                    }
                }

                _.forEach(currentObj, (value, key) => {
                    if (_.isObject(value)) {
                        traverse(value, [...path, key]);
                    }
                });
            };

            traverse(obj, currentPath);
            return paths;
        };

        const propertyPathToFind = 'trichomes.stellate';

        const resultIndicesAndPaths = jsonData.flatMap((item, index) => {
            const paths = findPropertyPaths(item, propertyPathToFind);
            if (paths.length > 0) {
                return { index, paths };
            }
            return [];
        });

        console.log('Indices and paths of objects with the property', propertyPathToFind, ':', resultIndicesAndPaths);

    } catch (jsonErr) {
        console.error('Error parsing JSON:', jsonErr);
    }
});
