"use strict";
exports.__esModule = true;
// Taxa
var Mimosa_1 = require("./taxon/Mimosa");
// Characters
var Leaf_1 = require("./character/Leaf");
var Paraphillidia_1 = require("./character/Paraphillidia");
var Petiole_1 = require("./character/Petiole");
var Flower_1 = require("./character/Flower");
var Calyx_1 = require("./character/Calyx");
var Corolla_1 = require("./character/Corolla");
// Describe a species
var Mimosa_new = new Mimosa_1.Mimosa();
Mimosa_new.habit = 'subshrub';
Mimosa_new.leaf = new Leaf_1.Leaf();
Mimosa_new.leaf.petiole = new Petiole_1.Petiole();
Mimosa_new.leaf.petiole.present = true;
Mimosa_new.leaf.petiole.setLength(3);
Mimosa_new.leaf.paraphillidia = new Paraphillidia_1.Paraphillidia();
Mimosa_new.leaf.paraphillidia.present = false;
Mimosa_new.leaf.paraphillidia.setLength(null);
Mimosa_new.flower = new Flower_1.Flower();
Mimosa_new.flower.calyx = new Calyx_1.Calyx();
Mimosa_new.flower.calyx.numSepals = 4;
Mimosa_new.flower.calyx.length = 1;
Mimosa_new.flower.corolla = new Corolla_1.Corolla();
Mimosa_new.flower.corolla.numPepals = 4;
Mimosa_new.flower.corolla.length = 3;
// Print
console.log(Mimosa_new);
