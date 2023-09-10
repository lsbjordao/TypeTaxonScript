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
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Granular, Filiform } from '../../characters/v1/Trichomes'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { CapitateInflorescence, Peduncle } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Lobes } from '../../characters/v1/Flower/Corolla'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { baseFilaments } from '../../characters/v1/Androecium/Filaments'
import { ConnationOfFilamentsAtBase } from '../../characters/v1/Androecium/Filaments/baseFilaments'
import { Ovary } from '../../characters/v1/Ginoecium'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'
import { DistanceFromFirstPairOfLeaflets, DistanceFromPinnaPulvinus } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Paraphillidia'

// Description of Mimosa osmarii
const Mimosa_osmarii = new Mimosa()
Mimosa_osmarii.specificEpithet = 'osmarii'

Mimosa_osmarii.habit = 'herb'
Mimosa_osmarii.lightStrategy = ['sciophilous', 'semisciophilous']

Mimosa_osmarii.stems = new Stems()
Mimosa_osmarii.stems.orientation = 'scandent'
Mimosa_osmarii.stems.trichomes = new Trichomes
Mimosa_osmarii.stems.trichomes.granular = new Granular()
Mimosa_osmarii.stems.trichomes.granular.are = 'present'
Mimosa_osmarii.stems.prickles = new Prickles()
Mimosa_osmarii.stems.prickles.orientation = 'decurved'
Mimosa_osmarii.stems.prickles.setLength(2)


Mimosa_osmarii.stipule = new Stipule()
Mimosa_osmarii.stipule.setLengthMinMax(0.8, 2)
Mimosa_osmarii.stipule.shape = 'lanceolate'
Mimosa_osmarii.stipule.nervation = '1-nerved'
Mimosa_osmarii.stipule.persistance = 'persistent'
Mimosa_osmarii.stipule.margin = new MarginStipule()
Mimosa_osmarii.stipule.margin.trichomes = new Trichomes()
Mimosa_osmarii.stipule.margin.trichomes.filiform = new Filiform()
Mimosa_osmarii.stipule.margin.trichomes.filiform.are = 'present or absent'
Mimosa_osmarii.stipule.abaxial = new AbaxialStipule()
Mimosa_osmarii.stipule.abaxial.trichomes = new Trichomes()
Mimosa_osmarii.stipule.abaxial.trichomes.granular = new Granular()
Mimosa_osmarii.stipule.abaxial.trichomes.granular.are = 'present or absent'

