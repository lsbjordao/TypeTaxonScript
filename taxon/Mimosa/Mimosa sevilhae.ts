// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Trichomes, 
    Fruit, 
    Stems, 
    Prickles, 
    Leaf, 
    Stipule, 
    Inflorescence, 
    Flower, 
    Androecium, 
    Seed
} from '../../characters/v1'
import { Filiform, Granular } from '../../characters/v1/Trichomes'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Pinnae, Rachis } from '../../characters/v1/Leaf/Bipinnate'
import { Leaflet, Paraphillidia, Rachilla } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { DistanceFromFirstPairOfLeaflets } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Paraphillidia'
import { AbaxialLeaflet, AdaxialLeaflet, MarginLeaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { CapitateInflorescence, Peduncle } from '../../characters/v1/Inflorescence'
import { Bracteole, Calyx, Corolla } from '../../characters/v1/Flower'
import { Filaments } from '../../characters/v1/Androecium'
import { baseFilaments } from '../../characters/v1/Androecium/Filaments'
import { ConnationOfFilamentsAtBase } from '../../characters/v1/Androecium/Filaments/baseFilaments'
import { Epicarp, Replum, Stipe } from '../../characters/v1/Fruit'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa sevilhae
const Mimosa_sevilhae = new Mimosa()
Mimosa_sevilhae.specificEpithet = 'sevilhae'

Mimosa_sevilhae.habit = ['herb', 'subshrub']

Mimosa_sevilhae.stems = new Stems()
Mimosa_sevilhae.stems.orientation = 'decumbent'
Mimosa_sevilhae.stems.shape = 'cylindric'
Mimosa_sevilhae.stems.prickles = new Prickles()
Mimosa_sevilhae.stems.prickles.are = 'present'
Mimosa_sevilhae.stems.prickles.frequency = 'serially armed'
Mimosa_sevilhae.stems.prickles.orientation = 'decurved'
Mimosa_sevilhae.stems.prickles.setLengthMinMax(1, 1.5)

Mimosa_sevilhae.stipule = new Stipule()
Mimosa_sevilhae.stipule.setLengthMinMax(1.1, 2)
Mimosa_sevilhae.stipule.shape = 'lanceolate'
Mimosa_sevilhae.stipule.nervation = '1-nerved'
Mimosa_sevilhae.stipule.persistance = 'persistent'

Mimosa_sevilhae.leaf = new Leaf()
Mimosa_sevilhae.leaf.petiole = new Petiole()
Mimosa_sevilhae.leaf.petiole.setLengthMinMax(10, 23)
Mimosa_sevilhae.leaf.petiole.flattening = 'not dorsiventrally flattened'
Mimosa_sevilhae.leaf.petiole.transversalShape = ['4-ribbed', '4-gonal']
Mimosa_sevilhae.leaf.petiole.persistance = 'caducous'
Mimosa_sevilhae.leaf.petiole.prickles = new Prickles()
Mimosa_sevilhae.leaf.petiole.prickles.are = 'present'
Mimosa_sevilhae.leaf.petiole.prickles.frequency = 'sparsely armed'
Mimosa_sevilhae.leaf.bipinnate = new Bipinnate()
Mimosa_sevilhae.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_sevilhae.leaf.bipinnate.rachis = new Rachis()
Mimosa_sevilhae.leaf.bipinnate.rachis.setLengthMinMax(3, 9)
Mimosa_sevilhae.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_sevilhae.leaf.bipinnate.rachis.spicule.is = 'present or absent'
Mimosa_sevilhae.leaf.bipinnate.rachis.spicule.setLengthMinMax(0.3, 0.6)
Mimosa_sevilhae.leaf.bipinnate.rachis.spicule.shape = 'linear-subulate'
Mimosa_sevilhae.leaf.bipinnate.rachis.prickles = new Prickles()
Mimosa_sevilhae.leaf.bipinnate.rachis.prickles.are = 'present'
Mimosa_sevilhae.leaf.bipinnate.rachis.prickles.frequency = 'sparsely armed'
Mimosa_sevilhae.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1)
Mimosa_sevilhae.leaf.bipinnate.pinnae.setNumberOfPairs(2)
Mimosa_sevilhae.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_sevilhae.leaf.bipinnate.pinnae.paraphillidia.are = 'present'
Mimosa_sevilhae.leaf.bipinnate.pinnae.paraphillidia.setLengthMinMax(0.15, 0.2)
Mimosa_sevilhae.leaf.bipinnate.pinnae.paraphillidia.shape = 'short-triangular'
Mimosa_sevilhae.leaf.bipinnate.pinnae.paraphillidia.distanceFromFirstPairOfLeaflets = new DistanceFromFirstPairOfLeaflets()
Mimosa_sevilhae.leaf.bipinnate.pinnae.paraphillidia.distanceFromFirstPairOfLeaflets.setLengthMinMax(1.2, 2)
Mimosa_sevilhae.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_sevilhae.leaf.bipinnate.pinnae.rachilla.setLengthMinMax(6.5, 14.5)
Mimosa_sevilhae.leaf.bipinnate.pinnae.rachilla.trichomes = new Trichomes()
Mimosa_sevilhae.leaf.bipinnate.pinnae.rachilla.trichomes.filiform = new Filiform()
Mimosa_sevilhae.leaf.bipinnate.pinnae.rachilla.trichomes.filiform.are = 'present'
Mimosa_sevilhae.leaf.bipinnate.pinnae.rachilla.trichomes.filiform.density = 'sparsely'
Mimosa_sevilhae.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_sevilhae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(5, 9)
Mimosa_sevilhae.leaf.bipinnate.pinnae.leaflet.setHeightMinMax(3.5, 7.6)
Mimosa_sevilhae.leaf.bipinnate.pinnae.leaflet.setWidthMinMax(1.4, 2)
Mimosa_sevilhae.leaf.bipinnate.pinnae.leaflet.shape = 'oblong'
Mimosa_sevilhae.leaf.bipinnate.pinnae.leaflet.base = ['oblique-rounded', 'oblique-truncate', 'oblique-acute']
Mimosa_sevilhae.leaf.bipinnate.pinnae.leaflet.apex = ['obtuse-mucronulate', 'rounded-mucronulate']
Mimosa_sevilhae.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_sevilhae.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_sevilhae.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_sevilhae.inflorescence = new Inflorescence()
Mimosa_sevilhae.inflorescence.type = 'racemose'
Mimosa_sevilhae.inflorescence.shape = 'moriform'
Mimosa_sevilhae.inflorescence.peduncle = new Peduncle()
Mimosa_sevilhae.inflorescence.peduncle.setLengthMinMax(13, 17.5)
Mimosa_sevilhae.inflorescence.capitate = new CapitateInflorescence()
Mimosa_sevilhae.inflorescence.capitate.setLengthMinMax(2.5, 3.5)
Mimosa_sevilhae.inflorescence.capitate.shape = 'globose'

