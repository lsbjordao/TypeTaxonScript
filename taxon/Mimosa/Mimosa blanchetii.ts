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
import { AbaxialLeaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa blanchetii
const Mimosa_blanchetii = new Mimosa()
Mimosa_blanchetii.specificEpithet = 'blanchetii'

Mimosa_blanchetii.leaf = new Leaf()
Mimosa_blanchetii.leaf.bipinnate = new Bipinnate()
Mimosa_blanchetii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate = new Capitate()
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate.filiform = new CapitateFiliform()
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate.filiform.variantCordistipulae = new VariantCordistipulae()
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate.filiform.variantCordistipulae.are = 'present'

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
source1.figure = '8F,G,H'
source1.obtainingMethod = 'opticalMicroscope'
Mimosa_blanchetii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate.filiform.variantCordistipulae.addSource(source1)

// Export Mimosa blanchetii
export { Mimosa_blanchetii }