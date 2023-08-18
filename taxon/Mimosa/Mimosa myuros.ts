// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Stems, Trichomes, Leaf } from '../../characters/v1'
import { Dendritic, Stellate, Fasciculate } from '../../characters/v1/Trichomes'
import { Subsessile } from '../../characters/v1/Trichomes/Stellate'
import { Bipinnate } from '../../characters/v1/Leaf'
import { Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Leaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { Abaxial } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa myuros
const Mimosa_myuros = new Mimosa()
Mimosa_myuros.specificEpithet = 'myuros'

Mimosa_myuros.stems = new Stems()
Mimosa_myuros.stems.trichomes = new Trichomes()
Mimosa_myuros.stems.trichomes.stellate = new Stellate()
Mimosa_myuros.stems.trichomes.stellate.subsessile = new Subsessile()
Mimosa_myuros.stems.trichomes.stellate.subsessile.are = 'present'
Mimosa_myuros.stems.trichomes.dendritic = new Dendritic()
Mimosa_myuros.stems.trichomes.dendritic.are = 'present'

Mimosa_myuros.leaf = new Leaf()
Mimosa_myuros.leaf.bipinnate = new Bipinnate()
Mimosa_myuros.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.abaxial = new Abaxial()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate = new Fasciculate()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate.are = 'present'

// Description authorship
Mimosa_myuros.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_myuros.descriptionAuthorship.addAuthor({
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
source1.figure = '5D'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_myuros.stems.trichomes.stellate.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '5H'
source2.obtainingMethod = 'stereoscope'
Mimosa_myuros.stems.trichomes.dendritic.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = 2020
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source3.journal = 'Flora'
source3.number = 272
source3.pages = 151702
source3.figure = '5C'
source3.obtainingMethod = 'opticalMicroscope'
Mimosa_myuros.stems.trichomes.dendritic.addSource(source3)

// Export Mimosa myuros
export { Mimosa_myuros }