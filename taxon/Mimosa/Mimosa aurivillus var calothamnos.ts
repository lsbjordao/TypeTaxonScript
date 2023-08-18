// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Stems } from '../../characters/v1'
import { Dendritic } from '../../characters/v1/Trichomes'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa aurivillus var. calothamnos
const Mimosa_aurivillus_var_calothamnos = new Mimosa()
Mimosa_aurivillus_var_calothamnos.specificEpithet = 'aurivillus var. calothamnos'

Mimosa_aurivillus_var_calothamnos.stems = new Stems()
Mimosa_aurivillus_var_calothamnos.stems.trichomes = new Trichomes()
Mimosa_aurivillus_var_calothamnos.stems.trichomes.dendritic = new Dendritic()
Mimosa_aurivillus_var_calothamnos.stems.trichomes.dendritic.are = 'present'

// Description authorship
Mimosa_aurivillus_var_calothamnos.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_aurivillus_var_calothamnos.descriptionAuthorship.addAuthor({
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
source1.figure = '5E'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_aurivillus_var_calothamnos.stems.trichomes.dendritic.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '5I'
source2.obtainingMethod = 'opticalMicroscope'
Mimosa_aurivillus_var_calothamnos.stems.trichomes.dendritic.addSource(source2)

// Export Mimosa aurivillus var. calothamnos
export { Mimosa_aurivillus_var_calothamnos }