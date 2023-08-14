// Import genus Mimosa
import { Mimosa } from '../Mimosa';

// Import characters
import { Flower, Fruit, Leaf, Prickles, Source, Trichomes } from '../../character/v1';
import { Filiform, Setiform } from '../../character/v1/Trichomes';
import { Replum, Epicarp } from '../../character/v1/Fruit';
import { Corolla, Calyx } from '../../character/v1/Flower';
import { Paraphillidia, Petiole } from '../../character/v1/Leaf';

// Description of Mimosa emaensis
const Mimosa_emaensis = new Mimosa();
Mimosa_emaensis.specificEpithet = 'emaensis';

Mimosa_emaensis.habit = 'subshrub';

Mimosa_emaensis.prickles = new Prickles();
Mimosa_emaensis.prickles.present = false;

Mimosa_emaensis.trichomes = new Trichomes();
Mimosa_emaensis.trichomes.filiform = new Filiform();
Mimosa_emaensis.trichomes.filiform.present = false;
Mimosa_emaensis.trichomes.setiform = new Setiform();
Mimosa_emaensis.trichomes.setiform.present = false;

Mimosa_emaensis.leaf = new Leaf();
Mimosa_emaensis.leaf.petiole = new Petiole();
Mimosa_emaensis.leaf.petiole.present = true;
Mimosa_emaensis.leaf.petiole.setLength(3);
Mimosa_emaensis.leaf.paraphillidia = new Paraphillidia();
Mimosa_emaensis.leaf.paraphillidia.present = false;
Mimosa_emaensis.leaf.paraphillidia.setLength(null);

Mimosa_emaensis.flower = new Flower();
Mimosa_emaensis.flower.calyx = new Calyx();
Mimosa_emaensis.flower.calyx.numSepals = 4;
Mimosa_emaensis.flower.calyx.length = 1;
Mimosa_emaensis.flower.calyx.shape = 'campanulate';
Mimosa_emaensis.flower.corolla = new Corolla();
Mimosa_emaensis.flower.corolla.numPepals = 4;
Mimosa_emaensis.flower.corolla.length = 3;
Mimosa_emaensis.flower.corolla.shape = 'campanulate';

Mimosa_emaensis.fruit = new Fruit();
Mimosa_emaensis.fruit.replum = new Replum();
Mimosa_emaensis.fruit.replum.shape = 'straight';
Mimosa_emaensis.fruit.epicarp = new Epicarp();
Mimosa_emaensis.fruit.epicarp.shape = 'straight';

// Sources
const source1 = new Source();
source1.sourceType = 'article';
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.';
source1.year = 2021;
source1.title = '';
Mimosa_emaensis.sources.push(source1);

// Export Mimosa emaensis
export { Mimosa_emaensis };