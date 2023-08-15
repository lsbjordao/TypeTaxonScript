// Import genus Mimosa
import { Mimosa } from '../Mimosa';

// Import characters
import { Stems, Trichomes, Prickles, Leaf, Flower, Fruit } from '../../characters/v1';
import { Filiform, Granular } from '../../characters/v1/Trichomes';
import { Bipinnate, Petiole } from '../../characters/v1/Leaf';
import { Pinnae, Rachis } from '../../characters/v1/Leaf/Bipinnate';
import { Rachilla, Paraphillidia, Leaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae';
import { Calyx, Corolla } from '../../characters/v1/Flower';
import { Replum, Epicarp } from '../../characters/v1/Fruit';

// Import anotations classes
import { Source, DescriptionAuthorship } from '../../characters/v1';

// Description of Mimosa afranioi
const Mimosa_afranioi = new Mimosa();
Mimosa_afranioi.specificEpithet = 'afranioi';

Mimosa_afranioi.habit = 'subshrub';

Mimosa_afranioi.stems = new Stems();
Mimosa_afranioi.stems.length = 1;
Mimosa_afranioi.stems.orientation = 'procumbent';
Mimosa_afranioi.stems.prickles = new Prickles();
Mimosa_afranioi.stems.prickles.present = true;
Mimosa_afranioi.stems.prickles.orientation = 'decurved';
Mimosa_afranioi.stems.trichomes = new Trichomes();
Mimosa_afranioi.stems.trichomes.filiform = new Filiform();
Mimosa_afranioi.stems.trichomes.filiform.present = true;
Mimosa_afranioi.stems.trichomes.granular = new Granular();
Mimosa_afranioi.stems.trichomes.granular.present = true;

Mimosa_afranioi.leaf = new Leaf();
Mimosa_afranioi.leaf.phyllotaxis = 'distichous';
Mimosa_afranioi.leaf.petiole = new Petiole();
Mimosa_afranioi.leaf.petiole.present = true;
Mimosa_afranioi.leaf.petiole.setLength(3);
Mimosa_afranioi.leaf.petiole.prickles = new Prickles();
Mimosa_afranioi.leaf.petiole.prickles.present = true;
Mimosa_afranioi.leaf.bipinnate = new Bipinnate();
Mimosa_afranioi.leaf.bipinnate.rachis = new Rachis();
Mimosa_afranioi.leaf.bipinnate.rachis.length = 4;
Mimosa_afranioi.leaf.bipinnate.pinnae = new Pinnae();
Mimosa_afranioi.leaf.bipinnate.pinnae.numberOfPairs = 3;
Mimosa_afranioi.leaf.bipinnate.pinnae.rachilla = new Rachilla();
Mimosa_afranioi.leaf.bipinnate.pinnae.rachilla.present = true;
Mimosa_afranioi.leaf.bipinnate.pinnae.rachilla.setLength(14);
Mimosa_afranioi.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia();
Mimosa_afranioi.leaf.bipinnate.pinnae.paraphillidia.present = true;
Mimosa_afranioi.leaf.bipinnate.pinnae.paraphillidia.setLength(2);
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet = new Leaflet();
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.numberOfPairs = 3;

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
Mimosa_afranioi.DescriptionAuthorship = new DescriptionAuthorship();
Mimosa_afranioi.DescriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão'
})

// Export Mimosa afranioi
export { Mimosa_afranioi };