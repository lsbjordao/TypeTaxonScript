// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Stems } from '../../characters/v1'
import { Filiform, Setiform } from '../../characters/v1/Trichomes'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa elliptica
const Mimosa_elliptica = new Mimosa()
Mimosa_elliptica.specificEpithet = 'elliptica'

Mimosa_elliptica.stems = new Stems()
Mimosa_elliptica.stems.trichomes = new Trichomes()
Mimosa_elliptica.stems.trichomes.filiform = new Filiform()
Mimosa_elliptica.stems.trichomes.filiform.are = 'present'
Mimosa_elliptica.stems.trichomes.filiform.orientation = 'antrorse'
Mimosa_elliptica.stems.trichomes.filiform.numberOfCells = 'unicelullar'
Mimosa_elliptica.stems.trichomes.setiform = new Setiform()
Mimosa_elliptica.stems.trichomes.setiform.are = 'present'
Mimosa_elliptica.stems.trichomes.setiform.orientation = 'antrorse-appressed'

// Description authorship
Mimosa_elliptica.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_elliptica.descriptionAuthorship.addAuthor({
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
Mimosa_elliptica.stems.trichomes.filiform.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '2D'
source2.obtainingMethod = 'opticalMicroscope'
Mimosa_elliptica.stems.trichomes.setiform.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = 2020
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source3.journal = 'Flora'
source3.number = 272
source3.pages = 151702
source3.figure = '2J'
source3.obtainingMethod = 'opticalMicroscope'
Mimosa_elliptica.stems.trichomes.setiform.addSource(source3)

const source4 = new Source()
source4.sourceType = 'article'
source4.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source4.year = 2020
source4.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source4.journal = 'Flora'
source4.number = 272
source4.pages = 151702
source4.figure = '2L'
source4.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_elliptica.stems.trichomes.setiform.addSource(source4)

// Export Mimosa elliptica
export { Mimosa_elliptica }