Mimosa_osmarii.leaf = new Leaf()
Mimosa_osmarii.leaf.petiole = new Petiole()
Mimosa_osmarii.leaf.petiole.setLengthMinMax(13, 35)
Mimosa_osmarii.leaf.petiole.transversalShape = '4-ribbed'
Mimosa_osmarii.leaf.petiole.prickles = new Prickles()
Mimosa_osmarii.leaf.petiole.prickles.orientation = 'decurved'
Mimosa_osmarii.leaf.bipinnate = new Bipinnate()
Mimosa_osmarii.leaf.bipinnate.rachis = new Rachis()
Mimosa_osmarii.leaf.bipinnate.rachis.setLengthMinMax(5, 35)
Mimosa_osmarii.leaf.bipinnate.rachis.prickles = new Prickles()
Mimosa_osmarii.leaf.bipinnate.rachis.prickles.are = 'present'
Mimosa_osmarii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_osmarii.leaf.bipinnate.rachis.spicule.are = 'present or absent'
Mimosa_osmarii.leaf.bipinnate.rachis.spicule.setLengthMinMax(1, 1.5)
Mimosa_osmarii.leaf.bipinnate.rachis.spicule.shape = 'deltate'
Mimosa_osmarii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_osmarii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_osmarii.leaf.bipinnate.pinnae.paraphillidia.are = 'present'
Mimosa_osmarii.leaf.bipinnate.pinnae.paraphillidia.setLengthMinMax(0.2, 3)
Mimosa_osmarii.leaf.bipinnate.pinnae.paraphillidia.pairLength = 'equal'
Mimosa_osmarii.leaf.bipinnate.pinnae.paraphillidia.shape = ['lanceolate', 'linear']
Mimosa_osmarii.leaf.bipinnate.pinnae.paraphillidia.position = [
    'closer to the first pair of leaflets', 
    'on the middle of the axis, between the pulvinus and the first pair of leaflets'
]
Mimosa_osmarii.leaf.bipinnate.pinnae.paraphillidia.distanceFromPinnaPulvinus = new DistanceFromPinnaPulvinus()
Mimosa_osmarii.leaf.bipinnate.pinnae.paraphillidia.distanceFromPinnaPulvinus.setLengthMinMax(1, 5.5)
Mimosa_osmarii.leaf.bipinnate.pinnae.paraphillidia.distanceFromFirstPairOfLeaflets = new DistanceFromFirstPairOfLeaflets()
Mimosa_osmarii.leaf.bipinnate.pinnae.paraphillidia.distanceFromFirstPairOfLeaflets.setLengthMinMax(1.1, 3)
Mimosa_osmarii.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1)
Mimosa_osmarii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_osmarii.leaf.bipinnate.pinnae.prickles = new Prickles()
Mimosa_osmarii.leaf.bipinnate.pinnae.prickles.orientation = 'decurved'
Mimosa_osmarii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_osmarii.leaf.bipinnate.pinnae.rachilla.prickles = new Prickles()
Mimosa_osmarii.leaf.bipinnate.pinnae.rachilla.prickles.are = 'present'
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(2, 3)
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.innermostOfProximalPairReduced = 'yes'
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.setHeightMinMax(2, 7.5)
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.setWidthMinMax(1.3, 4.1)
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.shape = 'obovate'
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.base = ['oblique-acute', 'oblique-rounded', 'oblique-subcordate']
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.apex = ['obtuse-mucronulate', 'rounded-mucronulate']
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.margin.trichomes = new Trichomes()
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.margin.trichomes.are = 'absent'
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.adaxial.trichomes = new Trichomes()
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.adaxial.trichomes.filiform = new Filiform()
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.adaxial.trichomes.filiform.are = 'present'
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.adaxial.trichomes.granular = new Granular()
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.adaxial.trichomes.granular.are = 'present or absent'
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.granular = new Granular()
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.granular.are = 'present or absent'

Mimosa_osmarii.inflorescence = new Inflorescence()
Mimosa_osmarii.inflorescence.shape = 'moriform'
Mimosa_osmarii.inflorescence.capitate = new CapitateInflorescence()
Mimosa_osmarii.inflorescence.capitate.shape = 'globose'
Mimosa_osmarii.inflorescence.capitate.setLengthMinMax(2.5, 6)
Mimosa_osmarii.inflorescence.capitate.numberPerNode = [1, 2, 3]
Mimosa_osmarii.inflorescence.peduncle = new Peduncle()
Mimosa_osmarii.inflorescence.peduncle.setLengthMinMax(18, 40)

