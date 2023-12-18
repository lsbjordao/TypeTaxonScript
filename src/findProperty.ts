import fs from 'fs';
import _ from 'lodash';

export default function ttsfindProperty(property: string, genus: string): void {
    const filePath = `../../output/${genus}DB.json`;

    const propertyPathToFind = property;

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        try {
            const jsonData = JSON.parse(data);

            const findPropertyPath = (obj: any, propertyPath: string, currentPath: string[] = []) => {
                const paths: string[] = [];

                const findPathsRecursively = (currentObj: any, path: string[]) => {
                    const lastKey = path[path.length - 1];

                    if (_.get(currentObj, propertyPath)) {
                        if (typeof lastKey !== 'number') {
                            paths.push(path.join('.'));
                        }
                    }

                    _.forEach(currentObj, (value, key) => {
                        if (_.isObject(value)) {
                            findPathsRecursively(value, [...path, key]);
                        }
                    });
                };

                findPathsRecursively(obj, currentPath);
                return paths;
            };

            const resultIndicesAndPaths = jsonData.flatMap((item: any, index: number) => {
                const paths = findPropertyPath(item, propertyPathToFind);
                if (paths.length > 0) {
                    return { index, paths, specificEpithet: jsonData[index].specificEpithet };
                }
                return [];
            });

            console.log(`\x1b[36mIndices and paths of objects with the property \x1b[33m${propertyPathToFind}\x1b[0m\x1b[36m:\n\n\x1b[0m`, resultIndicesAndPaths);

        } catch (jsonErr) {
            console.error('Error parsing JSON:', jsonErr);
        }
    });
}
