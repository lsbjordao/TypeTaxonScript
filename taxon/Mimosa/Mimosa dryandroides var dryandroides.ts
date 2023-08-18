// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Stems } from '../../characters/v1'
import { Setiform } from '../../characters/v1/Trichomes'
import { Barbellate } from '../../characters/v1/Trichomes/Setiform'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa dryandroides_var_dryandroides
const Mimosa_dryandroides_var_dryandroides = new Mimosa()
Mimosa_dryandroides_var_dryandroides.specificEpithet = 'dryandroides var. dryandroides'

Mimosa_dryandroides_var_dryandroides.stems = new Stems()
Mimosa_dryandroides_var_dryandroides.stems.trichomes = new Trichomes()
Mimosa_dryandroides_var_dryandroides.stems.trichomes.setiform = new Setiform()
Mimosa_dryandroides_var_dryandroides.stems.trichomes.setiform.barbellate = new Barbellate()
Mimosa_dryandroides_var_dryandroides.stems.trichomes.setiform.barbellate.are = 'present'

// Description authorship
Mimosa_dryandroides_var_dryandroides.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_dryandroides_var_dryandroides.descriptionAuthorship.addAuthor({
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
source1.figure = '3A'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_dryandroides_var_dryandroides.stems.trichomes.setiform.barbellate.addSource(source1)

// Export Mimosa dryandroides_var_dryandroides
export { Mimosa_dryandroides_var_dryandroides }