// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes, 
    Prickles, 
    Leaf, 
    Flower, 
    Fruit, 
    Stipule, 
    Inflorescence, 
    Androecium, 
    Seed } from '../../characters/v1'
import { Filiform, Granular, Setiform } from '../../characters/v1/Trichomes'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Pinnae, Rachis } from '../../characters/v1/Leaf/Bipinnate'
import { Rachilla, Paraphillidia, Leaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { AbaxialLeaflet, AdaxialLeaflet, MarginLeaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { CapitateInflorescence, Peduncle } from '../../characters/v1/Inflorescence'
import { Bracteole, Calyx, Corolla } from '../../characters/v1/Flower'
import { Filaments } from '../../characters/v1/Androecium'
import { baseFilaments } from '../../characters/v1/Androecium/Filaments'
import { ConnationOfFilamentsAtBase } from '../../characters/v1/Androecium/Filaments/baseFilaments'
import { Replum, Epicarp, Stipe } from '../../characters/v1/Fruit'

// Import anotations classes
import { Source, DescriptionAuthorship } from '../../characters/v1'
import { DistanceFromFirstPairOfLeaflets } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Paraphillidia'

// Description of Mimosa emaensis
const Mimosa_emaensis = new Mimosa()
Mimosa_emaensis.specificEpithet = 'emaensis'

Mimosa_emaensis.habit = ['herb', 'subshrub']
Mimosa_emaensis.height = 0.5

Mimosa_emaensis.prickles = new Prickles()
Mimosa_emaensis.prickles.are = 'absent'

Mimosa_emaensis.trichomes = new Trichomes()
Mimosa_emaensis.trichomes.filiform = new Filiform()
Mimosa_emaensis.trichomes.filiform.are = 'absent'
Mimosa_emaensis.trichomes.setiform = new Setiform()
Mimosa_emaensis.trichomes.setiform.are = 'absent'

Mimosa_emaensis.stems = new Stems()
Mimosa_emaensis.stems.shape = 'cylindric'

Mimosa_emaensis.stipule = new Stipule()
Mimosa_emaensis.stipule.setLengthRarelyMin(1.5)
Mimosa_emaensis.stipule.setLengthMinMax(3.5, 9)
Mimosa_emaensis.stipule.shape = ['linear-subulate', 'lanceolate']
Mimosa_emaensis.stipule.nervation = '1-nerved'
Mimosa_emaensis.stipule.persistance = 'persistent'

Mimosa_emaensis.leaf = new Leaf()
Mimosa_emaensis.leaf.petiole = new Petiole()
Mimosa_emaensis.leaf.petiole.setLengthMinMax(14, 35)
Mimosa_emaensis.leaf.petiole.transversalShape = '5-ribbed'
Mimosa_emaensis.leaf.petiole.flattening = 'slightly dorsiventrally flattened'
Mimosa_emaensis.leaf.petiole.persistance = 'persistent'
Mimosa_emaensis.leaf.bipinnate = new Bipinnate()
Mimosa_emaensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_emaensis.leaf.bipinnate.rachis.setLengthMinMax(22, 40)
Mimosa_emaensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_emaensis.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(5)
Mimosa_emaensis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(6, 8)
Mimosa_emaensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_emaensis.leaf.bipinnate.pinnae.rachilla.setLengthMinMax(0.2, 0.3)
Mimosa_emaensis.leaf.bipinnate.pinnae.rachilla.setLengthRarelyMax(0.5)
Mimosa_emaensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_emaensis.leaf.bipinnate.pinnae.paraphillidia.setLengthMinMax(0.3, 0.6)
Mimosa_emaensis.leaf.bipinnate.pinnae.paraphillidia.shape = ['lanceolate', 'linear-subulate']
Mimosa_emaensis.leaf.bipinnate.pinnae.paraphillidia.distanceFromFirstPairOfLeaflets = new DistanceFromFirstPairOfLeaflets()
Mimosa_emaensis.leaf.bipinnate.pinnae.paraphillidia.distanceFromFirstPairOfLeaflets.setLengthMinMax(0.5, 1.8)
Mimosa_emaensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_emaensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(2)
Mimosa_emaensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(3)
Mimosa_emaensis.leaf.bipinnate.pinnae.leaflet.setHeightMinMax(0.9, 1.8)
Mimosa_emaensis.leaf.bipinnate.pinnae.leaflet.setWidthMinMax(0.3, 1)
Mimosa_emaensis.leaf.bipinnate.pinnae.leaflet.shape = 'obovate'
Mimosa_emaensis.leaf.bipinnate.pinnae.leaflet.base = ['oblique-acute', 'oblique-subcordate']
Mimosa_emaensis.leaf.bipinnate.pinnae.leaflet.apex = ['obtuse', 'obtuse-mucronulate', 'rounded', 'rounded-mucronulate']
Mimosa_emaensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_emaensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_emaensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_emaensis.inflorescence = new Inflorescence()
Mimosa_emaensis.inflorescence.shape = 'moriform'
Mimosa_emaensis.inflorescence.peduncle = new Peduncle()
Mimosa_emaensis.inflorescence.peduncle.setLengthMinMax(47, 65)
Mimosa_emaensis.inflorescence.capitate = new CapitateInflorescence()
Mimosa_emaensis.inflorescence.capitate.setLengthMinMax(3.5, 5)
Mimosa_emaensis.inflorescence.capitate.shape = 'globose'

Mimosa_emaensis.flower = new Flower()
Mimosa_emaensis.flower.bracteole = new Bracteole()
Mimosa_emaensis.flower.bracteole.setLengthMinMax(0.9, 1.1)
Mimosa_emaensis.flower.bracteole.shape = ['linear', 'lanceolate', 'spatulate']
Mimosa_emaensis.flower.bracteole.trichomes = new Trichomes()
Mimosa_emaensis.flower.bracteole.trichomes.granular = new Granular()
Mimosa_emaensis.flower.bracteole.trichomes.granular.are = 'present or absent'
Mimosa_emaensis.flower.merism = '4-merous'
Mimosa_emaensis.flower.calyx = new Calyx()
Mimosa_emaensis.flower.calyx.setLengthMinMax(0.4, 0.5)
Mimosa_emaensis.flower.calyx.shape = 'campanulate'
Mimosa_emaensis.flower.calyx.apex = 'denticulate'
Mimosa_emaensis.flower.calyx.trichomes = new Trichomes()
Mimosa_emaensis.flower.calyx.trichomes.granular = new Granular()
Mimosa_emaensis.flower.calyx.trichomes.granular.are = 'present or absent'
Mimosa_emaensis.flower.corolla = new Corolla()
Mimosa_emaensis.flower.corolla.setLengthMinMax(2, 2.5)
Mimosa_emaensis.flower.corolla.shape = 'turbinate'
Mimosa_emaensis.flower.corolla.trichomes = new Trichomes()
Mimosa_emaensis.flower.corolla.trichomes.granular = new Granular()
Mimosa_emaensis.flower.corolla.trichomes.granular.are = 'present or absent'

Mimosa_emaensis.androecium = new Androecium()
Mimosa_emaensis.androecium.filaments = new Filaments()
Mimosa_emaensis.androecium.filaments.setLengthMinMax(4, 5)
Mimosa_emaensis.androecium.filaments.colour = 'pinkish'
Mimosa_emaensis.androecium.filaments.base = new baseFilaments()
Mimosa_emaensis.androecium.filaments.base.connation = new ConnationOfFilamentsAtBase()
Mimosa_emaensis.androecium.filaments.base.connation.setLength(0.2)

Mimosa_emaensis.fruit = new Fruit()
Mimosa_emaensis.fruit.setHeightMinMax(21, 65)
Mimosa_emaensis.fruit.setWidthMinMax(6.5, 7.5)
Mimosa_emaensis.fruit.stipe = new Stipe()
Mimosa_emaensis.fruit.stipe.is = 'present or absent'
Mimosa_emaensis.fruit.stipe.setLength(2)
Mimosa_emaensis.fruit.shape = 'oblong'
Mimosa_emaensis.fruit.curvature = 'straight'
Mimosa_emaensis.fruit.replum = new Replum()
Mimosa_emaensis.fruit.replum.shape = 'undulate'
Mimosa_emaensis.fruit.replum.trichomes = new Trichomes()
Mimosa_emaensis.fruit.replum.trichomes.granular = new Granular()
Mimosa_emaensis.fruit.replum.trichomes.granular.are = 'present'
Mimosa_emaensis.fruit.epicarp = new Epicarp()
Mimosa_emaensis.fruit.epicarp.trichomes = new Trichomes()
Mimosa_emaensis.fruit.epicarp.trichomes.granular = new Granular()
Mimosa_emaensis.fruit.epicarp.trichomes.granular.are = 'present'
Mimosa_emaensis.fruit.setNumberOfSeedsRarelyMin(2)
Mimosa_emaensis.fruit.setNumberOfSeedsMinMax(3, 8)

Mimosa_emaensis.seed = new Seed()
Mimosa_emaensis.seed.setHeightMinMax(4, 4.5)
Mimosa_emaensis.seed.setWidthMinMax (3.2, 3.3)
Mimosa_emaensis.seed.shape = 'obovate'
Mimosa_emaensis.seed.pleurogram = 'apical-basal'

// Description authorship
Mimosa_emaensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_emaensis.descriptionAuthorship.addAuthor({
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
Mimosa_emaensis.addSource(source1)

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
source2.figure = '4'
source2.obtainingMethod = 'drawing'
Mimosa_emaensis.addSource(source2)

const source3 = new Source()
source3.obraPrinceps = 'yes'
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. and Morim, M.P. and Simon, M.F., Dutra, V.F. and Baumgratz, J.F.A.'
source3.year = 2021
source3.title = 'New Species of *Mimosa* (Leguminosae) from Brazil'
source3.journal = 'Systematic Botany'
source3.volume = 46
source3.number = 2
source3.pages = 339-351
source3.figure = '5'
source3.obtainingMethod = 'photo'
Mimosa_emaensis.addSource(source3)

// Export Mimosa emaensis
export { Mimosa_emaensis }