// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Leaf } from '../../characters/v1'
import { Filiform, Lepidote } from '../../characters/v1/Trichomes'
import { Bipinnate } from '../../characters/v1/Leaf'
import { Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Leaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { Abaxial } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa extensa
const Mimosa_extensa = new Mimosa()
Mimosa_extensa.specificEpithet = 'extensa'

Mimosa_extensa.leaf = new Leaf()
Mimosa_extensa.leaf.bipinnate = new Bipinnate()
Mimosa_extensa.leaf.bipinnate.pinnae = new Pinnae
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial = new Abaxial()
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform = new Filiform()
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.are = 'present'
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.orientation = 'antrorse'
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.numberOfCells = 'multicelullar'
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.lepidote = new Lepidote()
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.lepidote.are = 'present'

// Description authorship
Mimosa_extensa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_extensa.descriptionAuthorship.addAuthor({
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
source1.figure = '1F'
source1.obtainingMethod = 'opticalMicroscope'
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '7D,E'
source2.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.lepidote.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = 2020
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source3.journal = 'Flora'
source3.number = 272
source3.pages = 151702
source3.figure = '7F,G'
source3.obtainingMethod = 'stereoscope'
Mimosa_extensa.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.lepidote.addSource(source3)

// Export Mimosa extensa
export { Mimosa_extensa }