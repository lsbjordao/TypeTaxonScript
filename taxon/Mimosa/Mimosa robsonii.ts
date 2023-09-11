// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles, 
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium, 
    Fruit
} from '../../characters/v1'
import { Granular, Filiform } from '../../characters/v1/Trichomes'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Pinnae, Rachis } from '../../characters/v1/Leaf/Bipinnate'
import { Leaflet, Paraphillidia, Rachilla } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { CapitateInflorescence, Peduncle } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Epicarp, Replum, Stipe } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { DistanceFromFirstPairOfLeaflets } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Paraphillidia'
import { baseFilaments } from '../../characters/v1/Androecium/Filaments'
import { ConnationOfFilamentsAtBase } from '../../characters/v1/Androecium/Filaments/baseFilaments'

// Description of Mimosa robsonii
const Mimosa_robsonii = new Mimosa()
Mimosa_robsonii.specificEpithet = 'robsonii'

Mimosa_robsonii.habit = 'subshrub'

Mimosa_robsonii.stems = new Stems()
Mimosa_robsonii.stems.orientation = 'scandent'
Mimosa_robsonii.stems.length = 3
Mimosa_robsonii.stems.shape = 'cylindric'
Mimosa_robsonii.stems.prickles = new Prickles()
Mimosa_robsonii.stems.prickles.are = 'present'
Mimosa_robsonii.stems.prickles.frequency = 'serially armed'
Mimosa_robsonii.stems.prickles.setLength(2)
Mimosa_robsonii.stems.prickles.orientation = 'decurved'
Mimosa_robsonii.stems.trichomes = new Trichomes()
Mimosa_robsonii.stems.trichomes.filiform = new Filiform()
Mimosa_robsonii.stems.trichomes.filiform.are = 'present'

Mimosa_robsonii.stipule = new Stipule()
Mimosa_robsonii.stipule.setLengthMinMax(2.5, 9)
Mimosa_robsonii.stipule.shape = 'lanceolate'
Mimosa_robsonii.stipule.nervation = '1-nerved'
Mimosa_robsonii.stipule.persistance = 'persistent'
Mimosa_robsonii.stipule.trichomes = new Trichomes()
Mimosa_robsonii.stipule.trichomes.filiform = new Filiform()
Mimosa_robsonii.stipule.trichomes.filiform.are = 'present or absent'

Mimosa_robsonii.leaf = new Leaf()
Mimosa_robsonii.leaf.petiole = new Petiole()
Mimosa_robsonii.leaf.petiole.transversalShape = '5-ribbed'
Mimosa_robsonii.leaf.petiole.persistance = 'caducous'
Mimosa_robsonii.leaf.petiole.prickles = new Prickles()
Mimosa_robsonii.leaf.petiole.prickles.are = 'present'
Mimosa_robsonii.leaf.petiole.trichomes = new Trichomes()
Mimosa_robsonii.leaf.petiole.trichomes.filiform = new Filiform()
Mimosa_robsonii.leaf.petiole.trichomes.filiform.are = 'present'
Mimosa_robsonii.leaf.bipinnate = new Bipinnate()
Mimosa_robsonii.leaf.bipinnate.rachis = new Rachis()
Mimosa_robsonii.leaf.bipinnate.rachis.setLengthMinMax(25, 78)
Mimosa_robsonii.leaf.bipinnate.rachis.prickles = new Prickles()
Mimosa_robsonii.leaf.bipinnate.rachis.prickles.are = 'present'
Mimosa_robsonii.leaf.bipinnate.rachis.trichomes = new Trichomes()
Mimosa_robsonii.leaf.bipinnate.rachis.trichomes.filiform = new Filiform()
Mimosa_robsonii.leaf.bipinnate.rachis.trichomes.filiform.are = 'present'
Mimosa_robsonii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_robsonii.leaf.bipinnate.rachis.spicule.is = 'present or absent'
Mimosa_robsonii.leaf.bipinnate.rachis.spicule.setLengthMinMax(0.8, 1)
Mimosa_robsonii.leaf.bipinnate.rachis.spicule.shape = 'linear-subulate'
Mimosa_robsonii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_robsonii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 7)
Mimosa_robsonii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_robsonii.leaf.bipinnate.pinnae.rachilla.setLengthMinMax(7, 48)
Mimosa_robsonii.leaf.bipinnate.pinnae.rachilla.trichomes = new Trichomes()
Mimosa_robsonii.leaf.bipinnate.pinnae.rachilla.trichomes.filiform = new Filiform()
Mimosa_robsonii.leaf.bipinnate.pinnae.rachilla.trichomes.filiform.are = 'present'
Mimosa_robsonii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_robsonii.leaf.bipinnate.pinnae.paraphillidia.setLengthMinMax(0.4, 1)
Mimosa_robsonii.leaf.bipinnate.pinnae.paraphillidia.shape = ['linear', 'lanceolate']
Mimosa_robsonii.leaf.bipinnate.pinnae.paraphillidia.pairLength = 'equal'
Mimosa_robsonii.leaf.bipinnate.pinnae.paraphillidia.distanceFromFirstPairOfLeaflets = new DistanceFromFirstPairOfLeaflets()
Mimosa_robsonii.leaf.bipinnate.pinnae.paraphillidia.distanceFromFirstPairOfLeaflets.setLengthMinMax(0.2, 2.5)
Mimosa_robsonii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_robsonii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(6, 11)
Mimosa_robsonii.leaf.bipinnate.pinnae.leaflet.setHeightMinMax(3.4, 7.5)
Mimosa_robsonii.leaf.bipinnate.pinnae.leaflet.setWidthMinMax(1.6, 3)
Mimosa_robsonii.leaf.bipinnate.pinnae.leaflet.shape = 'oblong'
Mimosa_robsonii.leaf.bipinnate.pinnae.leaflet.base = ['oblique-rounded', 'oblique-subcordate', 'oblique-cordate']
Mimosa_robsonii.leaf.bipinnate.pinnae.leaflet.apex = ['rounded', 'obtuse']
Mimosa_robsonii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_robsonii.leaf.bipinnate.pinnae.leaflet.margin.trichomes = new Trichomes()
Mimosa_robsonii.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform = new Filiform()
Mimosa_robsonii.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform.are = 'present'
Mimosa_robsonii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()
Mimosa_robsonii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()

