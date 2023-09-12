// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Filiform, Setiform } from '../../characters/v1/Trichomes'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa oblonga_var_oblonga
const Mimosa_oblonga_var_oblonga = new Mimosa()
Mimosa_oblonga_var_oblonga.specificEpithet = 'oblonga var. oblonga'

Mimosa_oblonga_var_oblonga.stems = new Stems()
Mimosa_oblonga_var_oblonga.stems.trichomes = new Trichomes()
Mimosa_oblonga_var_oblonga.stems.trichomes.filiform = new Filiform()
Mimosa_oblonga_var_oblonga.stems.trichomes.filiform.are = 'present'
Mimosa_oblonga_var_oblonga.stems.trichomes.setiform = new Setiform()
Mimosa_oblonga_var_oblonga.stems.trichomes.setiform.are = 'present'

Mimosa_oblonga_var_oblonga.stipule = new Stipule()
Mimosa_oblonga_var_oblonga.stipule.margin = new MarginStipule()
Mimosa_oblonga_var_oblonga.stipule.adaxial = new AdaxialStipule()
Mimosa_oblonga_var_oblonga.stipule.abaxial = new AbaxialStipule()

Mimosa_oblonga_var_oblonga.leaf = new Leaf()
Mimosa_oblonga_var_oblonga.leaf.petiole = new Petiole()
Mimosa_oblonga_var_oblonga.leaf.bipinnate = new Bipinnate()
Mimosa_oblonga_var_oblonga.leaf.bipinnate.rachis = new Rachis()
Mimosa_oblonga_var_oblonga.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_oblonga_var_oblonga.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_oblonga_var_oblonga.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_oblonga_var_oblonga.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_oblonga_var_oblonga.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_oblonga_var_oblonga.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_oblonga_var_oblonga.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(1)
Mimosa_oblonga_var_oblonga.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_oblonga_var_oblonga.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_oblonga_var_oblonga.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_oblonga_var_oblonga.inflorescence = new Inflorescence()
Mimosa_oblonga_var_oblonga.inflorescence.peduncle = new Peduncle()
Mimosa_oblonga_var_oblonga.inflorescence.capitate = new CapitateInflorescence()

Mimosa_oblonga_var_oblonga.flower = new Flower()
Mimosa_oblonga_var_oblonga.flower.bracteole = new Bracteole()
Mimosa_oblonga_var_oblonga.flower.merism = '4-merous'
Mimosa_oblonga_var_oblonga.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_oblonga_var_oblonga.flower.calyx = new Calyx()
Mimosa_oblonga_var_oblonga.flower.calyx.shape = 'campanulate'
Mimosa_oblonga_var_oblonga.flower.corolla = new Corolla()
Mimosa_oblonga_var_oblonga.flower.corolla.shape = 'campanulate'

Mimosa_oblonga_var_oblonga.androecium = new Androecium()
Mimosa_oblonga_var_oblonga.androecium.filaments = new Filaments()
Mimosa_oblonga_var_oblonga.androecium.filaments.colour = 'pinkish'

Mimosa_oblonga_var_oblonga.ginoecium = new Ginoecium()
Mimosa_oblonga_var_oblonga.ginoecium.ovary = new Ovary()

Mimosa_oblonga_var_oblonga.fruit = new Fruit()
Mimosa_oblonga_var_oblonga.fruit.stipe = new Stipe()
Mimosa_oblonga_var_oblonga.fruit.replum = new Replum()
Mimosa_oblonga_var_oblonga.fruit.epicarp = new Epicarp()

Mimosa_oblonga_var_oblonga.seed = new Seed()


// Description authorship
Mimosa_oblonga_var_oblonga.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_oblonga_var_oblonga.descriptionAuthorship.addAuthor({
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
Mimosa_oblonga_var_oblonga.addSource(source0)

/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = 2020
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source1.journal = 'Flora'
source1.number = 272
source1.pages = 151702
source1.figure = '2B'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_oblonga_var_oblonga.stems.trichomes.filiform.addSource(source1)
Mimosa_oblonga_var_oblonga.stems.trichomes.setiform.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '2H'
source2.obtainingMethod = 'opticalMicroscope'
Mimosa_oblonga_var_oblonga.stems.trichomes.filiform.addSource(source2)
Mimosa_oblonga_var_oblonga.stems.trichomes.setiform.addSource(source2)

// Export Mimosa oblonga_var_oblonga
export { Mimosa_oblonga_var_oblonga }