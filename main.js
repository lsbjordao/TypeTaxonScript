"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// Taxa
var Mimosa_1 = require("./taxa/Mimosa");
// Characters
var Leaf_1 = require("./characters/Leaf");
var Paraphillidia_1 = require("./characters/Paraphillidia");
// Describe a species
var Mimosa_new = new Mimosa_1.Mimosa();
Mimosa_new.habit = 'tree';
Mimosa_new.leaf = new Leaf_1.Leaf();
Mimosa_new.leaf.petiole = 'present';
Mimosa_new.leaf.paraphillidia = new Paraphillidia_1.Paraphillidia();
Mimosa_new.leaf.paraphillidia.present = true;
Mimosa_new.leaf.paraphillidia.setLength(1);
// Print
console.log(Mimosa_new);
