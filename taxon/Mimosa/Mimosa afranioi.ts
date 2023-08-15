// Import genus Mimosa
import { Mimosa } from '../Mimosa';

// Import characters
import { Stems, Trichomes, Prickles, Stipule, Leaf, Flower, Fruit, Source, DescriptionAuthorship } from '../../characters/v1';
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
Mimosa_afranioi.stems.prickles.are = 'present';
Mimosa_afranioi.stems.prickles.setLengthMinMax(2, 4);

Mimosa_afranioi.stems.prickles.orientation = 'decurved';
Mimosa_afranioi.stems.trichomes = new Trichomes();
Mimosa_afranioi.stems.trichomes.filiform = new Filiform();
Mimosa_afranioi.stems.trichomes.filiform.are = 'present';
Mimosa_afranioi.stems.trichomes.granular = new Granular();
Mimosa_afranioi.stems.trichomes.granular.are = 'present';

Mimosa_afranioi.stipule = new Stipule();
Mimosa_afranioi.stipule.setLengthMinMax(1, 3);

Mimosa_afranioi.leaf = new Leaf();
Mimosa_afranioi.leaf.phyllotaxis = 'distichous';
Mimosa_afranioi.leaf.petiole = new Petiole();
Mimosa_afranioi.leaf.petiole.setLengthMinMax(5, 13);
Mimosa_afranioi.leaf.petiole.prickles = new Prickles();
Mimosa_afranioi.leaf.petiole.prickles.are = 'present';
Mimosa_afranioi.leaf.bipinnate = new Bipinnate();
Mimosa_afranioi.leaf.bipinnate.rachis = new Rachis();
Mimosa_afranioi.leaf.bipinnate.rachis.present = true;
Mimosa_afranioi.leaf.bipinnate.rachis.setLengthMinMax(8, 14);
Mimosa_afranioi.leaf.bipinnate.pinnae = new Pinnae();
Mimosa_afranioi.leaf.bipinnate.pinnae.numberOfPairs = 3;
Mimosa_afranioi.leaf.bipinnate.pinnae.rachilla = new Rachilla();
Mimosa_afranioi.leaf.bipinnate.pinnae.rachilla.setLength(14);
Mimosa_afranioi.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia();
Mimosa_afranioi.leaf.bipinnate.pinnae.paraphillidia.setLengthMinMax(1, 2);
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet = new Leaflet();
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.numberOfPairs = 3;

Mimosa_afranioi.flower = new Flower();
Mimosa_afranioi.flower.calyx = new Calyx();
Mimosa_afranioi.flower.calyx.numSepals = 3;
Mimosa_afranioi.flower.calyx.setLength(2);
Mimosa_afranioi.flower.calyx.shape = 'campanulate';
Mimosa_afranioi.flower.corolla = new Corolla();
Mimosa_afranioi.flower.corolla.numPepals = 3;
Mimosa_afranioi.flower.corolla.setLengthMinMax(2.5, 3);
Mimosa_afranioi.flower.corolla.shape = 'campanulate';

Mimosa_afranioi.fruit = new Fruit();
Mimosa_afranioi.fruit.type = 'craspedium';
Mimosa_afranioi.fruit.replum = new Replum();
Mimosa_afranioi.fruit.replum.shape = 'straight';
Mimosa_afranioi.fruit.replum.prickles = new Prickles();
Mimosa_afranioi.fruit.replum.prickles.are = 'present';
Mimosa_afranioi.fruit.epicarp = new Epicarp();
Mimosa_afranioi.fruit.epicarp.shape = 'straight';
Mimosa_afranioi.fruit.epicarp.trichomes = new Trichomes();
Mimosa_afranioi.fruit.epicarp.trichomes.filiform = new Filiform();
Mimosa_afranioi.fruit.epicarp.trichomes.filiform.are = 'present';
Mimosa_afranioi.fruit.epicarp.prickles = new Prickles();
Mimosa_afranioi.fruit.epicarp.prickles.are = 'absent';

// Description authorship
Mimosa_afranioi.DescriptionAuthorship = new DescriptionAuthorship();
Mimosa_afranioi.DescriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})

// Export Mimosa afranioi
export { Mimosa_afranioi };