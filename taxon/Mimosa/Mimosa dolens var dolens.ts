// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Stems, Stipule, Leaf, Inflorescence, Flower, Androecium, Ginoecium, Fruit, Seed } from '../../characters/v1'
import { Filiform, Porrect, Capitate } from '../../characters/v1/Trichomes'
import { CapitateSetiform } from '../../characters/v1/Trichomes/Capitate'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'
import { AbaxialStipule, AdaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Pinnae, Rachis } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Leaflet, Paraphillidia, Rachilla } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { AbaxialLeaflet, AdaxialLeaflet, MarginLeaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { CapitateInflorescence, Peduncle } from '../../characters/v1/Inflorescence'
import { FlowFlags } from 'typescript'
import { Bracteole, Calyx, Corolla } from '../../characters/v1/Flower'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Epicarp, Replum, Stipe } from '../../characters/v1/Fruit'
import { setDefaultHighWaterMark } from 'stream'

// Description of Mimosa dolens var. dolens
const Mimosa_dolens_var_dolens = new Mimosa()
Mimosa_dolens_var_dolens.specificEpithet = 'dolens var. dolens'

Mimosa_dolens_var_dolens.stems = new Stems()
Mimosa_dolens_var_dolens.stems.trichomes = new Trichomes()
Mimosa_dolens_var_dolens.stems.trichomes.filiform = new Filiform()
Mimosa_dolens_var_dolens.stems.trichomes.filiform.are = 'present'
Mimosa_dolens_var_dolens.stems.trichomes.porrect = new Porrect()
Mimosa_dolens_var_dolens.stems.trichomes.porrect.are = 'present or absent'
Mimosa_dolens_var_dolens.stems.trichomes.capitate = new Capitate()
Mimosa_dolens_var_dolens.stems.trichomes.capitate.setiform = new CapitateSetiform()
Mimosa_dolens_var_dolens.stems.trichomes.capitate.setiform.are = 'present'

Mimosa_dolens_var_dolens.stipule = new Stipule()
Mimosa_dolens_var_dolens.stipule.margin = new MarginStipule()
Mimosa_dolens_var_dolens.stipule.adaxial = new AdaxialStipule()
Mimosa_dolens_var_dolens.stipule.abaxial = new AbaxialStipule()

Mimosa_dolens_var_dolens.leaf = new Leaf()
Mimosa_dolens_var_dolens.leaf.petiole = new Petiole()
Mimosa_dolens_var_dolens.leaf.bipinnate = new Bipinnate()
Mimosa_dolens_var_dolens.leaf.bipinnate.rachis = new Rachis()
Mimosa_dolens_var_dolens.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_dolens_var_dolens.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_dolens_var_dolens.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_dolens_var_dolens.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_dolens_var_dolens.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_dolens_var_dolens.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_dolens_var_dolens.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 14)
Mimosa_dolens_var_dolens.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_dolens_var_dolens.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_dolens_var_dolens.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_dolens_var_dolens.inflorescence = new Inflorescence()
Mimosa_dolens_var_dolens.inflorescence.peduncle = new Peduncle()
Mimosa_dolens_var_dolens.inflorescence.capitate = new CapitateInflorescence()

Mimosa_dolens_var_dolens.flower = new Flower()
Mimosa_dolens_var_dolens.flower.bracteole = new Bracteole()
Mimosa_dolens_var_dolens.flower.merism = '4-merous'
Mimosa_dolens_var_dolens.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_dolens_var_dolens.flower.calyx = new Calyx()
Mimosa_dolens_var_dolens.flower.calyx.shape = 'pappiform'
Mimosa_dolens_var_dolens.flower.corolla = new Corolla()
Mimosa_dolens_var_dolens.flower.corolla.shape = ['tubulose', 'campanulate']

Mimosa_dolens_var_dolens.androecium = new Androecium()
Mimosa_dolens_var_dolens.androecium.filaments = new Filaments()
Mimosa_dolens_var_dolens.androecium.filaments.colour = 'pinkish'

Mimosa_dolens_var_dolens.ginoecium = new Ginoecium()
Mimosa_dolens_var_dolens.ginoecium.ovary = new Ovary()

Mimosa_dolens_var_dolens.fruit = new Fruit()
Mimosa_dolens_var_dolens.fruit.stipe = new Stipe()
Mimosa_dolens_var_dolens.fruit.replum = new Replum()
Mimosa_dolens_var_dolens.fruit.epicarp = new Epicarp()

Mimosa_dolens_var_dolens.seed = new Seed()


// Description authorship
Mimosa_dolens_var_dolens.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_dolens_var_dolens.descriptionAuthorship.addAuthor({
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
Mimosa_dolens_var_dolens.addSource(source0)

/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = 2020
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source1.journal = 'Flora'
source1.number = 272
source1.pages = 151702
source1.figure = '1A'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_dolens_var_dolens.stems.trichomes.filiform.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '6G'
source2.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_dolens_var_dolens.stems.trichomes.porrect.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = 2020
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source3.journal = 'Flora'
source3.number = 272
source3.pages = 151702
source3.figure = '9A'
source3.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_dolens_var_dolens.stems.trichomes.capitate.setiform.addSource(source3)
Mimosa_dolens_var_dolens.stems.trichomes.filiform.addSource(source3)

const source4 = new Source()
source4.sourceType = 'article'
source4.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source4.year = 2020
source4.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source4.journal = 'Flora'
source4.number = 272
source4.pages = 151702
source4.figure = '9B'
source4.obtainingMethod = 'opticalMicroscope'
Mimosa_dolens_var_dolens.stems.trichomes.capitate.setiform.addSource(source4)

// Export Mimosa dolens var. dolens
export { Mimosa_dolens_var_dolens }