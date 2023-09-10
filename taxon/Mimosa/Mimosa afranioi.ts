// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Stems, Trichomes, Prickles, Stipule, Leaf, Flower, Fruit, Inflorescence, Androecium } from '../../characters/v1'
import { Filiform, Granular } from '../../characters/v1/Trichomes'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Pinnae, Rachis } from '../../characters/v1/Leaf/Bipinnate'
import { Rachilla, Paraphillidia, Leaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { DistanceFromFirstPairOfLeaflets } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Paraphillidia'
import { AbaxialLeaflet, AdaxialLeaflet, MarginLeaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { Bracteole, Calyx, Corolla } from '../../characters/v1/Flower'
import { Replum, Epicarp, Stipe } from '../../characters/v1/Fruit'
import { CapitateInflorescence, Peduncle } from '../../characters/v1/Inflorescence'
import { ApexBracteole } from '../../characters/v1/Flower/Bracteole'
import { Lobes } from '../../characters/v1/Flower/Corolla'
import { ApexLobes } from '../../characters/v1/Flower/Corolla/Lobes'
import { Filaments } from '../../characters/v1/Androecium'
import { baseFilaments } from '../../characters/v1/Androecium/Filaments'
import { ConnationOfFilamentsAtBase } from '../../characters/v1/Androecium/Filaments/baseFilaments'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa afranioi
const Mimosa_afranioi = new Mimosa()
Mimosa_afranioi.specificEpithet = 'afranioi'

Mimosa_afranioi.habit = ['herb', 'subshrub']

Mimosa_afranioi.stems = new Stems()
Mimosa_afranioi.stems.length = 2
Mimosa_afranioi.stems.orientation = ['procumbent', 'scandent']
Mimosa_afranioi.stems.shape = '5-gonal'
Mimosa_afranioi.stems.prickles = new Prickles()
Mimosa_afranioi.stems.prickles.are = 'present'
Mimosa_afranioi.stems.prickles.setLengthMinMax(0.4, 2.1)
Mimosa_afranioi.stems.prickles.orientation = 'decurved'
Mimosa_afranioi.stems.prickles.persistance = 'caducous'
Mimosa_afranioi.stems.trichomes = new Trichomes()
Mimosa_afranioi.stems.trichomes.filiform = new Filiform()
Mimosa_afranioi.stems.trichomes.filiform.are = 'present'
Mimosa_afranioi.stems.trichomes.granular = new Granular()
Mimosa_afranioi.stems.trichomes.granular.are = 'present'

Mimosa_afranioi.stipule = new Stipule()
Mimosa_afranioi.stipule.shape = 'lanceolate'
Mimosa_afranioi.stipule.setLengthMinMax(2.1, 5.5)
Mimosa_afranioi.stipule.nervation = '1-nerved'
Mimosa_afranioi.stipule.persistance = 'persistent'
Mimosa_afranioi.stipule.abaxial = new AbaxialStipule()
Mimosa_afranioi.stipule.abaxial.trichomes = new Trichomes()
Mimosa_afranioi.stipule.abaxial.trichomes.filiform = new Filiform()
Mimosa_afranioi.stipule.abaxial.trichomes.filiform.are = 'present'
Mimosa_afranioi.stipule.abaxial.trichomes.granular = new Granular()
Mimosa_afranioi.stipule.abaxial.trichomes.granular.are = 'present'
Mimosa_afranioi.stipule.margin = new MarginStipule()
Mimosa_afranioi.stipule.margin.trichomes = new Trichomes()
Mimosa_afranioi.stipule.margin.trichomes.filiform = new Filiform()
Mimosa_afranioi.stipule.margin.trichomes.filiform.are = 'present'
Mimosa_afranioi.stipule.margin.trichomes.granular = new Granular()
Mimosa_afranioi.stipule.margin.trichomes.granular.are = 'present'

Mimosa_afranioi.leaf = new Leaf()
Mimosa_afranioi.leaf.phyllotaxis = 'distichous'
Mimosa_afranioi.leaf.petiole = new Petiole()
Mimosa_afranioi.leaf.petiole.setLengthMinMax(6, 37)
Mimosa_afranioi.leaf.petiole.flattening = ['slightly dorsiventrally flattened', 'not dorsiventrally flattened']
Mimosa_afranioi.leaf.petiole.persistance = 'caducous'
Mimosa_afranioi.leaf.petiole.prickles = new Prickles()
Mimosa_afranioi.leaf.petiole.prickles.are = 'present'
Mimosa_afranioi.leaf.bipinnate = new Bipinnate()
Mimosa_afranioi.leaf.bipinnate.rachis = new Rachis()
Mimosa_afranioi.leaf.bipinnate.rachis.setLengthMinMax(7, 40)
Mimosa_afranioi.leaf.bipinnate.rachis.trichomes = new Trichomes()
Mimosa_afranioi.leaf.bipinnate.rachis.trichomes.are = 'present or absent'
Mimosa_afranioi.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_afranioi.leaf.bipinnate.rachis.spicule.are = 'present or absent'
Mimosa_afranioi.leaf.bipinnate.rachis.spicule.setLength(0.1)
Mimosa_afranioi.leaf.bipinnate.rachis.spicule.shape = 'deltate'
Mimosa_afranioi.leaf.bipinnate.rachis.trichomes = new Trichomes()
Mimosa_afranioi.leaf.bipinnate.rachis.trichomes.filiform = new Filiform()
Mimosa_afranioi.leaf.bipinnate.rachis.trichomes.filiform.are = 'present or absent'
Mimosa_afranioi.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_afranioi.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(2)
Mimosa_afranioi.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 4)
Mimosa_afranioi.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_afranioi.leaf.bipinnate.pinnae.rachilla.setLength(14)
Mimosa_afranioi.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_afranioi.leaf.bipinnate.pinnae.paraphillidia.setLengthMinMax(0.2, 0.5)
Mimosa_afranioi.leaf.bipinnate.pinnae.paraphillidia.shape = ['lanceolate', 'linear-subulate']
Mimosa_afranioi.leaf.bipinnate.pinnae.paraphillidia.distanceFromFirstPairOfLeaflets = new DistanceFromFirstPairOfLeaflets()
Mimosa_afranioi.leaf.bipinnate.pinnae.paraphillidia.distanceFromFirstPairOfLeaflets.setLengthMinMax(0.5, 3)
Mimosa_afranioi.leaf.bipinnate.pinnae.paraphillidia.trichomes = new Trichomes()
Mimosa_afranioi.leaf.bipinnate.pinnae.paraphillidia.trichomes.filiform = new Filiform()
Mimosa_afranioi.leaf.bipinnate.pinnae.paraphillidia.trichomes.filiform.are = 'present or absent'
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(4)
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(5, 8)
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.setHeightMinMax(2, 7)
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.setWidthMinMax(0.5, 2.5)
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.shape = ['oblong', 'oblanceolate']
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.base = ['oblique-rounded', 'oblique-subcordate']
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.apex = ['acute', 'rounded', 'rounded-mucronulate']
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform = new Filiform()
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.are = 'absent'
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.granular = new Granular()
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.granular.are = 'present'
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.adaxial.trichomes = new Trichomes()
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.adaxial.trichomes.filiform = new Filiform()
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.adaxial.trichomes.filiform.are = 'absent'
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.margin.trichomes = new Trichomes()
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform = new Filiform()
Mimosa_afranioi.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform.are = 'absent'

Mimosa_afranioi.inflorescence = new Inflorescence()
Mimosa_afranioi.inflorescence.capitate = new CapitateInflorescence()
Mimosa_afranioi.inflorescence.capitate.setLengthMinMax(3.5, 6)
Mimosa_afranioi.inflorescence.capitate.shape = 'globose'
Mimosa_afranioi.inflorescence.shape = 'moriform'
Mimosa_afranioi.inflorescence.peduncle = new Peduncle()
Mimosa_afranioi.inflorescence.peduncle.setLengthMinMax(10, 22)

Mimosa_afranioi.flower = new Flower()
Mimosa_afranioi.flower.bracteole = new Bracteole()
Mimosa_afranioi.flower.bracteole.setLengthMinMax(0.5, 1.1)
Mimosa_afranioi.flower.bracteole.shape = 'spatulate'
Mimosa_afranioi.flower.bracteole.apex = new ApexBracteole()
Mimosa_afranioi.flower.bracteole.apex.trichomes = new Trichomes()
Mimosa_afranioi.flower.bracteole.apex.trichomes.filiform = new Filiform()
Mimosa_afranioi.flower.bracteole.apex.trichomes.filiform.are = 'present or absent'
Mimosa_afranioi.flower.merism = '3-merous'
Mimosa_afranioi.flower.calyx = new Calyx()
Mimosa_afranioi.flower.calyx.numSepals = 3
Mimosa_afranioi.flower.calyx.setLengthMinMax(0.3, 0.6)
Mimosa_afranioi.flower.calyx.shape = 'campanulate'
Mimosa_afranioi.flower.corolla = new Corolla()
Mimosa_afranioi.flower.corolla.numPepals = 3
Mimosa_afranioi.flower.corolla.setLengthMinMax(1.4, 2.5)
Mimosa_afranioi.flower.corolla.shape = 'campanulate'
Mimosa_afranioi.flower.corolla.lobes = new Lobes()
Mimosa_afranioi.flower.corolla.lobes.apex = new ApexLobes()
Mimosa_afranioi.flower.corolla.lobes.apex.trichomes = new Trichomes()
Mimosa_afranioi.flower.corolla.lobes.apex.trichomes.filiform = new Filiform()
Mimosa_afranioi.flower.corolla.lobes.apex.trichomes.filiform.are = 'present or absent'
Mimosa_afranioi.androecium = new Androecium()
Mimosa_afranioi.androecium.filaments = new Filaments()
Mimosa_afranioi.androecium.filaments.setLengthMinMax(5, 7)
Mimosa_afranioi.androecium.filaments.colour = 'pinkish'
Mimosa_afranioi.androecium.filaments.base = new baseFilaments()
Mimosa_afranioi.androecium.filaments.base.connation = new ConnationOfFilamentsAtBase()
Mimosa_afranioi.androecium.filaments.base.connation.setLengthMinMax(0.3, 0.4)

Mimosa_afranioi.fruit = new Fruit()
Mimosa_afranioi.fruit.type = 'craspedium'
Mimosa_afranioi.fruit.setHeightMinMax(27, 61)
Mimosa_afranioi.fruit.setWidthMinMax(3.5, 8.5)
Mimosa_afranioi.fruit.stipe = new Stipe()
Mimosa_afranioi.fruit.stipe.setLengthMinMax(2, 5)
Mimosa_afranioi.fruit.shape = 'oblong'
Mimosa_afranioi.fruit.replum = new Replum()
Mimosa_afranioi.fruit.replum.shape = ['undulate', 'slightly undulate']
Mimosa_afranioi.fruit.replum.prickles = new Prickles()
Mimosa_afranioi.fruit.replum.prickles.are = 'present or absent'
Mimosa_afranioi.fruit.replum.prickles.orientation = ['straight', 'decurved']
Mimosa_afranioi.fruit.replum.prickles.setLengthMinMax(0.3, 0.5)
Mimosa_afranioi.fruit.replum.prickles.frequency = 'sparsely armed'
Mimosa_afranioi.fruit.replum.trichomes = new Trichomes()
Mimosa_afranioi.fruit.replum.trichomes.filiform = new Filiform()
Mimosa_afranioi.fruit.replum.trichomes.filiform.are = 'present or absent'
Mimosa_afranioi.fruit.replum.trichomes.granular = new Granular()
Mimosa_afranioi.fruit.replum.trichomes.granular.are = 'present or absent'
Mimosa_afranioi.fruit.epicarp = new Epicarp()
Mimosa_afranioi.fruit.epicarp.prickles = new Prickles()
Mimosa_afranioi.fruit.epicarp.prickles.are = 'present or absent'
Mimosa_afranioi.fruit.epicarp.prickles.orientation = 'straight'
Mimosa_afranioi.fruit.epicarp.trichomes = new Trichomes()
Mimosa_afranioi.fruit.epicarp.trichomes.filiform = new Filiform()
Mimosa_afranioi.fruit.epicarp.trichomes.filiform.are = 'present or absent'
Mimosa_afranioi.fruit.epicarp.trichomes.granular = new Granular()
Mimosa_afranioi.fruit.epicarp.trichomes.granular.are = 'present or absent'


// Description authorship
Mimosa_afranioi.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_afranioi.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})

// Export Mimosa afranioi
export { Mimosa_afranioi }