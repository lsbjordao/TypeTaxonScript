// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Stems } from '../../characters/v1'
import { Setiform } from '../../characters/v1/Trichomes'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa glazioui
const Mimosa_glazioui = new Mimosa()
Mimosa_glazioui.specificEpithet = 'glazioui'

Mimosa_glazioui.stems = new Stems()
Mimosa_glazioui.stems.trichomes = new Trichomes()
Mimosa_glazioui.stems.trichomes.setiform = new Setiform()
Mimosa_glazioui.stems.trichomes.setiform.are = 'present'

// Description authorship
Mimosa_glazioui.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_glazioui.descriptionAuthorship.addAuthor({
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
source1.figure = '2E'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_glazioui.stems.trichomes.setiform.addSource(source1)

// Export Mimosa glazioui
export { Mimosa_glazioui }