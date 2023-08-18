// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Stems, Trichomes, Leaf, Fruit } from '../../characters/v1'
import { Dendritic, Stellate, Fasciculate, Verruciform } from '../../characters/v1/Trichomes'
import { StellateSubsessile } from '../../characters/v1/Trichomes/Stellate'
import { Bipinnate } from '../../characters/v1/Leaf'
import { Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Leaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { Abaxial } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { Epicarp } from '../../characters/v1/Fruit'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa myuros
const Mimosa_myuros = new Mimosa()
Mimosa_myuros.specificEpithet = 'myuros'

Mimosa_myuros.stems = new Stems()
Mimosa_myuros.stems.trichomes = new Trichomes()
Mimosa_myuros.stems.trichomes.stellate = new Stellate()
Mimosa_myuros.stems.trichomes.stellate.subsessile = new StellateSubsessile()
Mimosa_myuros.stems.trichomes.stellate.subsessile.are = 'present'
Mimosa_myuros.stems.trichomes.dendritic = new Dendritic()
Mimosa_myuros.stems.trichomes.dendritic.are = 'present'

Mimosa_myuros.leaf = new Leaf()
Mimosa_myuros.leaf.bipinnate = new Bipinnate()
Mimosa_myuros.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.abaxial = new Abaxial()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate = new Fasciculate()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate.are = 'present'

Mimosa_myuros.fruit = new Fruit()
Mimosa_myuros.fruit.epicarp = new Epicarp()
Mimosa_myuros.fruit.epicarp.trichomes = new Trichomes()
Mimosa_myuros.fruit.epicarp.trichomes.verruciform = new Verruciform()
Mimosa_myuros.fruit.epicarp.trichomes.verruciform.are = 'present'

// Description authorship
Mimosa_myuros.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_myuros.descriptionAuthorship.addAuthor({
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
source1.figure = '5D'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_myuros.stems.trichomes.stellate.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '5H'
source2.obtainingMethod = 'stereoscope'
Mimosa_myuros.stems.trichomes.dendritic.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = 2020
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source3.journal = 'Flora'
source3.number = 272
source3.pages = 151702
source3.figure = '5C'
source3.obtainingMethod = 'opticalMicroscope'
Mimosa_myuros.stems.trichomes.dendritic.addSource(source3)

const source4 = new Source()
source4.sourceType = 'article'
source4.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source4.year = 2020
source4.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source4.journal = 'Flora'
source4.number = 272
source4.pages = 151702
source4.figure = '7B'
source4.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_myuros.fruit.epicarp.trichomes.verruciform.addSource(source4)

// Export Mimosa myuros
export { Mimosa_myuros }