"use strict";
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
function ttsfindProperty(property, genus) {
    if (property === '') {
        console.error('\x1b[31m✖ Argument `--property` cannot be empty.\x1b[0m');
        return;
    }
    if (genus === '') {
        console.error('\x1b[31m✖ Argument `--genus` cannot be empty.\x1b[0m');
        return;
    }
    var filePath = "./output/".concat(genus, "DB.json");
    var propertyPathToFind = property;
    fs_1.default.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        try {
            var jsonData_1 = JSON.parse(data);
            var findPropertyPath_1 = function (obj, propertyPath, currentPath) {
                if (currentPath === void 0) { currentPath = []; }
                var paths = [];
                var findPathsRecursively = function (currentObj, path) {
                    var lastKey = path[path.length - 1];
                    if (lodash_1.default.get(currentObj, propertyPath)) {
                        if (typeof lastKey !== 'number') {
                            paths.push(path.join('.'));
                        }
                    }
                    lodash_1.default.forEach(currentObj, function (value, key) {
                        if (lodash_1.default.isObject(value)) {
                            findPathsRecursively(value, __spreadArray(__spreadArray([], path, true), [key], false));
                        }
                    });
                };
                findPathsRecursively(obj, currentPath);
                return paths;
            };
            var resultIndicesAndPaths = jsonData_1.flatMap(function (item, index) {
                var paths = findPropertyPath_1(item, propertyPathToFind);
                if (paths.length > 0) {
                    return { index: index, paths: paths, specificEpithet: jsonData_1[index].specificEpithet };
                }
                return [];
            });
            console.log("\u001B[36m\u2139\uFE0F Indices and paths of objects with the property \u001B[33m".concat(propertyPathToFind, "\u001B[0m\u001B[36m:\n\n\u001B[0m"), resultIndicesAndPaths);
        }
        catch (jsonErr) {
            console.error('Error parsing JSON:', jsonErr);
        }
    });
}
exports.default = ttsfindProperty;
