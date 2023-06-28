// Taxa
import { Mimosa } from './taxon/Mimosa';

// Characters
import { Leaf } from './character/Leaf';
import { Paraphillidia } from './character/Leaf/Paraphillidia';
import { Petiole } from './character/Leaf/Petiole';

import { Flower } from './character/Flower';
import { Calyx } from './character/Flower/Calyx';
import { Corolla } from './character/Flower/Corolla';

// Describe a species
const Mimosa_new = new Mimosa();

Mimosa_new.habit = 'subshrub';

Mimosa_new.leaf = new Leaf();
Mimosa_new.leaf.petiole = new Petiole();
Mimosa_new.leaf.petiole.present = true;
Mimosa_new.leaf.petiole.setLength(3);
Mimosa_new.leaf.paraphillidia = new Paraphillidia();
Mimosa_new.leaf.paraphillidia.present = false;
Mimosa_new.leaf.paraphillidia.setLength(null);

Mimosa_new.flower = new Flower();
Mimosa_new.flower.calyx = new Calyx();
Mimosa_new.flower.calyx.numSepals = 4;
Mimosa_new.flower.calyx.length = 1;
Mimosa_new.flower.corolla = new Corolla();
Mimosa_new.flower.corolla.numPepals = 4;
Mimosa_new.flower.corolla.length = 3;

// Print
console.log(Mimosa_new);
