// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Stems, Stipule, Leaf, Inflorescence, Androecium, Ginoecium, Fruit, Seed } from '../../characters/v1'
import { Granular, Setiform } from '../../characters/v1/Trichomes'
import { SetiformBarbellate } from '../../characters/v1/Trichomes/Setiform'
import { AbaxialStipule, AdaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Leaflet, Paraphillidia, Pinnae, Rachilla } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { Rachis } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { AbaxialLeaflet, AdaxialLeaflet, MarginLeaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { CapitateInflorescence, Peduncle } from '../../characters/v1/Inflorescence'
import { Bracteole, Calyx, Corolla, Flower } from '../../characters/v1/Flower'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Epicarp, Replum, Stipe } from '../../characters/v1/Fruit'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa dryandroides_var_dryandroides
const Mimosa_dryandroides_var_dryandroides = new Mimosa()
Mimosa_dryandroides_var_dryandroides.specificEpithet = 'dryandroides var. dryandroides'

Mimosa_dryandroides_var_dryandroides.stems = new Stems()
Mimosa_dryandroides_var_dryandroides.stems.trichomes = new Trichomes()
Mimosa_dryandroides_var_dryandroides.stems.trichomes.setiform = new Setiform()
Mimosa_dryandroides_var_dryandroides.stems.trichomes.setiform.barbellate = new SetiformBarbellate()
Mimosa_dryandroides_var_dryandroides.stems.trichomes.setiform.barbellate.are = 'present'
Mimosa_dryandroides_var_dryandroides.stems.trichomes.granular = new Granular()
Mimosa_dryandroides_var_dryandroides.stems.trichomes.granular.are = 'present'

Mimosa_dryandroides_var_dryandroides.stipule = new Stipule()
Mimosa_dryandroides_var_dryandroides.stipule.margin = new MarginStipule()
Mimosa_dryandroides_var_dryandroides.stipule.adaxial = new AdaxialStipule()
Mimosa_dryandroides_var_dryandroides.stipule.abaxial = new AbaxialStipule()

Mimosa_dryandroides_var_dryandroides.leaf = new Leaf()
Mimosa_dryandroides_var_dryandroides.leaf.petiole = new Petiole()
Mimosa_dryandroides_var_dryandroides.leaf.bipinnate = new Bipinnate()
Mimosa_dryandroides_var_dryandroides.leaf.bipinnate.rachis = new Rachis()
Mimosa_dryandroides_var_dryandroides.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_dryandroides_var_dryandroides.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_dryandroides_var_dryandroides.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_dryandroides_var_dryandroides.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_dryandroides_var_dryandroides.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_dryandroides_var_dryandroides.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_dryandroides_var_dryandroides.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(20, 28)
Mimosa_dryandroides_var_dryandroides.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_dryandroides_var_dryandroides.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_dryandroides_var_dryandroides.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_dryandroides_var_dryandroides.inflorescence = new Inflorescence()
Mimosa_dryandroides_var_dryandroides.inflorescence.peduncle = new Peduncle()
Mimosa_dryandroides_var_dryandroides.inflorescence.capitate = new CapitateInflorescence()

Mimosa_dryandroides_var_dryandroides.flower = new Flower()
Mimosa_dryandroides_var_dryandroides.flower.bracteole = new Bracteole()
Mimosa_dryandroides_var_dryandroides.flower.merism = '4-merous'
Mimosa_dryandroides_var_dryandroides.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_dryandroides_var_dryandroides.flower.calyx = new Calyx()
Mimosa_dryandroides_var_dryandroides.flower.calyx.shape = 'pappiform'
Mimosa_dryandroides_var_dryandroides.flower.corolla = new Corolla()
Mimosa_dryandroides_var_dryandroides.flower.corolla.shape = 'campanulate'

Mimosa_dryandroides_var_dryandroides.androecium = new Androecium()
Mimosa_dryandroides_var_dryandroides.androecium.filaments = new Filaments()
Mimosa_dryandroides_var_dryandroides.androecium.filaments.colour = 'pinkish'

Mimosa_dryandroides_var_dryandroides.ginoecium = new Ginoecium()
Mimosa_dryandroides_var_dryandroides.ginoecium.ovary = new Ovary()

Mimosa_dryandroides_var_dryandroides.fruit = new Fruit()
Mimosa_dryandroides_var_dryandroides.fruit.stipe = new Stipe()
Mimosa_dryandroides_var_dryandroides.fruit.replum = new Replum()
Mimosa_dryandroides_var_dryandroides.fruit.epicarp = new Epicarp()

Mimosa_dryandroides_var_dryandroides.seed = new Seed()


// Description authorship
Mimosa_dryandroides_var_dryandroides.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_dryandroides_var_dryandroides.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})

// Sources
const source0 = new Source()
source0.sourceType = 'article'
source0.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source0.year = 2018
source0.title = 'Toward a Census of *Mimosa* (Leguminosae) in the Atlantic Domain, Southeastern Brazil'
source0.journal = 'Systematic Botany'
source0.volume = 43
source0.number = 1
source0.pages = 162-197
Mimosa_dryandroides_var_dryandroides.addSource(source0)

/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = 2020
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source1.journal = 'Flora'
source1.number = 272
source1.pages = 151702
source1.figure = '3A'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_dryandroides_var_dryandroides.stems.trichomes.setiform.barbellate.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '8C'
source2.obtainingMethod = 'opticalMicroscope'
Mimosa_dryandroides_var_dryandroides.stems.trichomes.granular.addSource(source2)

// Export Mimosa dryandroides_var_dryandroides
export { Mimosa_dryandroides_var_dryandroides }