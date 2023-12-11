// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Leaf, Stems, Stipule, Inflorescence, Flower, Androecium, Ginoecium, Seed } from '../../characters/v1'
import { Filiform } from '../../characters/v1/Trichomes'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Pinnae, Rachis } from '../../characters/v1/Leaf/Bipinnate'
import { Leaflet, Paraphillidia, Rachilla } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { AbaxialLeaflet, AdaxialLeaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'
import { Epicarp, Fruit, Replum, Stipe } from '../../characters/v1/Fruit'
import { AbaxialStipule, AdaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { CapitateInflorescence, Peduncle } from '../../characters/v1/Inflorescence'
import { Bracteole, Calyx, Corolla } from '../../characters/v1/Flower'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { setDefaultHighWaterMark } from 'stream'

// Description of Mimosa cubatanensis
const Mimosa_cubatanensis = new Mimosa()
Mimosa_cubatanensis.specificEpithet = 'cubatanensis'

Mimosa_cubatanensis.stems = new Stems()
Mimosa_cubatanensis.stems.trichomes = new Trichomes()
Mimosa_cubatanensis.stems.trichomes.filiform = new Filiform()
Mimosa_cubatanensis.stems.trichomes.filiform.are = 'present'

Mimosa_cubatanensis.stipule = new Stipule()
Mimosa_cubatanensis.stipule.margin = new MarginStipule()
Mimosa_cubatanensis.stipule.adaxial = new AdaxialStipule()
Mimosa_cubatanensis.stipule.abaxial = new AbaxialStipule()

Mimosa_cubatanensis.leaf = new Leaf()
Mimosa_cubatanensis.leaf.petiole = new Petiole()
Mimosa_cubatanensis.leaf.bipinnate = new Bipinnate()
Mimosa_cubatanensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_cubatanensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_cubatanensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_cubatanensis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 5)
Mimosa_cubatanensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_cubatanensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(8, 14)
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform = new Filiform()
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.are = 'present'
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.orientation = 'antrorse-appressed'

Mimosa_cubatanensis.inflorescence = new Inflorescence()
Mimosa_cubatanensis.inflorescence.peduncle = new Peduncle()
Mimosa_cubatanensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_cubatanensis.flower = new Flower()
Mimosa_cubatanensis.flower.bracteole = new Bracteole()
Mimosa_cubatanensis.flower.merism = '4-merous'
Mimosa_cubatanensis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_cubatanensis.flower.calyx = new Calyx()
Mimosa_cubatanensis.flower.calyx.shape = 'campanulate'
Mimosa_cubatanensis.flower.corolla = new Corolla()
Mimosa_cubatanensis.flower.corolla.shape = 'campanulate'

Mimosa_cubatanensis.androecium = new Androecium()
Mimosa_cubatanensis.androecium.filaments = new Filaments()
Mimosa_cubatanensis.androecium.filaments.colour = 'whitenish'

Mimosa_cubatanensis.ginoecium = new Ginoecium()
Mimosa_cubatanensis.ginoecium.ovary = new Ovary()

Mimosa_cubatanensis.fruit = new Fruit()
Mimosa_cubatanensis.fruit.stipe = new Stipe()
Mimosa_cubatanensis.fruit.replum = new Replum()
Mimosa_cubatanensis.fruit.epicarp = new Epicarp()

Mimosa_cubatanensis.seed = new Seed()


// Description authorship
Mimosa_cubatanensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_cubatanensis.descriptionAuthorship.addAuthor({
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
Mimosa_cubatanensis.addSource(source0)

/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = 2020
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source1.journal = 'Flora'
source1.number = 272
source1.pages = 151702
source1.figure = '1B'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '1H'
source2.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = 2020
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source3.journal = 'Flora'
source3.number = 272
source3.pages = 151702
source3.figure = '9P'
source3.obtainingMethod = 'stereoscope'
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.addSource(source3)

// Export Mimosa cubatanensis
export { Mimosa_cubatanensis }