Mimosa_osmarii.flower = new Flower()
Mimosa_osmarii.flower.bracteole = new Bracteole()
Mimosa_osmarii.flower.bracteole.setLengthMinMax(0.4, 0.9)
Mimosa_osmarii.flower.bracteole.shape = 'lanceolate'
Mimosa_osmarii.flower.bracteole.trichomes = new Trichomes()
Mimosa_osmarii.flower.bracteole.trichomes.granular = new Granular()
Mimosa_osmarii.flower.bracteole.trichomes.granular.are = 'present or absent'
Mimosa_osmarii.flower.merism = '4-merous'
Mimosa_osmarii.flower.merismRarely = '5-merous'
Mimosa_osmarii.flower.calyx = new Calyx()
Mimosa_osmarii.flower.calyx.setLengthMinMax(0.4, 0.6)
Mimosa_osmarii.flower.calyx.shape = 'campanulate'
Mimosa_osmarii.flower.calyx.apex = 'shortly denticulate'
Mimosa_osmarii.flower.corolla = new Corolla()
Mimosa_osmarii.flower.corolla.setLengthMinMax(2, 2.5)
Mimosa_osmarii.flower.corolla.shape = ['campanulate', 'turbinate']
Mimosa_osmarii.flower.corolla.lobes = new Lobes()
Mimosa_osmarii.flower.corolla.lobes.nervation = '1-nerved'
Mimosa_osmarii.androecium = new Androecium()
Mimosa_osmarii.androecium.filaments = new Filaments()
Mimosa_osmarii.androecium.filaments.setLengthMinMax(6, 6.5)
Mimosa_osmarii.androecium.filaments.base = new baseFilaments()
Mimosa_osmarii.androecium.filaments.base.connation = new ConnationOfFilamentsAtBase()
Mimosa_osmarii.androecium.filaments.base.connation.setLengthMinMax(0.2, 0.5)
Mimosa_osmarii.androecium.filaments.colour = 'pinkish'
Mimosa_osmarii.ginoecium = new Ginoecium()
Mimosa_osmarii.ginoecium.ovary = new Ovary()
Mimosa_osmarii.ginoecium.ovary.trichomes = new Trichomes()
Mimosa_osmarii.ginoecium.ovary.trichomes.are = 'absent'

Mimosa_osmarii.fruit = new Fruit()
Mimosa_osmarii.fruit.type = 'craspedium'
Mimosa_osmarii.fruit.setHeightMinMax(34, 38)
Mimosa_osmarii.fruit.setWidthMinMax(3.3, 3.5)
Mimosa_osmarii.fruit.shape = 'oblong'
Mimosa_osmarii.fruit.curvature = 'slightly curved'
Mimosa_osmarii.fruit.stipe = new Stipe()
Mimosa_osmarii.fruit.stipe.is = 'present'
Mimosa_osmarii.fruit.stipe.setLengthMinMax(3, 5)
Mimosa_osmarii.fruit.replum = new Replum()
Mimosa_osmarii.fruit.replum.shape = 'undulate'
Mimosa_osmarii.fruit.epicarp = new Epicarp()
Mimosa_osmarii.fruit.epicarp.type = 'monospermic'
Mimosa_osmarii.fruit.epicarp.trichomes = new Trichomes()
Mimosa_osmarii.fruit.epicarp.trichomes.granular = new Granular()
Mimosa_osmarii.fruit.epicarp.trichomes.granular.are = 'present'
Mimosa_osmarii.fruit.setNumberOfSeedsMinMax(6, 9)


// Description authorship
Mimosa_osmarii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_osmarii.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})

// Sources
const source1 = new Source()
source1.obraPrinceps = 'yes'
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A. & Simon, M.F.'
source1.year = 2017
source1.title = 'A new species of *Mimosa* (Leguminosae) endemic to the Brazilian Cerrado'
source1.journal = 'Phytotaxa'
source1.volume = 312
source1.number = 2
source1.pages = 237-246
Mimosa_osmarii.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A. & Simon, M.F.'
source2.year = 2017
source2.title = 'A new species of *Mimosa* (Leguminosae) endemic to the Brazilian Cerrado'
source2.journal = 'Phytotaxa'
source2.volume = 312
source2.number = 2
source2.pages = 237-246
source2.figure = '3A,B,C,D'
source2.obtainingMethod = 'photo'
Mimosa_osmarii.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A. & Simon, M.F.'
source3.year = 2017
source3.title = 'A new species of *Mimosa* (Leguminosae) endemic to the Brazilian Cerrado'
source3.journal = 'Phytotaxa'
source3.volume = 312
source3.number = 2
source3.pages = 237-246
source3.figure = '4'
source3.obtainingMethod = 'drawing'
Mimosa_osmarii.addSource(source3)

// Export Mimosa osmarii
export { Mimosa_osmarii }