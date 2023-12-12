const fs = require('fs');
const path = require('path');

const filePath = './MimosaDB.json';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);

        
        

        function findObjectsInArray(arr, queryPath, queryValue) {
            const summary = [];
            const indexes = [];
            const paths = [];
          
            function search(obj, path, index) {
              if (typeof obj === "object" && obj !== null) {
                const keys = Object.keys(obj);
          
                for (const key of keys) {
                  let currentPath = path ? `${path}.${key}` : key;
                  const value = obj[key];
          
                  if (
                    currentPath === queryPath ||
                    (queryPath.startsWith("*.") &&
                      currentPath.includes(queryPath.substring(2)))
                  ) {
                    let comparison = true;
          
                    let avoidSummary = false;
                    if (queryValue !== undefined) {
                      comparison = value == queryValue;
                      let positionIfIsArray = 0;
          
                      if (Array.isArray(value)) {
                        positionIfIsArray = value.indexOf(queryValue);
                        comparison = positionIfIsArray >= 0;
                        if (positionIfIsArray >= 0) {
                          //currentPath = `${currentPath}[${positionIfIsArray}]`;
                          if (paths.indexOf(currentPath) >= 0) avoidSummary = true;
                        }
                      }
          
                      if (comparison) {
                        indexes.push(index);
                        if (!avoidSummary) {
                          summary.push({
                            object: obj,
                            index,
                            path: currentPath,
                            queryValue,
                          });
                        }
                      }
                    } else {
                      //if (indexes.indexOf(index) === -1) {
                      indexes.push(index);
                      if (!avoidSummary) {
                        summary.push({
                          object: obj,
                          index,
                          path: currentPath,
                        });
                      }
                      // }
                    }
                  }
          
                  if (typeof value === "object" && value !== null) {
                    search(value, currentPath, index);
                  }
                }
              }
            }
          
            for (let i = 0; i < arr.length; i++) {
              search(arr[i], "", i);
            }
          
            return { summary, results: [...new Set(indexes)].map((index) => arr[index]) };
          }





        const propertyPathToFind = '*.trichomes.stellate.are';

        const result = findObjectsInArray(jsonData, propertyPathToFind, 'present')
        console.log(result)


    } catch (jsonErr) {
        console.error('Error parsing JSON:', jsonErr);
    }
});


  
//   export default findObjectsInArray;
  