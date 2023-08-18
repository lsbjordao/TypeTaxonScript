// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Stems } from '../../characters/v1'
import { Filiform, Setiform } from '../../characters/v1/Trichomes'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa debilis_var_debilis
const Mimosa_debilis_var_debilis = new Mimosa()
Mimosa_debilis_var_debilis.specificEpithet = 'debilis var. debilis'

Mimosa_debilis_var_debilis.stems = new Stems()
Mimosa_debilis_var_debilis.stems.trichomes = new Trichomes()
Mimosa_debilis_var_debilis.stems.trichomes.filiform = new Filiform()
Mimosa_debilis_var_debilis.stems.trichomes.filiform.are = 'present'
Mimosa_debilis_var_debilis.stems.trichomes.setiform = new Setiform()
Mimosa_debilis_var_debilis.stems.trichomes.setiform.are = 'present'

// Description authorship
Mimosa_debilis_var_debilis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_debilis_var_debilis.descriptionAuthorship.addAuthor({
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
source1.figure = '2A'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_debilis_var_debilis.stems.trichomes.filiform.addSource(source1)
Mimosa_debilis_var_debilis.stems.trichomes.setiform.addSource(source1)

// Export Mimosa debilis_var_debilis
export { Mimosa_debilis_var_debilis }