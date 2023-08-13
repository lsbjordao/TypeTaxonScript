// Taxa
import { Mimosa } from '../Mimosa';

// Characters
import { Trichome } from '../../character/Trichome';
import { Filiform } from '../../character/Trichome/Filiform';
import { Setiform } from '../../character/Trichome/Setiform';

import { Leaf } from '../../character/Leaf';
import { Paraphillidia } from '../../character/Leaf/Paraphillidia';
import { Petiole } from '../../character/Leaf/Petiole';

import { Flower } from '../../character/Flower';
import { Calyx } from '../../character/Flower/Calyx';
import { Corolla } from '../../character/Flower/Corolla';

import { Fruit } from '../../character/Fruit';
import { Replum } from '../../character/Fruit/Replum';
import { Epicarp } from '../../character/Fruit/Epicarp';

// Description of Mimosa afranioi
const Mimosa_afranioi = new Mimosa();

Mimosa_afranioi.habit = 'subshrub';

Mimosa_afranioi.trichomes = new Trichome();
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
Mimosa_afranioi.fruit.epicarp.trichomes = new Trichome();
Mimosa_afranioi.fruit.epicarp.trichomes.filiform = new Filiform();
Mimosa_afranioi.fruit.epicarp.trichomes.filiform.present = true;
Mimosa_afranioi.fruit.epicarp.prickles = false;