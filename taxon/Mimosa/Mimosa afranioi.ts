// Import genus Mimosa
import { Mimosa } from '../Mimosa';

// Import characters
import { Flower, Fruit, Leaf, Prickles, Source, Trichomes } from '../../characters/v1';
import { Filiform, Setiform } from '../../characters/v1/Trichomes';
import { Replum, Epicarp } from '../../characters/v1/Fruit';
import { Corolla, Calyx } from '../../characters/v1/Flower';
import { Paraphillidia, Petiole } from '../../characters/v1/Leaf';

// Description of Mimosa afranioi
const Mimosa_afranioi = new Mimosa();
Mimosa_afranioi.specificEpithet = 'afranioi';

Mimosa_afranioi.habit = 'subshrub';

Mimosa_afranioi.trichomes = new Trichomes();
Mimosa_afranioi.trichomes.filiform = new Filiform();
Mimosa_afranioi.trichomes.filiform.present = true;
Mimosa_afranioi.trichomes.setiform = new Setiform();
Mimosa_afranioi.trichomes.setiform.present = false;

Mimosa_afranioi.prickles = new Prickles();
Mimosa_afranioi.prickles.present = true;

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
Mimosa_afranioi.fruit.type = 'craspedium';
Mimosa_afranioi.fruit.replum = new Replum();
Mimosa_afranioi.fruit.replum.shape = 'straight';
Mimosa_afranioi.fruit.replum.prickles = new Prickles();
Mimosa_afranioi.fruit.replum.prickles.present = true;
Mimosa_afranioi.fruit.epicarp = new Epicarp();
Mimosa_afranioi.fruit.epicarp.shape = 'straight';
Mimosa_afranioi.fruit.epicarp.trichomes = new Trichomes();
Mimosa_afranioi.fruit.epicarp.trichomes.filiform = new Filiform();
Mimosa_afranioi.fruit.epicarp.trichomes.filiform.present = true;
Mimosa_afranioi.fruit.epicarp.prickles = new Prickles();
Mimosa_afranioi.fruit.epicarp.prickles.present = true;

// Export Mimosa afranioi
export { Mimosa_afranioi };