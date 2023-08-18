// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Leaf, Stems } from '../../characters/v1'
import { Capitate } from '../../characters/v1/Trichomes'
import { CapitateFiliform } from '../../characters/v1/Trichomes/Capitate'
import { VariantCordistipulae } from '../../characters/v1/Trichomes/Capitate/CapitateFiliform'
import { Bipinnate } from '../../characters/v1/Leaf'
import { Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Leaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { Abaxial } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa blanchetii
const Mimosa_blanchetii = new Mimosa()
Mimosa_blanchetii.specificEpithet = 'blanchetii'

Mimosa_blanchetii.leaf = new Leaf()
Mimosa_blanchetii.leaf.bipinnate = new Bipinnate()
Mimosa_blanchetii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial = new Abaxial()
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate = new Capitate()
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate.filiform = new CapitateFiliform()
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate.filiform.variantCordistipulae = new VariantCordistipulae()

// Description authorship
Mimosa_blanchetii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_blanchetii.descriptionAuthorship.addAuthor({
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
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.porrect.addSource(source1)

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
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = 2020
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source3.journal = 'Flora'
source3.number = 272
source3.pages = 151702
source3.figure = '8F,G,H'
source3.obtainingMethod = 'opticalMicroscope'
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate.filiform.variantCordistipulae.addSource(source3)

// Export Mimosa blanchetii
export { Mimosa_blanchetii }