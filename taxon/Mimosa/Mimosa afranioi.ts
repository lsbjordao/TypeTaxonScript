// Import genus Mimosa
import { Mimosa } from '../Mimosa';

// Import characters
import { Stem, Trichomes, Prickles, Leaf, Flower, Fruit, Source } from '../../characters/v1';
import { Filiform, Granular } from '../../characters/v1/Trichomes';
import { Bipinnate, Petiole } from '../../characters/v1/Leaf';
import { Pinnae, Paraphillidia, Rachis, Rachilla, Leaflet } from '../../characters/v1/Leaf/Bipinnate';
import { Corolla, Calyx } from '../../characters/v1/Flower';
import { Replum, Epicarp } from '../../characters/v1/Fruit';

// Description of Mimosa afranioi
const Mimosa_afranioi = new Mimosa();
Mimosa_afranioi.specificEpithet = 'afranioi';

Mimosa_afranioi.habit = 'subshrub';

Mimosa_afranioi.stem = new Stem();
Mimosa_afranioi.stem.length = 1;
Mimosa_afranioi.stem.orientation = 'procumbent';
Mimosa_afranioi.stem.prickles = new Prickles();
Mimosa_afranioi.stem.prickles.present = true;
Mimosa_afranioi.stem.prickles.orientation = 'decurved';
Mimosa_afranioi.stem.trichomes = new Trichomes();
Mimosa_afranioi.stem.trichomes.filiform = new Filiform();
Mimosa_afranioi.stem.trichomes.filiform.present = true;
Mimosa_afranioi.stem.trichomes.granular = new Granular();
Mimosa_afranioi.stem.trichomes.granular.present = true;

Mimosa_afranioi.leaf = new Leaf();
Mimosa_afranioi.leaf.petiole = new Petiole();
Mimosa_afranioi.leaf.petiole.present = true;
Mimosa_afranioi.leaf.petiole.setLength(3);
Mimosa_afranioi.leaf.bipinnate = new Bipinnate();
Mimosa_afranioi.leaf.bipinnate.pinnae = new Pinnae();
Mimosa_afranioi.leaf.bipinnate.pinnae.number = 3;
Mimosa_afranioi.leaf.bipinnate.rachis = new Rachis();
Mimosa_afranioi.leaf.bipinnate.rachis.length = 4;
Mimosa_afranioi.leaf.bipinnate.rachilla = new Rachilla();
Mimosa_afranioi.leaf.bipinnate.rachilla.present = true;
Mimosa_afranioi.leaf.bipinnate.rachilla.setLength(14);
Mimosa_afranioi.leaf.bipinnate.paraphillidia = new Paraphillidia();
Mimosa_afranioi.leaf.bipinnate.paraphillidia.present = true;
Mimosa_afranioi.leaf.bipinnate.paraphillidia.setLength(2);
Mimosa_afranioi.leaf.bipinnate.leaflet = new Leaflet();
Mimosa_afranioi.leaf.bipinnate.leaflet.setLength(4);

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

// Description authorship
Mimosa_afranioi.DescriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão'
})

// Export Mimosa afranioi
export { Mimosa_afranioi };