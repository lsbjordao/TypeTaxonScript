// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Fruit } from '../../characters/v1'
import { Setiform } from '../../characters/v1/Trichomes'
import { Glochidiate } from '../../characters/v1/Trichomes/Setiform'
import { Epicarp } from '../../characters/v1/Fruit'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa campicola
const Mimosa_campicola = new Mimosa()
Mimosa_campicola.specificEpithet = 'campicola'

Mimosa_campicola.fruit = new Fruit()
Mimosa_campicola.fruit.epicarp = new Epicarp()
Mimosa_campicola.fruit.epicarp.trichomes = new Trichomes()
Mimosa_campicola.fruit.epicarp.trichomes.setiform = new Setiform()
Mimosa_campicola.fruit.epicarp.trichomes.setiform.glochidiate = new Glochidiate()
Mimosa_campicola.fruit.epicarp.trichomes.setiform.glochidiate.are = 'present'

// Description authorship
Mimosa_campicola.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_campicola.descriptionAuthorship.addAuthor({
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
source1.figure = '4A,B'
source1.obtainingMethod = 'stereoscope'
Mimosa_campicola.fruit.epicarp.trichomes.setiform.glochidiate.addSource(source1)

// Export Mimosa campicola
export { Mimosa_campicola }