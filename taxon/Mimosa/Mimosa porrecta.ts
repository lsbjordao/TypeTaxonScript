// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Leaf, Stems } from '../../characters/v1'
import { Porrect, Granular, Filiform } from '../../characters/v1/Trichomes'
import { Bipinnate } from '../../characters/v1/Leaf'
import { Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Leaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { Abaxial } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa porrecta
const Mimosa_porrecta = new Mimosa()
Mimosa_porrecta.specificEpithet = 'porrecta'

Mimosa_porrecta.leaf = new Leaf()
Mimosa_porrecta.leaf.bipinnate = new Bipinnate()
Mimosa_porrecta.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial = new Abaxial()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.porrect = new Porrect()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.porrect.are = 'present'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.granular = new Granular()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.granular.are = 'present'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform = new Filiform()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.are = 'present'

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