# TypeTaxonScript (TTS)

## Install Node.js

Before you begin, ensure that Node.js is installed on your system. Node.js is essential for running JavaScript applications on your machine. You can download and install it from the official Node.js website (https://nodejs.org/).

## Install Git

Make sure you have Git installed or visit its official website at https://git-scm.com/ and install Git for your system. Git facilitates efficient version control for your projects, enabling seamless change tracking, collaboration, and codebase management.

## Install Visual Studio Code

Visual Studio Code (VS Code) is a versatile code editor that provides a user-friendly interface and a plethora of extensions for enhanced development. Download and install VS Code from its official website (https://code.visualstudio.com/) to utilize its features for your project.

## Clone the repository from GitHub in VS Code

To clone the *Mimosa* project repository for TTS from GitHub, follow these steps:

1. In VS Code, access the Command Palette by pressing `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (macOS).
2. Type `Git: Clone` and select the option that appears.
3. A text field will appear at the top of the window. Enter the URL of the repository you want to clone. In this case, use `https://github.com/lsbjordao/TTS-Mimosa`.
4. Choose a local directory where you want to clone the repository to.

We highly recommend using a path for cloning the repository that excludes spaces (` `) or any other unconventional text characters. This precaution ensures that files can be easily opened by simply pressing `Ctrl` + clicking on the file path within the IDE's console.

## Open the TTS project directory in VS Code

To open the TTS project directory in VS Code:

1. Click on `File` in the top menu.
2. Select `Open Folder` from the dropdown menu.
3. Navigate to the location where your TTS project (e.g., TTS-Mimosa) directory is stored.
4. Click on the TTS project directory to select it.
5. Click the `Open` button.

## Installing TTS package

Within VS Code, open your terminal and execute the command to install TTS globally:

1. Navigate to the top menu and select `Terminal`.
2. From the dropdown menu, choose `New Terminal`.
3. In the terminal, type and execute the following command:

```bash
npm install -g @lsbjordao/type-taxon-script
```

Install it globally using `-g` to prevent unnecessary dependencies from being installed within the TTS project directory. If one do not include `-g` argument, the `./node_modules` directory and `package.json` file will be inconveniently created in the TTS project directory.

To verify the installation of the TTS, use the following command to check the current version:

```bash
tts --version
```

For comprehensive guidance on available commands and functionalities, access the help documentation using:

```bash
tts --help
```

## Initializing a TTS project

To initiate the use of a TTS project, execute the following command:

```bash
tts init
```

This command will verify the presence of an existing TTS project within the directory. Additionally, it will generate two mandatory directories, `./input` and `./output`, but only if the `characters` and `taxon` directories already exist. These newly created directories are essential for the project functioning.

## Describing a new taxon

To generate a new `.ts` file containing a comprehensive script outlining the entire hierarchy of characters, serving as the foundational template to initiate the description of a species from scratch, utilize the command `tts` followed by the `-new` argument, specifying the genus name and the specific epithet as shown below:

```bash
tts new --genus Mimosa --species epithet
```

After the process, a new file named `Mimosa_epithet.ts` will be created in the `./output` directory. To access this script file, simply hold down the `Ctrl` key and click on the file path displayed in the console. However, before you begin editing the script, it is important to relocate this file to the `./taxon` directory, as the script specifically functions within that directory. Outside this directory, the script will not works properly. Opening the script outside of this directory will trigger multiple dependency errors.

## Exporting JSON database

```bash
tts export --genus Mimosa
```

![](https://i.imgur.com/i0eMGu1.gifv)