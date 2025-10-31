"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var child_process_1 = require("child_process");
var csv_parser_1 = require("csv-parser");
var plainjs_1 = require("@json2csv/plainjs");
var transforms_1 = require("@json2csv/transforms");
var cli_spinner_1 = require("cli-spinner");
function deleteJSFiles(folderPath) {
    return __awaiter(this, void 0, void 0, function () {
        var files, _i, files_1, file, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, fs_1.default.promises.readdir(folderPath)];
                case 1:
                    files = _a.sent();
                    _i = 0, files_1 = files;
                    _a.label = 2;
                case 2:
                    if (!(_i < files_1.length)) return [3 /*break*/, 5];
                    file = files_1[_i];
                    if (!file.endsWith('.js')) return [3 /*break*/, 4];
                    return [4 /*yield*/, fs_1.default.promises.unlink("".concat(folderPath, "/").concat(file))];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    console.error('Error deleting files:', err_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function ttsExportToCsv(genus, load) {
    return __awaiter(this, void 0, void 0, function () {
        var spinner, taxa, directoryPath, inputFilePath, tempFilePath_1;
        var _this = this;
        return __generator(this, function (_a) {
            if (genus === '') {
                console.error('\x1b[31m✖ Argument `--genus` cannot be empty.\x1b[0m');
                return [2 /*return*/];
            }
            if (!fs_1.default.existsSync('./input') && !fs_1.default.existsSync('./output')) {
                console.error("\x1b[31m✖ The ./input and ./output directories are not present within the project.\x1b[0m\n\x1b[36mℹ️ Please run \x1b[33m`tts init`\x1b[36m before attempting to export a database.\x1b[0m");
                return [2 /*return*/];
            }
            spinner = new cli_spinner_1.Spinner('\x1b[36mProcessing... %s\x1b[0m');
            spinner.setSpinnerString('|/-\\'); // spinner sequence
            spinner.start();
            taxa = [];
            fs_1.default.mkdirSync('./temp', { recursive: true });
            if (load === 'all') {
                directoryPath = "./taxon/".concat(genus, "/");
                fs_1.default.readdir(directoryPath, function (err, files) {
                    if (err) {
                        spinner.stop();
                        console.error('Error reading directory:', err);
                        process.exit();
                    }
                    var taxa = files
                        .filter(function (file) { return file.endsWith('.ts') && file !== 'index.ts'; })
                        .map(function (file) { return path_1.default.parse(file).name; });
                    var importStatements = taxa.map(function (species) {
                        return "import { ".concat(species.replace(/\s/g, '_').replace(/\-([a-z])/, function (_, match) { return match.toUpperCase(); }), " } from '../taxon/").concat(genus, "/").concat(species.replace(/\s/g, '_'), "'");
                    }).join('\n');
                    var speciesCall = taxa.map(function (species) {
                        return "    ".concat(species.replace(/\s/g, '_').replace(/\-([a-z])/, function (_, match) { return match.toUpperCase(); }), ",");
                    }).join('\n');
                    var fileContent = "// Import genus ".concat(genus, "\nimport { ").concat(genus, " } from '../taxon/").concat(genus, "'\n            \n// Import species of ").concat(genus, "\n").concat(importStatements, "\n            \nconst ").concat(genus, "_species: ").concat(genus, "[] = [\n    ").concat(speciesCall, "\n]\n            \n// Export ").concat(genus, "DB.json\n//import { writeFileSync } from 'fs'\nconst jsonData = JSON.stringify(").concat(genus, "_species);\nconsole.log(jsonData)\n//const inputFilePath = '../output/").concat(genus, "DB.json'\n//writeFileSync(inputFilePath, jsonData, 'utf-8')\n//console.log('\\x1b[1m\\x1b[32m\u2714 Process finished.\\x1b[0m')");
                    var tempFilePath = './temp/exportTemp.ts';
                    fs_1.default.writeFileSync(tempFilePath, fileContent, 'utf-8');
                    var fileToTranspile = 'exportTemp';
                    (0, child_process_1.exec)("tsc ./temp/".concat(fileToTranspile, ".ts"), function (error, stdout, stderr) {
                        if (stdout) {
                            spinner.stop();
                            console.error('\x1b[31m✖ TS Error:\x1b[0m\n\n' + "".concat(stdout));
                            process.exit();
                        }
                        if (stderr) {
                            spinner.stop();
                            console.error('\x1b[31m✖ TS Error:\x1b[0m\n\n' + "".concat(stderr));
                            process.exit();
                        }
                        try {
                            fs_1.default.unlinkSync("./temp/".concat(fileToTranspile, ".ts"));
                        }
                        catch (err) {
                            spinner.stop();
                            console.error("An error occurred while deleting the file: ".concat(err));
                            process.exit();
                        }
                        (0, child_process_1.exec)("node ./temp/".concat(fileToTranspile, ".js > ./output/").concat(genus, "DB.json"), function (error, stdout, stderr) {
                            // if (error) {
                            //     spinner.stop()
                            //     console.error('\x1b[31m✖ JS execution time error:\x1b[0m\n\n' + `${error.message}`)
                            //     process.exit()
                            // }
                            if (stdout) {
                                spinner.stop();
                                console.error('\x1b[31m✖ JS execution time error:\x1b[0m\n\n' + "".concat(stdout));
                                process.exit();
                            }
                            if (stderr) {
                                spinner.stop();
                                console.error('\x1b[31m✖ JS execution time error:\x1b[0m\n\n' + "".concat(stderr));
                                process.exit();
                            }
                            deleteJSFiles("./taxon/".concat(genus)).then(function () {
                                var filePath = './output/';
                                try {
                                    var data = fs_1.default.readFileSync("./output/".concat(genus, "DB.json"), 'utf8');
                                    var opts = {
                                        transforms: [
                                            (0, transforms_1.flatten)({ separator: '.' })
                                        ]
                                    };
                                    var parser = new plainjs_1.Parser(opts);
                                    var csv = parser.parse(JSON.parse(data));
                                    fs_1.default.writeFileSync("./output/".concat(genus, "DB.csv"), csv);
                                }
                                catch (err) {
                                    console.error('Error reading the file:', err);
                                }
                                console.log("\u001B[1m\u001B[32m\u2714 CSV database exported: \u001B[33m".concat(filePath).concat(genus, "DB.csv\u001B[0m\u001B[1m\u001B[32m\u001B[0m"));
                                spinner.stop();
                                try {
                                    fs_1.default.unlinkSync("./temp/".concat(fileToTranspile, ".js"));
                                    fs_1.default.rm('./temp', { recursive: true }, function (err) {
                                        if (err) {
                                            console.error('Error deleting directory:', err);
                                            process.exit();
                                        }
                                    });
                                }
                                catch (err) {
                                    console.error("An error occurred while deleting the file: ".concat(err));
                                    process.exit();
                                }
                            });
                        });
                    });
                });
            }
            if (load === 'csv') {
                inputFilePath = './input/taxaToExport.csv';
                tempFilePath_1 = './temp/exportTemp.ts';
                fs_1.default.createReadStream(inputFilePath)
                    .pipe((0, csv_parser_1.default)({ headers: false }))
                    .on('data', function (data) {
                    taxa.push(data['0']);
                })
                    .on('end', function () { return __awaiter(_this, void 0, void 0, function () {
                    var importStatements, speciesCall, fileContent, fileToTranspile;
                    return __generator(this, function (_a) {
                        importStatements = taxa.map(function (species) {
                            return "import { ".concat(species.replace(/\s/g, '_').replace(/\-([a-z])/, function (_, match) { return match.toUpperCase(); }), " } from '../taxon/").concat(genus, "/").concat(species.replace(/\s/g, '_'), "'");
                        }).join('\n');
                        speciesCall = taxa.map(function (species) {
                            return "    ".concat(species.replace(/\s/g, '_').replace(/\-([a-z])/, function (_, match) { return match.toUpperCase(); }), ",");
                        }).join('\n');
                        fileContent = "// Import genus ".concat(genus, "\nimport { ").concat(genus, " } from '../taxon/").concat(genus, "'\n                \n// Import species of ").concat(genus, "\n").concat(importStatements, "\n                \nconst ").concat(genus, "_species: ").concat(genus, "[] = [\n    ").concat(speciesCall, "\n]\n                \n// Export ").concat(genus, "DB.json\nconst jsonData = JSON.stringify(").concat(genus, "_species);\nconsole.log(jsonData)\n// import { writeFileSync } from 'fs'\n// const jsonData = JSON.stringify(").concat(genus, "_species)\n// const inputFilePath = '../output/").concat(genus, "DB.json'\n// writeFileSync(inputFilePath, jsonData, 'utf-8')\n// console.log('\\x1b[1m\\x1b[32m\u2714 Process finished.\\x1b[0m')");
                        fs_1.default.writeFileSync(tempFilePath_1, fileContent, 'utf-8');
                        fileToTranspile = 'exportTemp';
                        (0, child_process_1.exec)("tsc ./temp/".concat(fileToTranspile, ".ts"), function (error, stdout, stderr) {
                            if (stdout) {
                                spinner.stop();
                                console.error('\x1b[31m✖ TS Error:\x1b[0m\n\n' + "".concat(stdout));
                                process.exit();
                            }
                            if (stderr) {
                                spinner.stop();
                                console.error('\x1b[31m✖ TS Error:\x1b[0m\n\n' + "".concat(stdout));
                                process.exit();
                            }
                            try {
                                fs_1.default.unlinkSync("./temp/".concat(fileToTranspile, ".ts"));
                            }
                            catch (err) {
                                spinner.stop();
                                console.error("An error occurred while deleting the file: ".concat(err));
                                process.exit();
                            }
                            (0, child_process_1.exec)("node ./temp/".concat(fileToTranspile, ".js > ./output/").concat(genus, "DB.json"), function (error, stdout, stderr) {
                                // if (error) {
                                //     spinner.stop()
                                //     console.error('\x1b[31m✖ JS execution time error:\x1b[0m\n\n' + `${error.message}`)
                                //     process.exit()
                                // }
                                if (stdout) {
                                    spinner.stop();
                                    console.error('\x1b[31m✖ JS execution time error:\x1b[0m\n\n' + "".concat(stdout));
                                    process.exit();
                                }
                                if (stderr) {
                                    spinner.stop();
                                    console.error('\x1b[31m✖ JS execution time error:\x1b[0m\n\n' + "".concat(stderr));
                                    process.exit();
                                }
                                deleteJSFiles("./taxon/".concat(genus)).then(function () {
                                    var filePath = './output/';
                                    try {
                                        var data = fs_1.default.readFileSync("./output/".concat(genus, "DB.json"), 'utf8');
                                        var opts = {
                                            transforms: [
                                                (0, transforms_1.flatten)({ separator: '.' })
                                            ]
                                        };
                                        var parser = new plainjs_1.Parser(opts);
                                        var csv = parser.parse(JSON.parse(data));
                                        fs_1.default.writeFileSync("./output/".concat(genus, "DB.csv"), csv);
                                    }
                                    catch (err) {
                                        console.error('Error reading the file:', err);
                                    }
                                    console.log("\u001B[1m\u001B[32m\u2714 CSV database exported: \u001B[33m".concat(filePath).concat(genus, "DB.csv\u001B[0m\u001B[1m\u001B[32m\u001B[0m"));
                                    spinner.stop();
                                    try {
                                        fs_1.default.unlinkSync("./temp/".concat(fileToTranspile, ".js"));
                                        fs_1.default.rm('./temp', { recursive: true }, function (err) {
                                            if (err) {
                                                console.error('Error deleting directory:', err);
                                                process.exit();
                                            }
                                        });
                                    }
                                    catch (err) {
                                        console.error("An error occurred while deleting the file: ".concat(err));
                                        process.exit();
                                    }
                                });
                            });
                        });
                        return [2 /*return*/];
                    });
                }); });
            }
            return [2 /*return*/];
        });
    });
}
exports.default = ttsExportToCsv;
