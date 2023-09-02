// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Leaf, Stems } from '../../characters/v1'
import { Filiform } from '../../characters/v1/Trichomes'
import { Bipinnate } from '../../characters/v1/Leaf'
import { Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Leaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { AbaxialLeaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa cubatanensis
const Mimosa_cubatanensis = new Mimosa()
Mimosa_cubatanensis.specificEpithet = 'cubatanensis'

Mimosa_cubatanensis.stems = new Stems()
Mimosa_cubatanensis.stems.trichomes = new Trichomes()
Mimosa_cubatanensis.stems.trichomes.filiform = new Filiform()
Mimosa_cubatanensis.stems.trichomes.filiform.are = 'present'

Mimosa_cubatanensis.leaf = new Leaf()
Mimosa_cubatanensis.leaf.bipinnate = new Bipinnate()
Mimosa_cubatanensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform = new Filiform()
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.are = 'present'
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.orientation = 'antrorse-appressed'

// Description authorship
Mimosa_cubatanensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_cubatanensis.descriptionAuthorship.addAuthor({
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
source1.figure = '1B'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '1H'
source2.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = 2020
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source3.journal = 'Flora'
source3.number = 272
source3.pages = 151702
source3.figure = '9P'
source3.obtainingMethod = 'stereoscope'
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.addSource(source3)

// Export Mimosa cubatanensis
export { Mimosa_cubatanensis }