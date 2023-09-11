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
import { Dendritic, Stellate, Fasciculate, Verruciform } from '../../characters/v1/Trichomes'
import { StellateSubsessile } from '../../characters/v1/Trichomes/Stellate'
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
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa myuros
const Mimosa_myuros = new Mimosa()
Mimosa_myuros.specificEpithet = 'myuros'

Mimosa_myuros.stems = new Stems()
Mimosa_myuros.stems.trichomes = new Trichomes()
Mimosa_myuros.stems.trichomes.stellate = new Stellate()
Mimosa_myuros.stems.trichomes.stellate.subsessile = new StellateSubsessile()
Mimosa_myuros.stems.trichomes.stellate.subsessile.are = 'present'
Mimosa_myuros.stems.trichomes.dendritic = new Dendritic()
Mimosa_myuros.stems.trichomes.dendritic.are = 'present'

Mimosa_myuros.stipule = new Stipule()
Mimosa_myuros.stipule.margin = new MarginStipule()
Mimosa_myuros.stipule.adaxial = new AdaxialStipule()
Mimosa_myuros.stipule.abaxial = new AbaxialStipule()

Mimosa_myuros.leaf = new Leaf()
Mimosa_myuros.leaf.petiole = new Petiole()
Mimosa_myuros.leaf.bipinnate = new Bipinnate()
Mimosa_myuros.leaf.bipinnate.rachis = new Rachis()
Mimosa_myuros.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_myuros.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_myuros.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 6)
Mimosa_myuros.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(7)
Mimosa_myuros.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_myuros.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(5, 6)
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(7)
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate = new Fasciculate()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate.are = 'present'

Mimosa_myuros.inflorescence = new Inflorescence()
Mimosa_myuros.inflorescence.peduncle = new Peduncle()
Mimosa_myuros.inflorescence.spicate = new Spicate()

Mimosa_myuros.flower = new Flower()
Mimosa_myuros.flower.bracteole = new Bracteole()
Mimosa_myuros.flower.merism = '4-merous'
Mimosa_myuros.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_myuros.flower.calyx = new Calyx()
Mimosa_myuros.flower.calyx.shape = 'campanulate'
Mimosa_myuros.flower.corolla = new Corolla()
Mimosa_myuros.flower.corolla.shape = 'campanulate'

Mimosa_myuros.androecium = new Androecium()
Mimosa_myuros.androecium.filaments = new Filaments()
Mimosa_myuros.androecium.filaments.colour = 'whitenish'

Mimosa_myuros.ginoecium = new Ginoecium()
Mimosa_myuros.ginoecium.ovary = new Ovary()

Mimosa_myuros.fruit = new Fruit()
Mimosa_myuros.fruit.stipe = new Stipe()
Mimosa_myuros.fruit.replum = new Replum()
Mimosa_myuros.fruit.epicarp = new Epicarp()
Mimosa_myuros.fruit.epicarp.trichomes = new Trichomes()
Mimosa_myuros.fruit.epicarp.trichomes.verruciform = new Verruciform()
Mimosa_myuros.fruit.epicarp.trichomes.verruciform.are = 'present'

Mimosa_myuros.seed = new Seed()


// Description authorship
Mimosa_myuros.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_myuros.descriptionAuthorship.addAuthor({
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
source1.figure = '5D'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_myuros.stems.trichomes.stellate.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '5H'
source2.obtainingMethod = 'stereoscope'
Mimosa_myuros.stems.trichomes.dendritic.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = 2020
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source3.journal = 'Flora'
source3.number = 272
source3.pages = 151702
source3.figure = '5C'
source3.obtainingMethod = 'opticalMicroscope'
Mimosa_myuros.stems.trichomes.dendritic.addSource(source3)

const source4 = new Source()
source4.sourceType = 'article'
source4.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source4.year = 2020
source4.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source4.journal = 'Flora'
source4.number = 272
source4.pages = 151702
source4.figure = '7B'
source4.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_myuros.fruit.epicarp.trichomes.verruciform.addSource(source4)

// Export Mimosa myuros
export { Mimosa_myuros }