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

// Source
import { Source } from '../../character/Source';

// Description of Mimosa schomburgkii
const Mimosa_afranioi = new Mimosa();

Mimosa_afranioi.habit = 'tree';

Mimosa_afranioi.trichomes = new Trichomes();
Mimosa_afranioi.trichomes.filiform = new Filiform();
Mimosa_afranioi.trichomes.filiform.present = true;
Mimosa_afranioi.trichomes.setiform = new Setiform();
Mimosa_afranioi.trichomes.setiform.present = false;

Mimosa_afranioi.leaf = new Leaf();
Mimosa_afranioi.leaf.petiole = new Petiole();
Mimosa_afranioi.leaf.petiole.present = true;
Mimosa_afranioi.leaf.petiole.setLength(3);
Mimosa_afranioi.leaf.paraphillidia = new Paraphillidia();
Mimosa_afranioi.leaf.paraphillidia.present = false;
Mimosa_afranioi.leaf.paraphillidia.setLength(null);

Mimosa_afranioi.flower = new Flower();
Mimosa_afranioi.flower.calyx = new Calyx();
Mimosa_afranioi.flower.calyx.numSepals = 3;
Mimosa_afranioi.flower.calyx.length = 1;
Mimosa_afranioi.flower.calyx.shape = 'campanulate';
Mimosa_afranioi.flower.corolla = new Corolla();
Mimosa_afranioi.flower.corolla.numPepals = 3;
Mimosa_afranioi.flower.corolla.length = 3;
Mimosa_afranioi.flower.corolla.shape = 'campanulate';

Mimosa_afranioi.fruit = new Fruit();
Mimosa_afranioi.fruit.replum = new Replum();
Mimosa_afranioi.fruit.replum.shape = 'straight';
Mimosa_afranioi.fruit.replum.prickles = false;
Mimosa_afranioi.fruit.epicarp = new Epicarp();
Mimosa_afranioi.fruit.epicarp.shape = 'straight';
Mimosa_afranioi.fruit.epicarp.trichomes = new Trichomes();
Mimosa_afranioi.fruit.epicarp.trichomes.filiform = new Filiform();
Mimosa_afranioi.fruit.epicarp.trichomes.filiform.present = true;
Mimosa_afranioi.fruit.epicarp.prickles = false;

// Sources
const source1 = new Source();
source1.authorship = "Author 1";
source1.year = 2020;
source1.title = "Title 1";
Mimosa_afranioi.flower.corolla.sources.push(source1);

const source2 = new Source();
source2.authorship = "Author 2";
source2.year = 2021;
source2.title = "Title 2";
Mimosa_afranioi.flower.corolla.sources.push(source2);

// Print
console.log(Mimosa_afranioi);