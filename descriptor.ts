// Taxa
import { Mimosa } from './taxa/Mimosa';

// Characters
import { Leaf } from './characters/Leaf';
import { Paraphillidia } from './characters/Paraphillidia';
import { Petiole } from './characters/Petiole';

// Describe a species
const Mimosa_new = new Mimosa();

Mimosa_new.habit = 'shrub';

Mimosa_new.leaf = new Leaf();
Mimosa_new.leaf.petiole = new Petiole();
Mimosa_new.leaf.petiole.present = true;
Mimosa_new.leaf.petiole.setLength(3);
Mimosa_new.leaf.paraphillidia = new Paraphillidia();
Mimosa_new.leaf.paraphillidia.present = false;
Mimosa_new.leaf.paraphillidia.setLength(null);


// Print
console.log(Mimosa_new);
