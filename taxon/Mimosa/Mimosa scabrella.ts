// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Stems, Trichomes, Leaf } from '../../characters/v1'
import { Dendritic, Fasciculate } from '../../characters/v1/Trichomes'
import { Bipinnate } from '../../characters/v1/Leaf'
import { Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Leaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { Abaxial } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa scabrella
const Mimosa_scabrella = new Mimosa()
Mimosa_scabrella.specificEpithet = 'scabrella'

Mimosa_scabrella.stems = new Stems()
Mimosa_scabrella.stems.trichomes = new Trichomes()
Mimosa_scabrella.stems.trichomes.dendritic = new Dendritic()
Mimosa_scabrella.stems.trichomes.dendritic.are = 'present'

Mimosa_scabrella.leaf = new Leaf()
Mimosa_scabrella.leaf.bipinnate = new Bipinnate()
Mimosa_scabrella.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_scabrella.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_scabrella.leaf.bipinnate.pinnae.leaflet.abaxial = new Abaxial()
Mimosa_scabrella.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_scabrella.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate = new Fasciculate()
Mimosa_scabrella.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate.are = 'present'

// Description authorship
Mimosa_scabrella.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_scabrella.descriptionAuthorship.addAuthor({
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
source1.figure = '5F'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_scabrella.stems.trichomes.dendritic.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '5G'
source2.obtainingMethod = 'opticalMicroscope'
Mimosa_scabrella.stems.trichomes.dendritic.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = 2020
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source3.journal = 'Flora'
source3.number = 272
source3.pages = 151702
source3.figure = '5L'
source3.obtainingMethod = 'stereoscope'
Mimosa_scabrella.stems.trichomes.dendritic.addSource(source3)

const source4 = new Source()
source4.sourceType = 'article'
source4.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source4.year = 2020
source4.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source4.journal = 'Flora'
source4.number = 272
source4.pages = 151702
source4.figure = '6A'
source4.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_scabrella.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate.addSource(source4)

// Export Mimosa scabrella
export { Mimosa_scabrella }