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
import { LeafletAbaxial } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa minarum
const Mimosa_minarum = new Mimosa()
Mimosa_minarum.specificEpithet = 'minarum'

Mimosa_minarum.leaf = new Leaf()
Mimosa_minarum.leaf.bipinnate = new Bipinnate()
Mimosa_minarum.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_minarum.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_minarum.leaf.bipinnate.pinnae.leaflet.abaxial = new LeafletAbaxial()
Mimosa_minarum.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_minarum.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate = new Capitate()
Mimosa_minarum.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate.filiform = new CapitateFiliform()
Mimosa_minarum.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate.filiform.variantCordistipulae = new VariantCordistipulae()

// Description authorship
Mimosa_minarum.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_minarum.descriptionAuthorship.addAuthor({
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
source1.figure = '8O,P,Q,R,S,T'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_minarum.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.capitate.filiform.variantCordistipulae.addSource(source1)

// Export Mimosa minarum
export { Mimosa_minarum }