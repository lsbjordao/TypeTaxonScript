// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Stems } from '../../characters/v1'
import { Filiform, Capitate } from '../../characters/v1/Trichomes'
import { CapitateFiliform } from '../../characters/v1/Trichomes/Capitate'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa cordistipula
const Mimosa_cordistipula = new Mimosa()
Mimosa_cordistipula.specificEpithet = 'cordistipula'

Mimosa_cordistipula.stems = new Stems()
Mimosa_cordistipula.stems.trichomes = new Trichomes()
Mimosa_cordistipula.stems.trichomes.capitate = new Capitate()
Mimosa_cordistipula.stems.trichomes.capitate.filiform = new CapitateFiliform()
Mimosa_cordistipula.stems.trichomes.capitate.filiform.are = 'present'

// Description authorship
Mimosa_cordistipula.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_cordistipula.descriptionAuthorship.addAuthor({
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
source1.figure = '9F,G,H'
source1.obtainingMethod = 'opticalMicroscope'
Mimosa_cordistipula.stems.trichomes.capitate.filiform.addSource(source1)

// Export Mimosa cordistipula
export { Mimosa_cordistipula }