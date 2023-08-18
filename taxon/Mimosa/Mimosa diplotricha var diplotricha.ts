// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Fruit } from '../../characters/v1'
import { Setiform } from '../../characters/v1/Trichomes'
import { Barbellate } from '../../characters/v1/Trichomes/Setiform'
import { Epicarp } from '../../characters/v1/Fruit'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa diplotricha var. diplotricha
const Mimosa_diplotricha_var_diplotricha = new Mimosa()
Mimosa_diplotricha_var_diplotricha.specificEpithet = 'diplotricha var. diplotricha'

Mimosa_diplotricha_var_diplotricha.fruit = new Fruit()
Mimosa_diplotricha_var_diplotricha.fruit.epicarp = new Epicarp()
Mimosa_diplotricha_var_diplotricha.fruit.epicarp.trichomes = new Trichomes()
Mimosa_diplotricha_var_diplotricha.fruit.epicarp.trichomes.setiform = new Setiform()
Mimosa_diplotricha_var_diplotricha.fruit.epicarp.trichomes.setiform.barbellate = new Barbellate()
Mimosa_diplotricha_var_diplotricha.fruit.epicarp.trichomes.setiform.barbellate.are = 'present'

// Description authorship
Mimosa_diplotricha_var_diplotricha.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_diplotricha_var_diplotricha.descriptionAuthorship.addAuthor({
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
source1.figure = '3G'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_diplotricha_var_diplotricha.fruit.epicarp.trichomes.setiform.barbellate.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '3H'
source2.obtainingMethod = 'opticalMicroscope'
Mimosa_diplotricha_var_diplotricha.fruit.epicarp.trichomes.setiform.barbellate.addSource(source2)

// Export Mimosa diplotricha var. diplotricha
export { Mimosa_diplotricha_var_diplotricha }