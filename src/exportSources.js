"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var lodash_1 = require("lodash");
function ttsExportSources(genus) {
    if (genus === '') {
        console.error('\x1b[31m✖ Argument `--genus` cannot be empty.\x1b[0m');
        return;
    }
    if (!fs_1.default.existsSync('./input') && !fs_1.default.existsSync('./output')) {
        console.error("\x1b[31m✖ The ./input and ./output directories are not present within the project.\x1b[0m\n\x1b[36mℹ️ Please run \x1b[33m`tts init`\x1b[36m before attempting to export a database.\x1b[0m");
        return;
    }
    var filePath = "./output/".concat(genus, "DB.json");
    fs_1.default.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        try {
            var jsonData_1 = JSON.parse(data);
            var findObjectsWithSources = function (obj, currentPath) {
                if (currentPath === void 0) { currentPath = []; }
                var objectsWithSources = [];
                var findObjectsWithSourcesRecursively = function (currentObj, path) {
                    if (lodash_1.default.isObject(currentObj)) {
                        lodash_1.default.forOwn(currentObj, function (value, key) {
                            if (key === 'sources' && Array.isArray(value) && value.length > 0) {
                                value.forEach(function (source) {
                                    objectsWithSources.push({
                                        index: path[0],
                                        path: path.join('.'),
                                        specificEpithet: lodash_1.default.get(jsonData_1[path[0]], 'specificEpithet'),
                                        source: source
                                    });
                                });
                            }
                            if (lodash_1.default.isObject(value)) {
                                findObjectsWithSourcesRecursively(value, __spreadArray(__spreadArray([], path, true), [key], false));
                            }
                        });
                    }
                };
                findObjectsWithSourcesRecursively(obj, currentPath);
                objectsWithSources.forEach(function (item) {
                    item.path = item.path.replace(new RegExp("^".concat(item.index, "\\.|").concat(item.index, "$")), '');
                });
                return objectsWithSources;
            };
            var objectsWithSources = findObjectsWithSources(jsonData_1.map(function (item, index) { return (__assign(__assign({}, item), { index: index })); }));
            var filePathOutput = "./output/".concat(genus, "SourcesDB.json");
            var jsonContent = JSON.stringify(objectsWithSources, null, 2);
            fs_1.default.writeFileSync(filePathOutput, jsonContent, 'utf-8');
            console.log("\u001B[1m\u001B[32m\u2714 Database exported: \u001B[33m".concat(filePathOutput, "\u001B[0m\u001B[1m\u001B[32m\u001B[0m"));
        }
        catch (jsonErr) {
            console.error('Error parsing JSON:', jsonErr);
        }
    });
}
exports.default = ttsExportSources;
