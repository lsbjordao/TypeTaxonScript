// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Trichomes, Leaf, Stems } from '../../characters/v1'
import { Filiform, Granular } from '../../characters/v1/Trichomes'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Leaflet, Rachilla } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { LeafletMargin } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa bimucronata
const Mimosa_bimucronata = new Mimosa()
Mimosa_bimucronata.specificEpithet = 'bimucronata'

Mimosa_bimucronata.stems = new Stems()
Mimosa_bimucronata.stems.trichomes = new Trichomes()
Mimosa_bimucronata.stems.trichomes.filiform = new Filiform()
Mimosa_bimucronata.stems.trichomes.filiform.are = 'present'
Mimosa_bimucronata.stems.trichomes.filiform.orientation = ['patent', 'antrorse']

Mimosa_bimucronata.leaf = new Leaf()
Mimosa_bimucronata.leaf.petiole = new Petiole()
Mimosa_bimucronata.leaf.petiole.trichomes = new Trichomes()
Mimosa_bimucronata.leaf.petiole.trichomes.granular = new Granular()
Mimosa_bimucronata.leaf.petiole.trichomes.granular.are = 'present'
Mimosa_bimucronata.leaf.bipinnate = new Bipinnate()
Mimosa_bimucronata.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_bimucronata.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_bimucronata.leaf.bipinnate.pinnae.rachilla.trichomes = new Trichomes()
Mimosa_bimucronata.leaf.bipinnate.pinnae.rachilla.trichomes.filiform = new Filiform()
Mimosa_bimucronata.leaf.bipinnate.pinnae.rachilla.trichomes.filiform.are = 'present'
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.margin = new LeafletMargin()
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.margin.trichomes = new Trichomes()
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform = new Filiform()
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform.are = 'present'
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform.orientation = 'antrorse-appressed'

// Description authorship
Mimosa_bimucronata.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_bimucronata.descriptionAuthorship.addAuthor({
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
source1.figure = '1C'
source1.obtainingMethod = 'opticalMicroscope'
Mimosa_bimucronata.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '1D'
source2.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_bimucronata.stems.trichomes.filiform.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = 2020
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source3.journal = 'Flora'
source3.number = 272
source3.pages = 151702
source3.figure = '9O'
source3.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_bimucronata.leaf.bipinnate.pinnae.rachilla.trichomes.filiform.addSource(source3)

const source4 = new Source()
source4.sourceType = 'article'
source4.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source4.year = 2020
source4.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source4.journal = 'Flora'
source4.number = 272
source4.pages = 151702
source4.figure = '8B'
source4.obtainingMethod = 'opticalMicroscope'
Mimosa_bimucronata.leaf.petiole.trichomes.granular.addSource(source4)

// Export Mimosa bimucronata
export { Mimosa_bimucronata }