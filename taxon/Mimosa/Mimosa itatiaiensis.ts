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
import { Setiform } from '../../characters/v1/Trichomes'
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

// Description of Mimosa itatiaiensis
const Mimosa_itatiaiensis = new Mimosa()
Mimosa_itatiaiensis.specificEpithet = 'itatiaiensis'

Mimosa_itatiaiensis.stems = new Stems()
Mimosa_itatiaiensis.stems.trichomes = new Trichomes()
Mimosa_itatiaiensis.stems.trichomes.setiform = new Setiform()
Mimosa_itatiaiensis.stems.trichomes.setiform.are = 'present'

Mimosa_itatiaiensis.stipule = new Stipule()
Mimosa_itatiaiensis.stipule.margin = new MarginStipule()
Mimosa_itatiaiensis.stipule.adaxial = new AdaxialStipule()
Mimosa_itatiaiensis.stipule.abaxial = new AbaxialStipule()

Mimosa_itatiaiensis.leaf = new Leaf()
Mimosa_itatiaiensis.leaf.petiole = new Petiole()
Mimosa_itatiaiensis.leaf.bipinnate = new Bipinnate()
Mimosa_itatiaiensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_itatiaiensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_itatiaiensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_itatiaiensis.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_itatiaiensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_itatiaiensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_itatiaiensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_itatiaiensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(16, 25)
Mimosa_itatiaiensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_itatiaiensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_itatiaiensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_itatiaiensis.inflorescence = new Inflorescence()
Mimosa_itatiaiensis.inflorescence.peduncle = new Peduncle()
Mimosa_itatiaiensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_itatiaiensis.flower = new Flower()
Mimosa_itatiaiensis.flower.bracteole = new Bracteole()
Mimosa_itatiaiensis.flower.merism = '4-merous'
Mimosa_itatiaiensis.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_itatiaiensis.flower.calyx = new Calyx()
Mimosa_itatiaiensis.flower.calyx.shape = 'campanulate'
Mimosa_itatiaiensis.flower.corolla = new Corolla()
Mimosa_itatiaiensis.flower.corolla.shape = ['tubulose', 'campanulate']

Mimosa_itatiaiensis.androecium = new Androecium()
Mimosa_itatiaiensis.androecium.filaments = new Filaments()
Mimosa_itatiaiensis.androecium.filaments.colour = 'pinkish'

Mimosa_itatiaiensis.ginoecium = new Ginoecium()
Mimosa_itatiaiensis.ginoecium.ovary = new Ovary()

Mimosa_itatiaiensis.fruit = new Fruit()
Mimosa_itatiaiensis.fruit.stipe = new Stipe()
Mimosa_itatiaiensis.fruit.replum = new Replum()
Mimosa_itatiaiensis.fruit.epicarp = new Epicarp()

Mimosa_itatiaiensis.seed = new Seed()


// Description authorship
Mimosa_itatiaiensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_itatiaiensis.descriptionAuthorship.addAuthor({
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
Mimosa_itatiaiensis.addSource(source0)

/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = 2020
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source1.journal = 'Flora'
source1.number = 272
source1.pages = 151702
source1.figure = '2C'
source1.obtainingMethod = 'opticalMicroscope'
Mimosa_itatiaiensis.stems.trichomes.setiform.addSource(source1)

// Export Mimosa itatiaiensis
export { Mimosa_itatiaiensis }