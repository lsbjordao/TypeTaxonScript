// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Stems } from '../../characters/v1'
import { Filiform, Capitate } from '../../characters/v1/Trichomes'
import { CapitateFiliform } from '../../characters/v1/Trichomes/Capitate'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa leptantha
const Mimosa_leptantha = new Mimosa()
Mimosa_leptantha.specificEpithet = 'leptantha'

Mimosa_leptantha.stems = new Stems()
Mimosa_leptantha.stems.trichomes = new Trichomes()
Mimosa_leptantha.stems.trichomes.capitate = new Capitate()
Mimosa_leptantha.stems.trichomes.capitate.filiform = new CapitateFiliform()
Mimosa_leptantha.stems.trichomes.capitate.filiform.are = 'present'

// Description authorship
Mimosa_leptantha.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_leptantha.descriptionAuthorship.addAuthor({
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
source1.figure = '9I,J,K,L'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_leptantha.stems.trichomes.capitate.filiform.addSource(source1)

// Export Mimosa leptantha
export { Mimosa_leptantha }