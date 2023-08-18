// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Stems } from '../../characters/v1'
import { Filiform, Setiform } from '../../characters/v1/Trichomes'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa ernestii
const Mimosa_ernestii = new Mimosa()
Mimosa_ernestii.specificEpithet = 'ernestii'

Mimosa_ernestii.stems = new Stems()
Mimosa_ernestii.stems.trichomes = new Trichomes()
Mimosa_ernestii.stems.trichomes.setiform = new Setiform()
Mimosa_ernestii.stems.trichomes.setiform.are = 'present'

// Description authorship
Mimosa_ernestii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_ernestii.descriptionAuthorship.addAuthor({
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
source1.figure = '2K'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_ernestii.stems.trichomes.setiform.addSource(source1)

// Export Mimosa ernestii
export { Mimosa_ernestii }