Mimosa_sevilhae.flower = new Flower()
Mimosa_sevilhae.flower.bracteole = new Bracteole()
Mimosa_sevilhae.flower.bracteole.setLengthMinMax(0.6, 1)
Mimosa_sevilhae.flower.bracteole.shape = 'spatulate'
Mimosa_sevilhae.flower.bracteole.trichomes = new Trichomes()
Mimosa_sevilhae.flower.bracteole.trichomes.granular = new Granular()
Mimosa_sevilhae.flower.bracteole.trichomes.granular.are = 'present or absent'
Mimosa_sevilhae.flower.merism = '4-merous'
Mimosa_sevilhae.flower.calyx = new Calyx()
Mimosa_sevilhae.flower.calyx.setLengthMinMax(0.35, 0.45)
Mimosa_sevilhae.flower.calyx.shape = 'campanulate'
Mimosa_sevilhae.flower.calyx.apex = 'shortly denticulate'
Mimosa_sevilhae.flower.corolla = new Corolla()
Mimosa_sevilhae.flower.corolla.setLengthMinMax(1.5, 2)
Mimosa_sevilhae.flower.corolla.shape = ['campanulate', 'turbinate']

Mimosa_sevilhae.androecium = new Androecium()
Mimosa_sevilhae.androecium.filaments = new Filaments()
Mimosa_sevilhae.androecium.filaments.setLengthMinMax(4.5, 5)
Mimosa_sevilhae.androecium.filaments.colour = 'pinkish'
Mimosa_sevilhae.androecium.filaments.base = new baseFilaments()
Mimosa_sevilhae.androecium.filaments.base.connation = new ConnationOfFilamentsAtBase()
Mimosa_sevilhae.androecium.filaments.base.connation.setLength(0.2)

