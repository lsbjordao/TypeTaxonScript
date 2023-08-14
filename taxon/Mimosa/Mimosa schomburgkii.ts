// Import genus Mimosa
import { Mimosa } from '../Mimosa';

// Import characters
import { Flower, Fruit, Leaf, Prickles, Source, Trichomes } from '../../characters/v1';
import { Capitate, Filiform, Stellate } from '../../characters/v1/Trichomes';
import { Paraphillidia, Petiole } from '../../characters/v1/Leaf';
import { Corolla, Calyx } from '../../characters/v1/Flower';
import { Replum, Epicarp } from '../../characters/v1/Fruit';

// Description of Mimosa schomburgkii
const Mimosa_schomburgkii = new Mimosa();
Mimosa_schomburgkii.specificEpithet = 'schomburgkii';

Mimosa_schomburgkii.habit = 'tree';

Mimosa_schomburgkii.prickles = new Prickles();
Mimosa_schomburgkii.prickles.present = false;

Mimosa_schomburgkii.trichomes = new Trichomes();
Mimosa_schomburgkii.trichomes.filiform = new Filiform();
Mimosa_schomburgkii.trichomes.filiform.present = true;
Mimosa_schomburgkii.trichomes.stellate = new Stellate();
Mimosa_schomburgkii.trichomes.stellate.present = true;
Mimosa_schomburgkii.trichomes.stellate.subsessile = true;
Mimosa_schomburgkii.trichomes.stellate.stalked = true;
Mimosa_schomburgkii.trichomes.stellate.lepidote = true;
Mimosa_schomburgkii.trichomes.capitate = new Capitate();
Mimosa_schomburgkii.trichomes.capitate.present = true;
Mimosa_schomburgkii.trichomes.capitate.subsessile = true;

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
Mimosa_schomburgkii.flower.corolla.trichomes = new Trichomes();
Mimosa_schomburgkii.flower.corolla.trichomes.stellate = new Stellate();
Mimosa_schomburgkii.flower.corolla.trichomes.stellate.lepidote = true;

Mimosa_schomburgkii.fruit = new Fruit();
Mimosa_schomburgkii.fruit.replum = new Replum();
Mimosa_schomburgkii.fruit.replum.shape = 'straight';
Mimosa_schomburgkii.fruit.epicarp = new Epicarp();
Mimosa_schomburgkii.fruit.epicarp.type = 'monospermic';
Mimosa_schomburgkii.fruit.epicarp.shape = 'straight';
Mimosa_schomburgkii.fruit.epicarp.trichomes = new Trichomes();
Mimosa_schomburgkii.fruit.epicarp.trichomes.filiform = new Filiform();
Mimosa_schomburgkii.fruit.epicarp.trichomes.filiform.present = true;

// Description authorship
Mimosa_schomburgkii.DescriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão'
})

// Sources
const source1 = new Source();
source1.sourceType = 'article';
source1.authorship = 'Author 1';
source1.year = 2020;
source1.title = 'Title 1';
Mimosa_schomburgkii.flower.corolla.addSource(source1);

const source2 = new Source();
source2.sourceType = 'book';
source2.authorship = 'Author 2';
source2.year = 2021;
source2.title = 'Title 2';
Mimosa_schomburgkii.flower.corolla.addSource(source2);

// Export Mimosa schomburgkii
export { Mimosa_schomburgkii };