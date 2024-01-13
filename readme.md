# TypeTaxonScript (TTS)

## Install Node.js

Before you begin, ensure that Node.js is installed on your system. Node.js is essential for running JavaScript applications on your machine. You can download and install it from the official Node.js website (https://nodejs.org/).

## Install Git

Ensure that Git (https://git-scm.com/) is installed on your system.

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