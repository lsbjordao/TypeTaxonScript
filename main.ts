/// Taxa
import { Mimosa } from './taxa/Mimosa';

// Characters
import { Leaf } from './characters/Leaf';
import { Paraphillidia } from './characters/Paraphillidia';

// Describe a species
const Mimosa_new = new Mimosa();

Mimosa_new.habit = 'tree';

Mimosa_new.leaf = new Leaf();
Mimosa_new.leaf.petiole = 'present';
Mimosa_new.leaf.paraphillidia = new Paraphillidia();
Mimosa_new.leaf.paraphillidia.present = true;
Mimosa_new.leaf.paraphillidia.setLength(1);


// Print
console.log(Mimosa_new);
