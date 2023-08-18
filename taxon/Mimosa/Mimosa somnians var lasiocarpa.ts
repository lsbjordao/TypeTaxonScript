// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Stems } from '../../characters/v1'
import { Filiform, Setiform } from '../../characters/v1/Trichomes'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa somnians var. lasiocarpa
const Mimosa_somnians_var_lasiocarpa = new Mimosa()
Mimosa_somnians_var_lasiocarpa.specificEpithet = 'somnians var. lasiocarpa'

Mimosa_somnians_var_lasiocarpa.stems = new Stems()
Mimosa_somnians_var_lasiocarpa.stems.trichomes = new Trichomes()
Mimosa_somnians_var_lasiocarpa.stems.trichomes.filiform = new Filiform()
Mimosa_somnians_var_lasiocarpa.stems.trichomes.filiform.are = 'present'
Mimosa_somnians_var_lasiocarpa.stems.trichomes.setiform = new Setiform()
Mimosa_somnians_var_lasiocarpa.stems.trichomes.setiform.are = 'present'

// Description authorship
Mimosa_somnians_var_lasiocarpa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_somnians_var_lasiocarpa.descriptionAuthorship.addAuthor({
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
source1.figure = '2I'
source1.obtainingMethod = 'opticalMicroscope'
Mimosa_somnians_var_lasiocarpa.stems.trichomes.filiform.addSource(source1)
Mimosa_somnians_var_lasiocarpa.stems.trichomes.setiform.addSource(source1)

// Export Mimosa somnians_var_lasiocarpa
export { Mimosa_somnians_var_lasiocarpa }