# TypeTaxonScript (TTS)

Not Word or Excel, but TypeTaxonScript. We stand at the threshold of a new era in biological taxonomy descriptions. In this era, software engineering methods using TypeScript (TS) are employed to build a robust data structure, fostering enduring, non-redundant collaborative efforts through the application of a kind of taxonomic engineering of biological bodies. This innovative program introduces a new approach for precise and resilient documentation of taxa and characters, transcending the limitations of traditional text and spreadsheet editors. TypeTaxonScript streamlines and optimizes this process, enabling meticulous and efficient descriptions of diverse organisms, propelling the science of taxonomy and systematics to elevate levels of collaboration, precision, and effectiveness.

## Install Node.js

Before you begin, ensure that Node.js is installed on your system. Node.js is essential for running JavaScript (JS) applications on your machine. You can download and install it from the official Node.js website (https://nodejs.org/).

## Install Visual Studio Code

Visual Studio Code (VS Code) is a versatile code editor that provides a user-friendly interface and a plethora of extensions for enhanced development. Download and install VS Code from its official website (https://code.visualstudio.com/) to utilize its features for your project.

## Clone the repository from GitHub

To clone the *Mimosa* project repository for TypeTaxonScript from GitHub, follow these steps:

1. In VS Code, access the Command Palette by pressing `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (macOS).
2. Type `Git: Clone` and select the option that appears.
3. A text field will appear at the top of the window. Enter the URL of the repository you want to clone. In this case, use `https://github.com/lsbjordao/TTS-Mimosa`.
4. Choose a local directory where you want to clone the repository to.

## Open the TTS project directory in VS Code

To open the TTS project directory in VS Code:

1. Click on `File` in the top menu.
2. Select `Open Folder` from the dropdown menu.
3. Navigate to the location where your TTS project (e.g., [TTS-Mimosa](https://github.com/lsbjordao/TTS-Mimosa)) directory is stored.
4. Click on the TTS project directory to select it.
5. Click the `Open` button.

## Installing TTS package

Open your terminal and execute the command at the root, where is the `package.json`:

1. Navigate to the top menu and select `Terminal`.
2. From the dropdown menu, choose `New Terminal`.

In the terminal, type and execute the following command:

```ts
npm install -g type-taxonscript
```

## Initializing a TTS project

To initiate the use of a TTS project, execute the following command:

```bash
tts init
```

This command will verify the presence of an existing TTS project within the directory. Additionally, it will generate two mandatory directories, `./input` and `./output`, but only if the `characters` and `taxon` directories already exist. These newly created directories are essential for the functioning of the project.

## Describing a new taxon

To generate a new `.ts` file containing a comprehensive script outlining the entire hierarchy of characters, serving as the foundational template to initiate the description of a species from scratch, utilize the command `tts` followed by the `-newDescription` argument, specifying the genus name and the specific epithet as shown below:

```bash
tts new --genus Mimosa --species epithet
```

After the process, a new file named `Mimosa_epithet.ts` will be created in the `./output` directory. To access this script file, simply hold down the `Ctrl` key and click on the file path displayed in the console. However, before you begin editing the script, it is important to relocate this file to the `./taxon` directory, as the script specifically functions within that directory.

## Importing from `.csv` file

It is also possible to import data from a `.csv` file with a header in the following manner. The only required field is `specificEpithet`. Each column should be named according to the complete JSON path of the corresponding attribute.

All values are imported automatically. However, if we want to describe a specific characteristic, which is a key object, we need to fill the column name with its JSON path and enter `yes` in the cell where that characteristic needs to be automatically instantiated. For example, if we have inflorescence types "capitate" and "spicate", to instantiate the respective class within the file, in the `.csv` table, we create columns `inflorescence.capitate` and `inflorescence.spicate` and enter `yes` in the cells of the respective species. Of course, only one of them is possible in the plant body, and we should not instantiate both concurrently.

```bash
tts import --genus Mimosa
```

The generated `.ts` files will be located in the `./output` directory. Since the script operates exclusively within the `./taxon` directory, it is necessary to relocate all these files to that specific directory for the script to function properly.

## Documentation

Every element within the code is accompanied by metadata. Simply hover your cursor over an element, and its metadata will promptly appear:

![](https://i.imgur.com/Ql9JWaB.png)

## Taxon edition

To edit a species `.ts` file, open it and utilize the `'` key after the `=` sign to access attribute options. After that, press `Enter`. The autocompletion feature will assist in completing the entry:

![](https://i.imgur.com/H3nuAGR.png)

## Cross-referecing 

Every class is interconnected through cross-referencing. By holding down `Ctrl` and clicking on a class, the associated `.ts` file containing the class description will open automatically. This feature allows us to seamlessly navigate through the character hierarchy.

Furthermore, we have the capability to track down instances where a class is employed. For example, when we seek to identify occurrences of a character class being used, we can easily inspect the class name. As illustrated in the given example, a `Gall` is mentioned in the description of *Mimosa gemmulata*, and by clicking on it, we can promptly open its respective file.

![](https://i.imgur.com/ZqPEBNZ.png)

## Multi line edition

Use the shortcut `Ctrl + Shift + L` for efficient multi-line editing. Press `Esc` to end the multi line edition.

![](https://i.imgur.com/nU7Cfyw.png)

## Automatic code formatting

When you right-click on any content in a file and select `Format Document` in VS Code, the code is automatically adjusted for indentation, spacing, and more. This feature simplifies code maintenance and helps maintain a consistent coding style throughout your code.

## Git versioning

In VS Code, by simply clicking on a file listed in the Git panel, you can instantly view code modifications. A split-screen appears, highlighting changes in green (additions) and red (deletions) compared to the previous version of the code. This feature simplifies reviewing changes and makes it easy to track modifications in an intuitive and efficient development environment.

![](https://i.imgur.com/aIiOs4e.png)

VS Code offers a range of features and extensions to streamline conflict resolution. These include interactive merge tools, side-by-side file comparison, and even built-in three-way merge support. We can manage the Git versioning process using simple clicks of a button.

## Export `.json` database

To export all taxa inside `./taxon/Mimosa`, type:

```bash
tts export --genus Mimosa
```

If you intend to generate a database containing a specific list of taxa from the directory `./taxon/Mimosa`, edit the `./input/taxonToImport.csv` file accordingly. After making the necessary edits, execute the following command:

```bash
tts export --genus Mimosa --load csv
```

The resulting `.ts` files will be generated and stored in the directory `./output/`.

Errors may occur twice during the export process: during compilation (TS) and execution (JS) stages.

Regarding compilation errors, for instance, two issues were encountered in files `Mimosa_test.ts` and `Mimosa_test2`.ts while attempting to export the *Mimosa* database. In the `Mimosa_test.ts` script, the class `ractole` was listed as a property of flower, but the error message suggests the correction to `bracteole`. In the `Mimosa_test2.ts` script, an undeclared property for the adaxial surface of the leaflet was caught. See bellow:

![](https://i.imgur.com/LxARTPr.png)

Errors can be caught during the execution phase. In the case below, a stipe length was set with its minimum value as `5` and its maximum as `3` using the `.setHeightMinMax()` method. Such an error won't be caught during compilation as the type is correct (`number`), but during execution, a message in the terminal indicates that the "minimum height must be less than the maximum height." See below:

![](https://i.imgur.com/H2coIlQ.png)

### Sources dataset

We can create a consolidated dataset that compiles all sources into a flatter JSON structure, enabling simpler query access. To generate a database solely containing sources related to the taxa, execute the following command:

```bash
tts exportSources --genus Mimosa
```

This dataset includes an index that relates to the main database and provides the complete key path where each source is located:

```ts
[{
    index: 7,
    path: 'flower.corolla.trichomes.stellate.lepidote',
    source: {
      sourceType: 'article',
      authorship: 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.',
      year: 2020,
      title: 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization',
      journal: 'Flora',
      number: 272,
      pages: 151702,
      figure: '4I',
      obtainingMethod: 'scanningElectronMicroscope'
    }
}]
```

## Navigating the database

Utilizing the JSON Grid Viewer extension (https://github.com/dutchigor/json-grid-viewer), which is readily accessible on the Visual Studio Marketplace (https://marketplace.visualstudio.com/), we can effortlessly delve into the intricate structure of JSON configurations:

![](https://i.imgur.com/uBer42J.png)

## Query methods

Data querying techniques encompass a range of methods tailored to diverse needs. Basic querying relies on key-value pairs for precise data retrieval, while range queries are optimal for numerical, or date-based data, allowing data extraction within specified value ranges.

Another type of query method involves the aggregation approach, which provides advanced data manipulation capabilities, enabling chain operations such as grouping and filtering within the database. This is made possible because the result of a query always returns the complete document within the database. Thus, additional queries can be chained to perform multiple aggregations or filterings.

### Character path querying

Let us define a "property" as a JSON path of keys within the character tree. When we need to retrieve a property from the database, we search for its corresponding JSON path, such as `trichomes.stellate`. This search yields the indices of the documents where the property was found and the paths where it was located, achieved using the `search` method:

```bash
tts findProperty --property trichomes.stellate --genus Mimosa
```

Results:

```ts
// Indices and paths of objects with the property:
// "trichomes.stellate": 
[
  { specificEpithet: 'furfuraceae', index: 5, paths: [ 'flower.corolla' ] },
  { specificEpithet: 'myuros', index: 6, paths: [ 'stems' ] },
  {
    specificEpithet: 'schomburgkii',
    index: 7,
    paths: [ 
        'leaf.bipinnate.pinnae.leaflet.abaxial',
        'flower.corolla' 
    ]
  }
]
```

In the preceding example, stellate trichomes were identified within the corolla of *M. furfuraceae*, the stems of *M. myuros*, and both the abaxial surface of leaflet and corolla in *M. schomburgkii*.

### Flexible key-value querying

Another querying approach for property querying involves flexible key-value querying. This method enables searching within a JSON path using a specific value that can meet defined conditions. During the search, `*.` can be employed to locate a particular JSON path associated with a value determined by specific conditions.

To utilize flexible JSON searching, installation of the `flex-json-searcher` and `fs` modules is required. The `fs` module is inherent to Node.js. The `fs` module is a core part of Node.js, while the `flex-json-searcher` module offers extensive functionality tailored for diverse JSON file queries. To install, execute the following commands:

```ts
npm install fs
npm install flex-json-searcher
```

Using `require()`:

```ts
const fs = require('fs')
const search = require('flex-json-searcher')

const filePath = './output/MimosaDB.json'

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err)
    return
  }
  
  const MimosaDB = data
  const result = MimosaDB.search("*.setiform.orientation", "antrorse")
  
  // Print result on console
  console.log(result)
})

```

Results:

```ts
// Indices and paths of objects with the property:
// "setiform.orientation" = "antrorse":
[
  { index: 10, paths: [
      'stipule.margin',
      'stipule.abaxial',
      'flower.bracteole.apex'
    ] 
  }
]
```

### Range querying

Range querying involves searching for and retrieving data within a specific range of values or criteria, such as a range of dates, numerical values, or any other defined attributes.

For range querying, we use the `flex-json-searcher` and `fs` modules, and these must be installed. See code above to install both packages.

```ts
const fs = require('fs')
const search = require('flex-json-searcher')

const filePath = './output/MimosaDB.json'

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err)
    return
  }
  
  const MimosaDB = data
  const result = MimosaDB.search("leaf.bipinnate.pinnae.leaflet.height", "gt", "3")
  
  // Print result on console
  console.log(result)
})
```

Results:

```ts
// Indices and paths of objects with the property:
// "leaf.bipinnate.pinnae.leaflet.height.min" > "19":
[
  { index: 13, paths: [
      'leaf.bipinnate.pinnae.leaflet.height.min': 20,
      'leaf.bipinnate.pinnae.leaflet.height.max': 70
    ] 
  }
]
```

In the example above, we are querying for species with leaflets measuring greater than 19 millimeters in height, and it returned *M. porrecta*.

### Source querying

In the exported sources database, we have the capability to perform queries and retrieve specific information. For instance, we can query the database to obtain all images captured using a scanning electron microscope:

```ts
const fs = require('fs')
const search = require('flex-json-searcher')

const filePath = './output/MimosaDBsources.json'

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err)
    return
  }
  
  const MimosaDBsources = data
  const result = MimosaDBsources.search("obtainingMethod", "scanningElectronMicroscope")
  
  // Print result on console
  console.log(result)
})
```

Results: 

```ts
// Indices and paths of objects with the property:
// "obtainingMethod" = "scanningElectronMicroscope":
[
    { index: 3, path: 'stems.trichomes.capitate.setiform' },
    { index: 3, path: 'stems.trichomes.filiform' },
    { index: 3, path: 'stems.trichomes.porrect' },
    { index: 4, path: 'leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.granular' },
    { index: 4, path: 'leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.porrect' },
    { index: 5, path: 'leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.dendritic' },
    { index: 5, path: 'leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate' },
    { index: 6, path: 'fruit.epicarp.trichomes.verruciform' },
    { index: 6, path: 'stems.trichomes.stellate' },
    { index: 7, path: 'flower.corolla.trichomes.stellate.lepidote' },
    { index: 7, path: 'leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.peltate' }
]
```

The complete information for each source is readily accessible, such as the `sourceType`, `journal`, `figure`, `authorship`.