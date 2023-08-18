// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Stems } from '../../characters/v1'
import { Setiform } from '../../characters/v1/Trichomes'
import { Barbellate } from '../../characters/v1/Trichomes/Setiform'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa xanthocentra_var_xanthocentra
const Mimosa_xanthocentra_var_xanthocentra = new Mimosa()
Mimosa_xanthocentra_var_xanthocentra.specificEpithet = 'xanthocentra_var_xanthocentra'

Mimosa_xanthocentra_var_xanthocentra.stems = new Stems()
Mimosa_xanthocentra_var_xanthocentra.stems.trichomes = new Trichomes()
Mimosa_xanthocentra_var_xanthocentra.stems.trichomes.setiform = new Setiform()
Mimosa_xanthocentra_var_xanthocentra.stems.trichomes.setiform.barbellate = new Barbellate()
Mimosa_xanthocentra_var_xanthocentra.stems.trichomes.setiform.barbellate.are = 'present'

// Description authorship
Mimosa_xanthocentra_var_xanthocentra.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_xanthocentra_var_xanthocentra.descriptionAuthorship.addAuthor({
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
source1.figure = '3B'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_xanthocentra_var_xanthocentra.stems.trichomes.setiform.barbellate.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '3C'
source2.obtainingMethod = 'stereoscope'
Mimosa_xanthocentra_var_xanthocentra.stems.trichomes.setiform.barbellate.addSource(source2)

// Export Mimosa xanthocentra_var_xanthocentra
export { Mimosa_xanthocentra_var_xanthocentra }