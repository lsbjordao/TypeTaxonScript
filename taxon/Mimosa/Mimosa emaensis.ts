// Import genus Mimosa
import { Mimosa } from '../Mimosa'

// Import characters
import { Stems, Trichomes, Prickles, Leaf, Flower, Fruit } from '../../characters/v1'
import { Filiform, Granular, Setiform } from '../../characters/v1/Trichomes'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Pinnae, Rachis } from '../../characters/v1/Leaf/Bipinnate'
import { Rachilla, Paraphillidia, Leaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { Calyx, Corolla } from '../../characters/v1/Flower'
import { Replum, Epicarp } from '../../characters/v1/Fruit'

// Import anotations classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa emaensis
const Mimosa_emaensis = new Mimosa()
Mimosa_emaensis.specificEpithet = 'emaensis'

Mimosa_emaensis.habit = 'subshrub'

Mimosa_emaensis.prickles = new Prickles()
Mimosa_emaensis.prickles.are = 'absent'

Mimosa_emaensis.trichomes = new Trichomes()
Mimosa_emaensis.trichomes.filiform = new Filiform()
Mimosa_emaensis.trichomes.filiform.are = 'absent'
Mimosa_emaensis.trichomes.setiform = new Setiform()
Mimosa_emaensis.trichomes.setiform.are = 'absent'

Mimosa_emaensis.leaf = new Leaf()
Mimosa_emaensis.leaf.petiole = new Petiole()
Mimosa_emaensis.leaf.petiole.present = true
Mimosa_emaensis.leaf.petiole.setLength(3)
Mimosa_emaensis.leaf.bipinnate = new Bipinnate()
Mimosa_emaensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_emaensis.leaf.bipinnate.pinnae.paraphillidia.present = false
Mimosa_emaensis.leaf.bipinnate.pinnae.paraphillidia.setLength(null)

Mimosa_emaensis.flower = new Flower()
Mimosa_emaensis.flower.calyx = new Calyx()
Mimosa_emaensis.flower.calyx.numSepals = 4
Mimosa_emaensis.flower.calyx.setLength(1)
Mimosa_emaensis.flower.calyx.shape = 'campanulate'
Mimosa_emaensis.flower.corolla = new Corolla()
Mimosa_emaensis.flower.corolla.numPepals = 4
Mimosa_emaensis.flower.corolla.setLengthMinMax(2, 3)
Mimosa_emaensis.flower.corolla.shape = 'campanulate'

Mimosa_emaensis.fruit = new Fruit()
Mimosa_emaensis.fruit.replum = new Replum()
Mimosa_emaensis.fruit.replum.shape = 'straight'
Mimosa_emaensis.fruit.epicarp = new Epicarp()
Mimosa_emaensis.fruit.epicarp.shape = 'straight'

// Description authorship
Mimosa_emaensis.DescriptionAuthorship = new DescriptionAuthorship()
Mimosa_emaensis.DescriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})

// Sources
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = 2021
source1.title = ''
Mimosa_emaensis.addSource(source1)

// Export Mimosa emaensis
export { Mimosa_emaensis }