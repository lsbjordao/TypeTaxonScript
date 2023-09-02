// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Stems } from '../../characters/v1'
import { Filiform, Setiform } from '../../characters/v1/Trichomes'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa pudica_var_hispida
const Mimosa_pudica_var_hispida = new Mimosa()
Mimosa_pudica_var_hispida.specificEpithet = 'pudica var. hispida'

Mimosa_pudica_var_hispida.stems = new Stems()
Mimosa_pudica_var_hispida.stems.trichomes = new Trichomes()
Mimosa_pudica_var_hispida.stems.trichomes.filiform = new Filiform()
Mimosa_pudica_var_hispida.stems.trichomes.filiform.are = 'present'
Mimosa_pudica_var_hispida.stems.trichomes.setiform = new Setiform()
Mimosa_pudica_var_hispida.stems.trichomes.setiform.are = 'present'

// Description authorship
Mimosa_pudica_var_hispida.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pudica_var_hispida.descriptionAuthorship.addAuthor({
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
source1.figure = '2F'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_pudica_var_hispida.stems.trichomes.filiform.addSource(source1)

// Export Mimosa pudica_var_hispida
export { Mimosa_pudica_var_hispida }