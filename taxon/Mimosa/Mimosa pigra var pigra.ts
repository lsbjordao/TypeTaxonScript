// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Stems } from '../../characters/v1'
import { Filiform, Setiform } from '../../characters/v1/Trichomes'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa pigra_var_pigra
const Mimosa_pigra_var_pigra = new Mimosa()
Mimosa_pigra_var_pigra.specificEpithet = 'pigra var. pigra'

Mimosa_pigra_var_pigra.stems = new Stems()
Mimosa_pigra_var_pigra.stems.trichomes = new Trichomes()
Mimosa_pigra_var_pigra.stems.trichomes.setiform = new Setiform()
Mimosa_pigra_var_pigra.stems.trichomes.setiform.are = 'present'

// Description authorship
Mimosa_pigra_var_pigra.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pigra_var_pigra.descriptionAuthorship.addAuthor({
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
source1.figure = '3D'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_pigra_var_pigra.stems.trichomes.setiform.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '3E'
source2.obtainingMethod = 'stereoscope'
Mimosa_pigra_var_pigra.stems.trichomes.setiform.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = 2020
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source3.journal = 'Flora'
source3.number = 272
source3.pages = 151702
source3.figure = '3F'
source3.obtainingMethod = 'opticalMicroscope'
Mimosa_pigra_var_pigra.stems.trichomes.setiform.addSource(source3)

// Export Mimosa pigra_var_pigra
export { Mimosa_pigra_var_pigra }