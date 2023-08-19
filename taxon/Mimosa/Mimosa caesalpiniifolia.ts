// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Stems } from '../../characters/v1'
import { Filiform } from '../../characters/v1/Trichomes'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa caesalpiniifolia
const Mimosa_caesalpiniifolia = new Mimosa()
Mimosa_caesalpiniifolia.specificEpithet = 'caesalpiniifolia'

Mimosa_caesalpiniifolia.stems = new Stems()
Mimosa_caesalpiniifolia.stems.trichomes = new Trichomes()
Mimosa_caesalpiniifolia.stems.trichomes.filiform = new Filiform()
Mimosa_caesalpiniifolia.stems.trichomes.filiform.are = 'present'

// Description authorship
Mimosa_caesalpiniifolia.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_caesalpiniifolia.descriptionAuthorship.addAuthor({
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
source1.figure = '1A'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_caesalpiniifolia.stems.trichomes.filiform.addSource(source1)

// Export Mimosa caesalpiniifolia
export { Mimosa_caesalpiniifolia }