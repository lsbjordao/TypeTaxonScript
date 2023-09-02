// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Leaf } from '../../characters/v1'
import { Filiform } from '../../characters/v1/Trichomes'
import { Bipinnate } from '../../characters/v1/Leaf'
import { Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Leaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { MarginLeaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa invisa_var_macrostachya
const Mimosa_invisa_var_macrostachya = new Mimosa()
Mimosa_invisa_var_macrostachya.specificEpithet = 'invisa var. macrostachya'

Mimosa_invisa_var_macrostachya.leaf = new Leaf()
Mimosa_invisa_var_macrostachya.leaf.bipinnate = new Bipinnate()
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae = new Pinnae
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin.trichomes = new Trichomes()
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform = new Filiform()
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform.are = 'present'
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform.orientation = 'antrorse'
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform.numberOfCells = 'unicelullar'

// Description authorship
Mimosa_invisa_var_macrostachya.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_invisa_var_macrostachya.descriptionAuthorship.addAuthor({
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
source1.figure = '1E'
source1.obtainingMethod = 'opticalMicroscope'
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform.addSource(source1)

// Export Mimosa invisa_var_macrostachya
export { Mimosa_invisa_var_macrostachya }