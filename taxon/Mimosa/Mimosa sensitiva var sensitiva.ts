// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Leaf } from '../../characters/v1'
import { Filiform, Setiform } from '../../characters/v1/Trichomes'
import { Bipinnate } from '../../characters/v1/Leaf'
import { Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Leaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { LeafletAbaxial, LeafletMargin } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa sensitiva_var_sensitiva
const Mimosa_sensitiva_var_sensitiva = new Mimosa()
Mimosa_sensitiva_var_sensitiva.specificEpithet = 'sensitiva var. sensitiva'

Mimosa_sensitiva_var_sensitiva.leaf = new Leaf()
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate = new Bipinnate()
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae = new Pinnae
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.abaxial = new LeafletAbaxial()
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.setiform = new Setiform()
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.setiform.are = 'present'

// Description authorship
Mimosa_sensitiva_var_sensitiva.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_sensitiva_var_sensitiva.descriptionAuthorship.addAuthor({
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
source1.figure = '2G'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.setiform.addSource(source1)

// Export Mimosa sensitiva_var_sensitiva
export { Mimosa_sensitiva_var_sensitiva }