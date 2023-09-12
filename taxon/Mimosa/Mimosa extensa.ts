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
import { Filiform, Lepidote } from '../../characters/v1/Trichomes'
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

// Description of Mimosa extensa
const Mimosa_extensa = new Mimosa()
Mimosa_extensa.specificEpithet = 'extensa'

Mimosa_extensa.stems = new Stems()

Mimosa_extensa.stipule = new Stipule()
Mimosa_extensa.stipule.margin = new MarginStipule()
Mimosa_extensa.stipule.adaxial = new AdaxialStipule()
Mimosa_extensa.stipule.abaxial = new AbaxialStipule()

Mimosa_extensa.leaf = new Leaf()
Mimosa_extensa.leaf.petiole = new Petiole()
Mimosa_extensa.leaf.bipinnate = new Bipinnate()
Mimosa_extensa.leaf.bipinnate.rachis = new Rachis()
Mimosa_extensa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_extensa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_extensa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 3)
Mimosa_extensa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_extensa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(1)
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform = new Filiform()
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.are = 'present'
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.orientation = 'antrorse'
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.numberOfCells = 'multicelullar'
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.lepidote = new Lepidote()
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.lepidote.are = 'present'

Mimosa_extensa.inflorescence = new Inflorescence()
Mimosa_extensa.inflorescence.peduncle = new Peduncle()
Mimosa_extensa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_extensa.flower = new Flower()
Mimosa_extensa.flower.bracteole = new Bracteole()
Mimosa_extensa.flower.merism = '5-merous'
Mimosa_extensa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_extensa.flower.calyx = new Calyx()
Mimosa_extensa.flower.calyx.shape = 'campanulate'
Mimosa_extensa.flower.corolla = new Corolla()
Mimosa_extensa.flower.corolla.shape = 'campanulate'

Mimosa_extensa.androecium = new Androecium()
Mimosa_extensa.androecium.filaments = new Filaments()
Mimosa_extensa.androecium.filaments.colour = 'whitenish'

Mimosa_extensa.ginoecium = new Ginoecium()
Mimosa_extensa.ginoecium.ovary = new Ovary()

Mimosa_extensa.fruit = new Fruit()
Mimosa_extensa.fruit.stipe = new Stipe()
Mimosa_extensa.fruit.replum = new Replum()
Mimosa_extensa.fruit.epicarp = new Epicarp()

Mimosa_extensa.seed = new Seed()


// Description authorship
Mimosa_extensa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_extensa.descriptionAuthorship.addAuthor({
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
Mimosa_extensa.addSource(source0)

/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = 2020
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source1.journal = 'Flora'
source1.number = 272
source1.pages = 151702
source1.figure = '1F'
source1.obtainingMethod = 'opticalMicroscope'
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '7D,E'
source2.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.lepidote.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = 2020
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source3.journal = 'Flora'
source3.number = 272
source3.pages = 151702
source3.figure = '7F,G'
source3.obtainingMethod = 'stereoscope'
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.lepidote.addSource(source3)

// Export Mimosa extensa
export { Mimosa_extensa }