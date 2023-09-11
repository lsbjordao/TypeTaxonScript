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
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
    import { Setiform, Capitate } from '../../characters/v1/Trichomes'
    import { CapitateFiliform } from '../../characters/v1/Trichomes/Capitate'
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

// Description of Mimosa glazioui
const Mimosa_glazioui = new Mimosa()
Mimosa_glazioui.specificEpithet = 'glazioui'

Mimosa_glazioui.stems = new Stems()
Mimosa_glazioui.stems.trichomes = new Trichomes()
Mimosa_glazioui.stems.trichomes.setiform = new Setiform()
Mimosa_glazioui.stems.trichomes.setiform.are = 'present'
Mimosa_glazioui.stems.trichomes.capitate = new Capitate()
Mimosa_glazioui.stems.trichomes.capitate.filiform = new CapitateFiliform()

Mimosa_glazioui.stipule = new Stipule()
Mimosa_glazioui.stipule.margin = new MarginStipule()
Mimosa_glazioui.stipule.adaxial = new AdaxialStipule()
Mimosa_glazioui.stipule.abaxial = new AbaxialStipule()

Mimosa_glazioui.leaf = new Leaf()
Mimosa_glazioui.leaf.petiole = new Petiole()
Mimosa_glazioui.leaf.bipinnate = new Bipinnate()
Mimosa_glazioui.leaf.bipinnate.rachis = new Rachis()
Mimosa_glazioui.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_glazioui.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_glazioui.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1)
Mimosa_glazioui.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_glazioui.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_glazioui.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_glazioui.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_glazioui.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(14, 18)
Mimosa_glazioui.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(19)
Mimosa_glazioui.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_glazioui.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_glazioui.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_glazioui.inflorescence = new Inflorescence()
Mimosa_glazioui.inflorescence.peduncle = new Peduncle()
Mimosa_glazioui.inflorescence.capitate = new CapitateInflorescence()

Mimosa_glazioui.flower = new Flower()
Mimosa_glazioui.flower.bracteole = new Bracteole()
Mimosa_glazioui.flower.merism = '4-merous'
Mimosa_glazioui.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_glazioui.flower.calyx = new Calyx()
Mimosa_glazioui.flower.calyx.shape = 'campanulate'
Mimosa_glazioui.flower.corolla = new Corolla()
Mimosa_glazioui.flower.corolla.shape = 'campanulate'

Mimosa_glazioui.androecium = new Androecium()
Mimosa_glazioui.androecium.filaments = new Filaments()
Mimosa_glazioui.androecium.filaments.colour = 'whitenish'

Mimosa_glazioui.ginoecium = new Ginoecium()
Mimosa_glazioui.ginoecium.ovary = new Ovary()

Mimosa_glazioui.fruit = new Fruit()
Mimosa_glazioui.fruit.stipe = new Stipe()
Mimosa_glazioui.fruit.replum = new Replum()
Mimosa_glazioui.fruit.epicarp = new Epicarp()

Mimosa_glazioui.seed = new Seed()


// Description authorship
Mimosa_glazioui.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_glazioui.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})

// Sources
/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = 2020
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source1.journal = 'Flora'
source1.number = 272
source1.pages = 151702
source1.figure = '2E'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_glazioui.stems.trichomes.setiform.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '8E'
source2.obtainingMethod = 'opticalMicroscope'
Mimosa_glazioui.stems.trichomes.setiform.addSource(source2)

// Export Mimosa glazioui
export { Mimosa_glazioui }