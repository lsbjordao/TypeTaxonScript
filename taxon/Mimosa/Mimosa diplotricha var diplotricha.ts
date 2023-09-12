// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Fruit, Stems, Stipule, Leaf, Inflorescence, Flower, Androecium, Ginoecium, Seed } from '../../characters/v1'
import { Setiform } from '../../characters/v1/Trichomes'
import { SetiformBarbellate } from '../../characters/v1/Trichomes/Setiform'
import { Epicarp, Replum, Stipe } from '../../characters/v1/Fruit'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'
import { AbaxialStipule, AdaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Pinnae, Rachis } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Leaflet, Paraphillidia, Rachilla } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { AbaxialLeaflet, AdaxialLeaflet, MarginLeaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { CapitateInflorescence, Peduncle } from '../../characters/v1/Inflorescence'
import { Bracteole, Calyx, Corolla } from '../../characters/v1/Flower'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'

// Description of Mimosa diplotricha var. diplotricha
const Mimosa_diplotricha_var_diplotricha = new Mimosa()
Mimosa_diplotricha_var_diplotricha.specificEpithet = 'diplotricha var. diplotricha'

Mimosa_diplotricha_var_diplotricha.stems = new Stems()

Mimosa_diplotricha_var_diplotricha.stipule = new Stipule()
Mimosa_diplotricha_var_diplotricha.stipule.margin = new MarginStipule()
Mimosa_diplotricha_var_diplotricha.stipule.adaxial = new AdaxialStipule()
Mimosa_diplotricha_var_diplotricha.stipule.abaxial = new AbaxialStipule()

Mimosa_diplotricha_var_diplotricha.leaf = new Leaf()
Mimosa_diplotricha_var_diplotricha.leaf.petiole = new Petiole()
Mimosa_diplotricha_var_diplotricha.leaf.bipinnate = new Bipinnate()
Mimosa_diplotricha_var_diplotricha.leaf.bipinnate.rachis = new Rachis()
Mimosa_diplotricha_var_diplotricha.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_diplotricha_var_diplotricha.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_diplotricha_var_diplotricha.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 8)
Mimosa_diplotricha_var_diplotricha.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_diplotricha_var_diplotricha.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_diplotricha_var_diplotricha.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_diplotricha_var_diplotricha.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(11, 28)
Mimosa_diplotricha_var_diplotricha.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_diplotricha_var_diplotricha.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_diplotricha_var_diplotricha.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_diplotricha_var_diplotricha.inflorescence = new Inflorescence()
Mimosa_diplotricha_var_diplotricha.inflorescence.peduncle = new Peduncle()
Mimosa_diplotricha_var_diplotricha.inflorescence.capitate = new CapitateInflorescence()

Mimosa_diplotricha_var_diplotricha.flower = new Flower()
Mimosa_diplotricha_var_diplotricha.flower.bracteole = new Bracteole()
Mimosa_diplotricha_var_diplotricha.flower.merism = '4-merous'
Mimosa_diplotricha_var_diplotricha.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_diplotricha_var_diplotricha.flower.calyx = new Calyx()
Mimosa_diplotricha_var_diplotricha.flower.calyx.shape = 'campanulate'
Mimosa_diplotricha_var_diplotricha.flower.corolla = new Corolla()
Mimosa_diplotricha_var_diplotricha.flower.corolla.shape = ['campanulate', 'turbinate']

Mimosa_diplotricha_var_diplotricha.androecium = new Androecium()
Mimosa_diplotricha_var_diplotricha.androecium.filaments = new Filaments()
Mimosa_diplotricha_var_diplotricha.androecium.filaments.colour = 'pinkish'

Mimosa_diplotricha_var_diplotricha.ginoecium = new Ginoecium()
Mimosa_diplotricha_var_diplotricha.ginoecium.ovary = new Ovary()

Mimosa_diplotricha_var_diplotricha.fruit = new Fruit()
Mimosa_diplotricha_var_diplotricha.fruit.stipe = new Stipe()
Mimosa_diplotricha_var_diplotricha.fruit.replum = new Replum()
Mimosa_diplotricha_var_diplotricha.fruit.epicarp = new Epicarp()
Mimosa_diplotricha_var_diplotricha.fruit.epicarp.trichomes = new Trichomes()
Mimosa_diplotricha_var_diplotricha.fruit.epicarp.trichomes.setiform = new Setiform()
Mimosa_diplotricha_var_diplotricha.fruit.epicarp.trichomes.setiform.barbellate = new SetiformBarbellate()
Mimosa_diplotricha_var_diplotricha.fruit.epicarp.trichomes.setiform.barbellate.are = 'present'

Mimosa_diplotricha_var_diplotricha.seed = new Seed()


// Description authorship
Mimosa_diplotricha_var_diplotricha.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_diplotricha_var_diplotricha.descriptionAuthorship.addAuthor({
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
Mimosa_diplotricha_var_diplotricha.addSource(source0)

/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = 2020
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source1.journal = 'Flora'
source1.number = 272
source1.pages = 151702
source1.figure = '3G'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_diplotricha_var_diplotricha.fruit.epicarp.trichomes.setiform.barbellate.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '3H'
source2.obtainingMethod = 'opticalMicroscope'
Mimosa_diplotricha_var_diplotricha.fruit.epicarp.trichomes.setiform.barbellate.addSource(source2)

// Export Mimosa diplotricha var. diplotricha
export { Mimosa_diplotricha_var_diplotricha }