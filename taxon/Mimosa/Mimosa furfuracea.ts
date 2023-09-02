// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Stems, Trichomes, Leaf, Flower } from '../../characters/v1'
import { Dendritic, Stellate, Fasciculate } from '../../characters/v1/Trichomes'
import { StellateLepidote } from '../../characters/v1/Trichomes/Stellate'
import { Bipinnate } from '../../characters/v1/Leaf'
import { Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Leaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { AbaxialLeaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { Corolla } from '../../characters/v1/Flower'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa furfuracea
const Mimosa_furfuracea = new Mimosa()
Mimosa_furfuracea.specificEpithet = 'furfuracea'

Mimosa_furfuracea.stems = new Stems()
Mimosa_furfuracea.stems.trichomes = new Trichomes()
Mimosa_furfuracea.stems.trichomes.dendritic = new Dendritic()
Mimosa_furfuracea.stems.trichomes.dendritic.are = 'present'

Mimosa_furfuracea.leaf = new Leaf()
Mimosa_furfuracea.leaf.bipinnate = new Bipinnate()
Mimosa_furfuracea.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate = new Fasciculate()
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate.are = 'present'

Mimosa_furfuracea.flower = new Flower()
Mimosa_furfuracea.flower.corolla = new Corolla()
Mimosa_furfuracea.flower.corolla.trichomes = new Trichomes()
Mimosa_furfuracea.flower.corolla.trichomes.stellate = new Stellate()
Mimosa_furfuracea.flower.corolla.trichomes.stellate.lepidote = new StellateLepidote()
Mimosa_furfuracea.flower.corolla.trichomes.stellate.lepidote.are = 'present'

// Description authorship
Mimosa_furfuracea.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_furfuracea.descriptionAuthorship.addAuthor({
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
source1.figure = '4H'
source1.obtainingMethod = 'opticalMicroscope'
Mimosa_furfuracea.flower.corolla.trichomes.stellate.lepidote.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '5A,B'
source2.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_furfuracea.stems.trichomes.dendritic.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = 2020
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source3.journal = 'Flora'
source3.number = 272
source3.pages = 151702
source3.figure = '5J'
source3.obtainingMethod = 'stereoscope'
Mimosa_furfuracea.stems.trichomes.dendritic.addSource(source3)

const source4 = new Source()
source4.sourceType = 'article'
source4.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source4.year = 2020
source4.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source4.journal = 'Flora'
source4.number = 272
source4.pages = 151702
source4.figure = '6D'
source4.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_furfuracea.stems.trichomes.dendritic.addSource(source4)

const source5 = new Source()
source5.sourceType = 'article'
source5.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source5.year = 2020
source5.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source5.journal = 'Flora'
source5.number = 272
source5.pages = 151702
source5.figure = '6F'
source5.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate.addSource(source5)

// Export Mimosa furfuracea
export { Mimosa_furfuracea }