// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Leaf, Stems } from '../../characters/v1'
import { Filiform, Granular } from '../../characters/v1/Trichomes'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa arenosa var. arenosa
const Mimosa_arenosa_var_arenosa = new Mimosa()
Mimosa_arenosa_var_arenosa.specificEpithet = 'arenosa var. arenosa'

Mimosa_arenosa_var_arenosa.leaf = new Leaf()
Mimosa_arenosa_var_arenosa.leaf.bipinnate = new Bipinnate()
Mimosa_arenosa_var_arenosa.leaf.petiole = new Petiole()
Mimosa_arenosa_var_arenosa.leaf.petiole.trichomes = new Trichomes()
Mimosa_arenosa_var_arenosa.leaf.petiole.trichomes.granular = new Granular()
Mimosa_arenosa_var_arenosa.leaf.petiole.trichomes.granular.are = 'present'

// Description authorship
Mimosa_arenosa_var_arenosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_arenosa_var_arenosa.descriptionAuthorship.addAuthor({
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
source1.figure = '8A'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_arenosa_var_arenosa.leaf.petiole.trichomes.granular.addSource(source1)

// Export Mimosa arenosa var. arenosa
export { Mimosa_arenosa_var_arenosa }