Mimosa_robsonii.inflorescence = new Inflorescence()
Mimosa_robsonii.inflorescence.type = 'paniculate'
Mimosa_robsonii.inflorescence.shape = 'moriform'
Mimosa_robsonii.inflorescence.capitate = new CapitateInflorescence()
Mimosa_robsonii.inflorescence.capitate.setLengthMinMax(4.2, 6)
Mimosa_robsonii.inflorescence.capitate.shape = 'globose'
Mimosa_robsonii.inflorescence.peduncle = new Peduncle()
Mimosa_robsonii.inflorescence.peduncle.setLengthMinMax(9, 17)
Mimosa_robsonii.inflorescence.peduncle.prickles = new Prickles()
Mimosa_robsonii.inflorescence.peduncle.prickles.are = 'present'
Mimosa_robsonii.inflorescence.peduncle.trichomes = new Trichomes()
Mimosa_robsonii.inflorescence.peduncle.trichomes.filiform = new Filiform()
Mimosa_robsonii.inflorescence.peduncle.trichomes.filiform.are = 'present'

Mimosa_robsonii.flower = new Flower()
Mimosa_robsonii.flower.bracteole = new Bracteole()
Mimosa_robsonii.flower.bracteole.setLengthMinMax(1.2, 1.5)
Mimosa_robsonii.flower.bracteole.shape = 'lanceolate'
Mimosa_robsonii.flower.bracteole.trichomes = new Trichomes()
Mimosa_robsonii.flower.bracteole.trichomes.granular = new Granular()
Mimosa_robsonii.flower.bracteole.trichomes.granular.are = 'present or absent'
Mimosa_robsonii.flower.merism = '3-merous'
Mimosa_robsonii.flower.calyx = new Calyx()
Mimosa_robsonii.flower.calyx.setLengthMinMax(0.4, 0.7)
Mimosa_robsonii.flower.calyx.shape = 'campanulate'
Mimosa_robsonii.flower.calyx.apex = ['shortly denticulate', 'truncate']
Mimosa_robsonii.flower.corolla = new Corolla()
Mimosa_robsonii.flower.corolla.setLengthMinMax(2, 2.3)
Mimosa_robsonii.flower.corolla.shape = ['campanulate', 'turbinate']

Mimosa_robsonii.androecium = new Androecium()
Mimosa_robsonii.androecium.filaments = new Filaments()
Mimosa_robsonii.androecium.filaments.setLengthMinMax(8, 10)
Mimosa_robsonii.androecium.filaments.colour = ['pinkish', 'whitenish']
Mimosa_robsonii.androecium.filaments.base = new baseFilaments()
Mimosa_robsonii.androecium.filaments.base.connation = new ConnationOfFilamentsAtBase()
Mimosa_robsonii.androecium.filaments.base.connation.setLength(0.2)

Mimosa_robsonii.fruit = new Fruit()
Mimosa_robsonii.fruit.setHeightMinMax(40, 53)
Mimosa_robsonii.fruit.setWidthMinMax(10, 12.5)
Mimosa_robsonii.fruit.stipe = new Stipe()
Mimosa_robsonii.fruit.stipe.is = 'absent'
Mimosa_robsonii.fruit.shape = 'oblong'
Mimosa_robsonii.fruit.curvature = 'straight'
Mimosa_robsonii.fruit.replum = new Replum()
Mimosa_robsonii.fruit.replum.shape = 'straight'
Mimosa_robsonii.fruit.replum.prickles = new Prickles()
Mimosa_robsonii.fruit.replum.prickles.frequency = 'densely armed'
Mimosa_robsonii.fruit.replum.prickles.orientation = 'decurved'
Mimosa_robsonii.fruit.replum.prickles.setLengthMinMax(2, 4)
Mimosa_robsonii.fruit.replum.trichomes = new Trichomes()
Mimosa_robsonii.fruit.replum.trichomes.granular = new Granular()
Mimosa_robsonii.fruit.replum.trichomes.granular.are = 'present'
Mimosa_robsonii.fruit.replum.trichomes.granular.density = 'sparsely'
Mimosa_robsonii.fruit.epicarp = new Epicarp()
Mimosa_robsonii.fruit.epicarp.prickles = new Prickles()
Mimosa_robsonii.fruit.epicarp.prickles.are = 'present'
Mimosa_robsonii.fruit.epicarp.prickles.frequency = 'sparsely armed'
Mimosa_robsonii.fruit.epicarp.prickles.orientation = 'decurved'
Mimosa_robsonii.fruit.epicarp.trichomes = new Trichomes()
Mimosa_robsonii.fruit.epicarp.trichomes.granular = new Granular()
Mimosa_robsonii.fruit.epicarp.trichomes.granular.are = 'present'
Mimosa_robsonii.fruit.setNumberOfSeedsMinMax(8, 11)


// Description authorship
Mimosa_robsonii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_robsonii.descriptionAuthorship.addAuthor({
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
Mimosa_robsonii.addSource(source1)

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
source2.figure = '6'
source2.obtainingMethod = 'drawing'
Mimosa_robsonii.addSource(source2)

// Export Mimosa robsonii
export { Mimosa_robsonii }