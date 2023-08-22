// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Stems, Trichomes, Prickles, Stipule, Leaf } from '../../characters/v1'
import { Porrect, Granular, Filiform } from '../../characters/v1/Trichomes'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Leaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { LeafletAbaxial } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { StipuleMargin } from '../../characters/v1/Stipule'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa porrecta
const Mimosa_porrecta = new Mimosa()
Mimosa_porrecta.specificEpithet = 'porrecta'

Mimosa_porrecta.habit = 'shrub'

Mimosa_porrecta.stems = new Stems()
Mimosa_porrecta.stems.orientation = 'scandent'
Mimosa_porrecta.stems.shape = 'cylindric'
Mimosa_porrecta.stems.trichomes = new Trichomes
Mimosa_porrecta.stems.trichomes.filiform = new Filiform()
Mimosa_porrecta.stems.trichomes.filiform.are = 'present'
Mimosa_porrecta.stems.trichomes.porrect = new Porrect()
Mimosa_porrecta.stems.trichomes.porrect.are = 'present'
Mimosa_porrecta.stems.trichomes.granular = new Granular()
Mimosa_porrecta.stems.trichomes.granular.are = 'present'
Mimosa_porrecta.stems.prickles = new Prickles()
Mimosa_porrecta.stems.prickles.orientation = 'decurved'

Mimosa_porrecta.stipule = new Stipule()
Mimosa_porrecta.stipule.setHeightMinMax(2.5, 3.5)
Mimosa_porrecta.stipule.setWidthMinMax(1, 1.7)
Mimosa_porrecta.stipule.shape = 'lanceolate'
Mimosa_porrecta.stipule.persistance = 'persistent'
Mimosa_porrecta.stipule.margin = new StipuleMargin()

Mimosa_porrecta.leaf = new Leaf()
Mimosa_porrecta.leaf.bipinnate = new Bipinnate()
Mimosa_porrecta.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_porrecta.leaf.bipinnate.pinnae.numberOfPairs = 1
Mimosa_porrecta.leaf.bipinnate.pinnae.prickles = new Prickles()
Mimosa_porrecta.leaf.bipinnate.pinnae.prickles.orientation = 'decurved'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial = new LeafletAbaxial()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.porrect = new Porrect()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.porrect.are = 'present'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.granular = new Granular()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.granular.are = 'present'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform = new Filiform()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.are = 'present'
Mimosa_porrecta.leaf.petiole = new Petiole()
Mimosa_porrecta.leaf.petiole.prickles = new Prickles()
Mimosa_porrecta.leaf.petiole.prickles.orientation = 'decurved'

// Description authorship
Mimosa_porrecta.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_porrecta.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})

// Sources
/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = 2020
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source1.journal = 'Flora'
source1.number = 272
source1.pages = 151702
source1.figure = '6H'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.porrect.addSource(source1)
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.granular.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '6I'
source2.obtainingMethod = 'opticalMicroscope'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.porrect.addSource(source2)
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.addSource(source2)

// Export Mimosa porrecta
export { Mimosa_porrecta }