Mimosa_sevilhae.fruit = new Fruit()
Mimosa_sevilhae.fruit.setHeightMinMax(20, 27)
Mimosa_sevilhae.fruit.setWidthMinMax(5, 5.5)
Mimosa_sevilhae.fruit.stipe = new Stipe()
Mimosa_sevilhae.fruit.stipe.is = 'absent'
Mimosa_sevilhae.fruit.shape = 'oblong'
Mimosa_sevilhae.fruit.curvature = 'straight'
Mimosa_sevilhae.fruit.replum = new Replum()
Mimosa_sevilhae.fruit.replum.shape = 'straight'
Mimosa_sevilhae.fruit.replum.prickles = new Prickles()
Mimosa_sevilhae.fruit.replum.prickles.are = 'present'
Mimosa_sevilhae.fruit.replum.prickles.frequency = 'densely armed'
Mimosa_sevilhae.fruit.replum.prickles.orientation = 'decurved'
Mimosa_sevilhae.fruit.replum.trichomes = new Trichomes()
Mimosa_sevilhae.fruit.replum.trichomes.granular = new Granular()
Mimosa_sevilhae.fruit.replum.trichomes.granular.are = 'present'
Mimosa_sevilhae.fruit.epicarp = new Epicarp()
Mimosa_sevilhae.fruit.epicarp.prickles = new Prickles()
Mimosa_sevilhae.fruit.epicarp.prickles.are = 'present'
Mimosa_sevilhae.fruit.epicarp.prickles.orientation = 'decurved'
Mimosa_sevilhae.fruit.epicarp.trichomes = new Trichomes()
Mimosa_sevilhae.fruit.epicarp.trichomes.granular = new Granular()
Mimosa_sevilhae.fruit.epicarp.trichomes.granular.are = 'present'
Mimosa_sevilhae.fruit.setNumberOfSeedsMinMax(6, 9)

Mimosa_sevilhae.seed = new Seed()
Mimosa_sevilhae.seed.setHeightMinMax(3, 3.2)
Mimosa_sevilhae.seed.setWidthMinMax(1.9, 2.1)
Mimosa_sevilhae.seed.shape = 'obovate'
Mimosa_sevilhae.seed.pleurogram = 'median'

// Description authorship
Mimosa_sevilhae.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_sevilhae.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})

// Sources
const source1 = new Source()
source1.obraPrinceps = 'yes'
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. and Morim, M.P. and Simon, M.F., Dutra, V.F. and Baumgratz, J.F.A.'
source1.year = 2021
source1.title = 'New Species of *Mimosa* (Leguminosae) from Brazil'
source1.journal = 'Systematic Botany'
source1.volume = 46
source1.number = 2
source1.pages = 339-351
Mimosa_sevilhae.addSource(source1)

const source2 = new Source()
source2.obraPrinceps = 'yes'
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. and Morim, M.P. and Simon, M.F., Dutra, V.F. and Baumgratz, J.F.A.'
source2.year = 2021
source2.title = 'New Species of *Mimosa* (Leguminosae) from Brazil'
source2.journal = 'Systematic Botany'
source2.volume = 46
source2.number = 2
source2.pages = 339-351
source2.figure = '8'
source2.obtainingMethod = 'drawing'
Mimosa_sevilhae.addSource(source2)

// Export Mimosa sevilhae
export { Mimosa_sevilhae }