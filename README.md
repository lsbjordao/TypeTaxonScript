# TypeTaxonScrip

## Install Node.js

Before you begin, ensure that Node.js is installed on your system. Node.js is essential for running JS applications on your machine. You can download and install it from the official Node.js website (https://nodejs.org/).

## Install Visual Studio Code

VS Code is a versatile code editor that provides a user-friendly interface and a plethora of extensions for enhanced development. Download and install VS Code from its official website (https://code.visualstudio.com/) to utilize its features for your project.

## Clone the repository from GitHub

To clone the repository, follow these steps:

1. Open the Command Palette by pressing `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (macOS).
2. Type `Git: Clone` and select the option that appears.
3. A text field will appear at the top of the window. Enter the URL of the repository you want to clone. In this case, use `https://github.com/lsbjordao/TypeTaxonScript-Mimosa`.
4. Choose a local directory where you want to clone the repository to.

## Installing TypeTaxonScript

Open your terminal and execute the command at the root, where is the `package.json`:

```ts
npm install typetaxonscript -g
```

## Initializing a new taxon description

To generate a new `.ts` file containing a comprehensive script outlining the entire hierarchy of characters, serving as the foundational template to initiate the description of a species from scratch, utilize the command `tts` followed by the `-newDescription` argument, specifying the genus name and the specific epithet as shown below:

```bash
tts new --genus Mimosa --genus specificEpithet
```

After that, a new file `./output/Mimosa specificEpithet.ts` will be created.

## Importing from `.csv` file

It is also possible to import data from a `.csv` file with a header in the following manner. The only required field is `specificEpithet`. Each column should be named according to the complete JSON path of the corresponding attribute.

All values are imported automatically. However, if we want to describe a specific characteristic, which is a key object, we need to fill the column name with its JSON path and enter `yes` in the cell where that characteristic needs to be automatically instantiated. For example, if we have inflorescence types "capitate" and "spicate", to instantiate the respective class within the file, in the `.csv` table, we create columns `inflorescence.capitate` and `inflorescence.spicate` and enter `yes` in the cells of the respective species. Of course, only one of them is possible in the plant body, and we should not instantiate both concurrently.

```bash
tts import --genus Mimosa
```

All `.ts` files will be created in the directory `./output/`.