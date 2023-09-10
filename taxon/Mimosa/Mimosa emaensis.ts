// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Stems, Trichomes, Prickles, Leaf, Flower, Fruit, Stipule, Inflorescence } from '../../characters/v1'
import { Filiform, Granular, Setiform } from '../../characters/v1/Trichomes'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Pinnae, Rachis } from '../../characters/v1/Leaf/Bipinnate'
import { Rachilla, Paraphillidia, Leaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { Calyx, Corolla } from '../../characters/v1/Flower'
import { Replum, Epicarp, Stipe } from '../../characters/v1/Fruit'

// Import anotations classes
import { Source, DescriptionAuthorship } from '../../characters/v1'
import { AbaxialLeaflet, AdaxialLeaflet, MarginLeaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'

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
// add Mimosa_emaensis.stipule.setLenghtRarelyMin = 1.5
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
// add Mimosa_emaensis.leaf.bipinnate.pinnae.rachilla.setLengthRarelyMax(0.5)
Mimosa_emaensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_emaensis.leaf.bipinnate.pinnae.paraphillidia.setLengthMinMax(0.3, 0.6)
Mimosa_emaensis.leaf.bipinnate.pinnae.paraphillidia.shape = ['lanceolate', 'linear-subulate']
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
Mimosa_emaensis.inflorescence

// Description authorship
Mimosa_emaensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_emaensis.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})

// Sources
const source1 = new Source()
source1.sourceType = 'article'
source1.obraPrinceps = 'yes'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Simon, M.F. & Baumgratz, J.F.A.'
source1.year = 2021
source1.title = 'New Species of *Mimosa* (Leguminosae) from Brazil'
Mimosa_emaensis.addSource(source1)

// Export Mimosa emaensis
export { Mimosa_emaensis }