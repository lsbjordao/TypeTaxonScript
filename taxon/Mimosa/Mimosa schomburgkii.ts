// Taxa
import { Mimosa } from '../Mimosa';

// Characters
import { Trichomes } from '../../character/Trichomes';
import { Filiform } from '../../character/Trichomes/Filiform';
import { Setiform } from '../../character/Trichomes/Setiform';

import { Leaf } from '../../character/Leaf';
import { Paraphillidia } from '../../character/Leaf/Paraphillidia';
import { Petiole } from '../../character/Leaf/Petiole';

import { Flower } from '../../character/Flower';
import { Calyx } from '../../character/Flower/Calyx';
import { Corolla } from '../../character/Flower/Corolla';

import { Fruit } from '../../character/Fruit';
import { Replum } from '../../character/Fruit/Replum';
import { Epicarp } from '../../character/Fruit/Epicarp';

import { Source } from '../../character/Source';

// Description of Mimosa schomburgkii
const Mimosa_schomburgkii = new Mimosa();
Mimosa_schomburgkii.specificEpithet = 'schomburgkii';

Mimosa_schomburgkii.habit = 'tree';

Mimosa_schomburgkii.trichomes = new Trichomes();
Mimosa_schomburgkii.trichomes.filiform = new Filiform();
Mimosa_schomburgkii.trichomes.filiform.present = true;
Mimosa_schomburgkii.trichomes.setiform = new Setiform();
Mimosa_schomburgkii.trichomes.setiform.present = false;

Mimosa_schomburgkii.leaf = new Leaf();
Mimosa_schomburgkii.leaf.petiole = new Petiole();
Mimosa_schomburgkii.leaf.petiole.present = true;
Mimosa_schomburgkii.leaf.petiole.setLength(3);
Mimosa_schomburgkii.leaf.paraphillidia = new Paraphillidia();
Mimosa_schomburgkii.leaf.paraphillidia.present = false;
Mimosa_schomburgkii.leaf.paraphillidia.setLength(null);

Mimosa_schomburgkii.flower = new Flower();
Mimosa_schomburgkii.flower.calyx = new Calyx();
Mimosa_schomburgkii.flower.calyx.numSepals = 3;
Mimosa_schomburgkii.flower.calyx.length = 1;
Mimosa_schomburgkii.flower.calyx.shape = 'campanulate';
Mimosa_schomburgkii.flower.corolla = new Corolla();
Mimosa_schomburgkii.flower.corolla.numPepals = 3;
Mimosa_schomburgkii.flower.corolla.length = 3;
Mimosa_schomburgkii.flower.corolla.shape = 'campanulate';

Mimosa_schomburgkii.fruit = new Fruit();
Mimosa_schomburgkii.fruit.replum = new Replum();
Mimosa_schomburgkii.fruit.replum.shape = 'straight';
Mimosa_schomburgkii.fruit.replum.prickles = false;
Mimosa_schomburgkii.fruit.epicarp = new Epicarp();
Mimosa_schomburgkii.fruit.epicarp.shape = 'straight';
Mimosa_schomburgkii.fruit.epicarp.trichomes = new Trichomes();
Mimosa_schomburgkii.fruit.epicarp.trichomes.filiform = new Filiform();
Mimosa_schomburgkii.fruit.epicarp.trichomes.filiform.present = true;
Mimosa_schomburgkii.fruit.epicarp.prickles = false;

// Sources
const source1 = new Source();
source1.authorship = 'Author 1';
source1.year = 2020;
source1.title = 'Title 1';
Mimosa_schomburgkii.flower.corolla.sources.push(source1);

const source2 = new Source();
source2.authorship = 'Author 2';
source2.year = 2021;
source2.title = 'Title 2';
Mimosa_schomburgkii.flower.corolla.sources.push(source2);

// Export
export { Mimosa_schomburgkii };