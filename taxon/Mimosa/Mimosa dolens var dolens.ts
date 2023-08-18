// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Stems } from '../../characters/v1'
import { Filiform, Porrect } from '../../characters/v1/Trichomes'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa dolens var. dolens
const Mimosa_dolens_var_dolens = new Mimosa()
Mimosa_dolens_var_dolens.specificEpithet = 'dolens var. dolens'

Mimosa_dolens_var_dolens.stems = new Stems()
Mimosa_dolens_var_dolens.stems.trichomes = new Trichomes()
Mimosa_dolens_var_dolens.stems.trichomes.filiform = new Filiform()
Mimosa_dolens_var_dolens.stems.trichomes.filiform.are = 'present'
Mimosa_dolens_var_dolens.stems.trichomes.porrect = new Porrect()
Mimosa_dolens_var_dolens.stems.trichomes.porrect.are = 'present'

// Description authorship
Mimosa_dolens_var_dolens.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_dolens_var_dolens.descriptionAuthorship.addAuthor({
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
Mimosa_dolens_var_dolens.stems.trichomes.filiform.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '6G'
source2.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_dolens_var_dolens.stems.trichomes.porrect.addSource(source2)

// Export Mimosa dolens var. dolens
export { Mimosa_dolens_var_dolens }