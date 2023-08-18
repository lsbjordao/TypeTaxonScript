// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Stems } from '../../characters/v1'
import { Filiform, Setiform } from '../../characters/v1/Trichomes'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa oblonga_var_oblonga
const Mimosa_oblonga_var_oblonga = new Mimosa()
Mimosa_oblonga_var_oblonga.specificEpithet = 'oblonga var. oblonga'

Mimosa_oblonga_var_oblonga.stems = new Stems()
Mimosa_oblonga_var_oblonga.stems.trichomes = new Trichomes()
Mimosa_oblonga_var_oblonga.stems.trichomes.filiform = new Filiform()
Mimosa_oblonga_var_oblonga.stems.trichomes.filiform.are = 'present'
Mimosa_oblonga_var_oblonga.stems.trichomes.setiform = new Setiform()
Mimosa_oblonga_var_oblonga.stems.trichomes.setiform.are = 'present'

// Description authorship
Mimosa_oblonga_var_oblonga.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_oblonga_var_oblonga.descriptionAuthorship.addAuthor({
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
source1.figure = '2B'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_oblonga_var_oblonga.stems.trichomes.filiform.addSource(source1)
Mimosa_oblonga_var_oblonga.stems.trichomes.setiform.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '2H'
source2.obtainingMethod = 'opticalMicroscope'
Mimosa_oblonga_var_oblonga.stems.trichomes.filiform.addSource(source2)
Mimosa_oblonga_var_oblonga.stems.trichomes.setiform.addSource(source2)

// Export Mimosa oblonga_var_oblonga
export { Mimosa_oblonga_var_oblonga }