// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Leaf, Stems, Stipule, Inflorescence, Flower, Androecium, Ginoecium, Fruit, Seed } from '../../characters/v1'
import { Filiform, Granular } from '../../characters/v1/Trichomes'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Pinnae, Rachis } from '../../characters/v1/Leaf/Bipinnate'
import { Leaflet, Rachilla } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { AbaxialLeaflet, MarginLeaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AbaxialStipule, AdaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { CapitateInflorescence, Peduncle } from '../../characters/v1/Inflorescence'
import { Bracteole, Calyx, Corolla } from '../../characters/v1/Flower'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Epicarp, Replum, Stipe } from '../../characters/v1/Fruit'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa bimucronata
const Mimosa_bimucronata = new Mimosa()
Mimosa_bimucronata.specificEpithet = 'bimucronata'

Mimosa_bimucronata.stems = new Stems()
Mimosa_bimucronata.stems.trichomes = new Trichomes()
Mimosa_bimucronata.stems.trichomes.filiform = new Filiform()
Mimosa_bimucronata.stems.trichomes.filiform.are = 'present'
Mimosa_bimucronata.stems.trichomes.filiform.orientation = ['patent', 'antrorse']

Mimosa_bimucronata.stipule = new Stipule()
Mimosa_bimucronata.stipule.margin = new MarginStipule()
Mimosa_bimucronata.stipule.adaxial = new AdaxialStipule()
Mimosa_bimucronata.stipule.abaxial = new AbaxialStipule()

Mimosa_bimucronata.leaf = new Leaf()
Mimosa_bimucronata.leaf.petiole = new Petiole()
Mimosa_bimucronata.leaf.petiole.trichomes = new Trichomes()
Mimosa_bimucronata.leaf.petiole.trichomes.granular = new Granular()
Mimosa_bimucronata.leaf.petiole.trichomes.granular.are = 'present'
Mimosa_bimucronata.leaf.bipinnate = new Bipinnate()
Mimosa_bimucronata.leaf.bipinnate.rachis = new Rachis()
Mimosa_bimucronata.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_bimucronata.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_bimucronata.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 9)
Mimosa_bimucronata.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_bimucronata.leaf.bipinnate.pinnae.rachilla.trichomes = new Trichomes()
Mimosa_bimucronata.leaf.bipinnate.pinnae.rachilla.trichomes.filiform = new Filiform()
Mimosa_bimucronata.leaf.bipinnate.pinnae.rachilla.trichomes.filiform.are = 'present'
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(18, 41)
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform = new Filiform()
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.are = 'present'
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.margin.trichomes = new Trichomes()
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform = new Filiform()
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform.are = 'present'
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform.orientation = 'antrorse-appressed'

Mimosa_bimucronata.inflorescence = new Inflorescence()
Mimosa_bimucronata.inflorescence.peduncle = new Peduncle()
Mimosa_bimucronata.inflorescence.capitate = new CapitateInflorescence()

Mimosa_bimucronata.flower = new Flower()
Mimosa_bimucronata.flower.bracteole = new Bracteole()
Mimosa_bimucronata.flower.merism = '4-merous'
Mimosa_bimucronata.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_bimucronata.flower.calyx = new Calyx()
Mimosa_bimucronata.flower.calyx.shape = 'campanulate'
Mimosa_bimucronata.flower.corolla = new Corolla()
Mimosa_bimucronata.flower.corolla.shape = 'campanulate'

Mimosa_bimucronata.androecium = new Androecium()
Mimosa_bimucronata.androecium.filaments = new Filaments()
Mimosa_bimucronata.androecium.filaments.colour = 'whitenish'

Mimosa_bimucronata.ginoecium = new Ginoecium()
Mimosa_bimucronata.ginoecium.ovary = new Ovary()

Mimosa_bimucronata.fruit = new Fruit()
Mimosa_bimucronata.fruit.stipe = new Stipe()
Mimosa_bimucronata.fruit.replum = new Replum()
Mimosa_bimucronata.fruit.epicarp = new Epicarp()

Mimosa_bimucronata.seed = new Seed()

// Description authorship
Mimosa_bimucronata.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_bimucronata.descriptionAuthorship.addAuthor({
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
source0.pages = '162-197'
Mimosa_bimucronata.addSource(source0)

/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = 2020
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source1.journal = 'Flora'
source1.number = 272
source1.pages = 151702
source1.figure = '1C'
source1.obtainingMethod = 'opticalMicroscope'
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '1D'
source2.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_bimucronata.stems.trichomes.filiform.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = 2020
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source3.journal = 'Flora'
source3.number = 272
source3.pages = 151702
source3.figure = '9O'
source3.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_bimucronata.leaf.bipinnate.pinnae.rachilla.trichomes.filiform.addSource(source3)

const source4 = new Source()
source4.sourceType = 'article'
source4.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source4.year = 2020
source4.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source4.journal = 'Flora'
source4.number = 272
source4.pages = 151702
source4.figure = '8B'
source4.obtainingMethod = 'opticalMicroscope'
Mimosa_bimucronata.leaf.petiole.trichomes.granular.addSource(source4)

// Export Mimosa bimucronata
export { Mimosa_bimucronata }