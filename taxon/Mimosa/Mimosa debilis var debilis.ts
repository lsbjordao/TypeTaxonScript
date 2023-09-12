// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Stems, Stipule, Leaf, Inflorescence, Flower, Androecium, Ginoecium, Fruit, Seed } from '../../characters/v1'
import { Filiform, Setiform } from '../../characters/v1/Trichomes'
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
import { Epicarp, Replum, Stipe } from '../../characters/v1/Fruit'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa debilis_var_debilis
const Mimosa_debilis_var_debilis = new Mimosa()
Mimosa_debilis_var_debilis.specificEpithet = 'debilis var. debilis'

Mimosa_debilis_var_debilis.stems = new Stems()
Mimosa_debilis_var_debilis.stems.trichomes = new Trichomes()
Mimosa_debilis_var_debilis.stems.trichomes.filiform = new Filiform()
Mimosa_debilis_var_debilis.stems.trichomes.filiform.are = 'present'
Mimosa_debilis_var_debilis.stems.trichomes.setiform = new Setiform()
Mimosa_debilis_var_debilis.stems.trichomes.setiform.are = 'present'

Mimosa_debilis_var_debilis.stipule = new Stipule()
Mimosa_debilis_var_debilis.stipule.margin = new MarginStipule()
Mimosa_debilis_var_debilis.stipule.adaxial = new AdaxialStipule()
Mimosa_debilis_var_debilis.stipule.abaxial = new AbaxialStipule()

Mimosa_debilis_var_debilis.leaf = new Leaf()
Mimosa_debilis_var_debilis.leaf.petiole = new Petiole()
Mimosa_debilis_var_debilis.leaf.bipinnate = new Bipinnate()
Mimosa_debilis_var_debilis.leaf.bipinnate.rachis = new Rachis()
Mimosa_debilis_var_debilis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_debilis_var_debilis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_debilis_var_debilis.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_debilis_var_debilis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_debilis_var_debilis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_debilis_var_debilis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_debilis_var_debilis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(2)
Mimosa_debilis_var_debilis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_debilis_var_debilis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_debilis_var_debilis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_debilis_var_debilis.inflorescence = new Inflorescence()
Mimosa_debilis_var_debilis.inflorescence.peduncle = new Peduncle()
Mimosa_debilis_var_debilis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_debilis_var_debilis.flower = new Flower()
Mimosa_debilis_var_debilis.flower.bracteole = new Bracteole()
Mimosa_debilis_var_debilis.flower.merism = '4-merous'
Mimosa_debilis_var_debilis.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_debilis_var_debilis.flower.calyx = new Calyx()
Mimosa_debilis_var_debilis.flower.calyx.shape = 'campanulate'
Mimosa_debilis_var_debilis.flower.corolla = new Corolla()
Mimosa_debilis_var_debilis.flower.corolla.shape = 'campanulate'

Mimosa_debilis_var_debilis.androecium = new Androecium()
Mimosa_debilis_var_debilis.androecium.filaments = new Filaments()
Mimosa_debilis_var_debilis.androecium.filaments.colour = 'pinkish'

Mimosa_debilis_var_debilis.ginoecium = new Ginoecium()
Mimosa_debilis_var_debilis.ginoecium.ovary = new Ovary()

Mimosa_debilis_var_debilis.fruit = new Fruit()
Mimosa_debilis_var_debilis.fruit.stipe = new Stipe()
Mimosa_debilis_var_debilis.fruit.replum = new Replum()
Mimosa_debilis_var_debilis.fruit.epicarp = new Epicarp()

Mimosa_debilis_var_debilis.seed = new Seed()


// Description authorship
Mimosa_debilis_var_debilis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_debilis_var_debilis.descriptionAuthorship.addAuthor({
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
Mimosa_debilis_var_debilis.addSource(source0)

/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = 2020
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source1.journal = 'Flora'
source1.number = 272
source1.pages = 151702
source1.figure = '2A'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_debilis_var_debilis.stems.trichomes.filiform.addSource(source1)
Mimosa_debilis_var_debilis.stems.trichomes.setiform.addSource(source1)

// Export Mimosa debilis_var_debilis
export { Mimosa_debilis_var_debilis }