"use strict";
exports.__esModule = true;
/// Taxa
var Mimosa_1 = require("./taxa/Mimosa");
// Characters
var Leaf_1 = require("./characters/Leaf");
var Paraphillidia_1 = require("./characters/Paraphillidia");
var Petiole_1 = require("./characters/Petiole");
// Describe a species
var Mimosa_new = new Mimosa_1.Mimosa();
Mimosa_new.habit = 'tree';
Mimosa_new.leaf = new Leaf_1.Leaf();
Mimosa_new.leaf.petiole = new Petiole_1.Petiole();
Mimosa_new.leaf.petiole.present = true;
Mimosa_new.leaf.petiole.setLength(3);
Mimosa_new.leaf.paraphillidia = new Paraphillidia_1.Paraphillidia();
Mimosa_new.leaf.paraphillidia.present = false;
Mimosa_new.leaf.paraphillidia.setLength(0);
// Sanitize
// Print
console.log(Mimosa_new);
