// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles, 
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium, 
    Pollen, 
    Ginoecium,
    Fruit, 
    Seed
} from '../../characters/v1'
import { Porrect, Granular, Filiform, Setiform, Dendritic } from '../../characters/v1/Trichomes'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { CapitateInflorescence, Peduncle } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { ApexBracteole } from '../../characters/v1/Flower/Bracteole'
import { Lobes } from '../../characters/v1/Flower/Corolla'
import { ApexLobes } from '../../characters/v1/Flower/Corolla/Lobes'
import { Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa porrecta
const Mimosa_porrecta = new Mimosa()
Mimosa_porrecta.specificEpithet = 'porrecta'

Mimosa_porrecta.habit = 'shrub'

Mimosa_porrecta.stems = new Stems()
Mimosa_porrecta.stems.orientation = 'scandent'
Mimosa_porrecta.stems.shape = 'cylindric'
Mimosa_porrecta.stems.trichomes = new Trichomes
Mimosa_porrecta.stems.trichomes.filiform = new Filiform()
Mimosa_porrecta.stems.trichomes.filiform.are = 'present'
Mimosa_porrecta.stems.trichomes.porrect = new Porrect()
Mimosa_porrecta.stems.trichomes.porrect.are = 'present'
Mimosa_porrecta.stems.trichomes.granular = new Granular()
Mimosa_porrecta.stems.trichomes.granular.are = 'present'
Mimosa_porrecta.stems.prickles = new Prickles()
Mimosa_porrecta.stems.prickles.orientation = 'decurved'

Mimosa_porrecta.stipule = new Stipule()
Mimosa_porrecta.stipule.setHeightMinMax(2.5, 3.5)
Mimosa_porrecta.stipule.setWidthMinMax(1, 1.7)
Mimosa_porrecta.stipule.shape = 'lanceolate'
Mimosa_porrecta.stipule.persistance = 'persistent'
Mimosa_porrecta.stipule.margin = new MarginStipule()
Mimosa_porrecta.stipule.margin.trichomes = new Trichomes()
Mimosa_porrecta.stipule.margin.trichomes.setiform = new Setiform()
Mimosa_porrecta.stipule.margin.trichomes.setiform.are = 'present'
Mimosa_porrecta.stipule.margin.trichomes.setiform.orientation = 'antrorse'
Mimosa_porrecta.stipule.adaxial = new AdaxialStipule()
Mimosa_porrecta.stipule.adaxial.trichomes = new Trichomes()
Mimosa_porrecta.stipule.adaxial.trichomes.filiform = new Filiform()
Mimosa_porrecta.stipule.adaxial.trichomes.filiform.are = 'present'
Mimosa_porrecta.stipule.abaxial = new AbaxialStipule()
Mimosa_porrecta.stipule.abaxial.trichomes.setiform = new Setiform()
Mimosa_porrecta.stipule.abaxial.trichomes.setiform.are = 'present'
Mimosa_porrecta.stipule.abaxial.trichomes.setiform.orientation = 'antrorse'
Mimosa_porrecta.stipule.abaxial.trichomes.filiform = new Filiform()
Mimosa_porrecta.stipule.abaxial.trichomes.filiform.are = 'present'
Mimosa_porrecta.stipule.abaxial.trichomes.granular = new Granular()
Mimosa_porrecta.stipule.abaxial.trichomes.granular.are = 'present'
Mimosa_porrecta.stipule.nervation = ['1-nerved', '3-nerved']

Mimosa_porrecta.leaf = new Leaf()
Mimosa_porrecta.leaf.petiole = new Petiole()
Mimosa_porrecta.leaf.petiole.setLengthMinMax(25, 83)
Mimosa_porrecta.leaf.petiole.prickles = new Prickles()
Mimosa_porrecta.leaf.petiole.prickles.orientation = 'decurved'
Mimosa_porrecta.leaf.bipinnate = new Bipinnate()
Mimosa_porrecta.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_porrecta.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_porrecta.leaf.bipinnate.pinnae.paraphillidia.are = 'present'
Mimosa_porrecta.leaf.bipinnate.pinnae.paraphillidia.setLengthMinMax(1, 2.2)
Mimosa_porrecta.leaf.bipinnate.pinnae.paraphillidia.pairLength = 'unequal'
Mimosa_porrecta.leaf.bipinnate.pinnae.paraphillidia.shape = 'lanceolate'
Mimosa_porrecta.leaf.bipinnate.pinnae.numberOfPairs = 1
Mimosa_porrecta.leaf.bipinnate.pinnae.prickles = new Prickles()
Mimosa_porrecta.leaf.bipinnate.pinnae.prickles.orientation = 'decurved'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.numberOfPairs = 2
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.innermostOfProximalPairReduced = 'yes'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.setHeightMinMax(20, 70)
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.setWidthMinMax(10, 39)
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.shape = ['elliptic', 'oval']
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.base = ['oblique-obtuse', 'cordate']
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.apex = 'acute'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.margin.trichomes = new Trichomes()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.margin.trichomes.setiform = new Setiform()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.margin.trichomes.setiform.are = 'present'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.margin.trichomes.setiform.orientation = 'antrorse-appressed'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.adaxial.trichomes = new Trichomes()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.adaxial.trichomes.filiform = new Filiform()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.adaxial.trichomes.filiform.are = 'present'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.adaxial.trichomes.filiform.density = 'sparsely'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.porrect = new Porrect()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.porrect.are = 'present'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.porrect.density = 'densely'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.granular = new Granular()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.granular.are = 'present'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.granular.density = 'densely'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform = new Filiform()
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.are = 'present'

Mimosa_porrecta.inflorescence = new Inflorescence()
Mimosa_porrecta.inflorescence.shape = 'moriform'
Mimosa_porrecta.inflorescence.capitate = new CapitateInflorescence()
Mimosa_porrecta.inflorescence.capitate.shape = 'globose'
Mimosa_porrecta.inflorescence.peduncle = new Peduncle()
Mimosa_porrecta.inflorescence.peduncle.setLengthMinMax(10, 27)

Mimosa_porrecta.flower = new Flower()
Mimosa_porrecta.flower.bracteole = new Bracteole()
Mimosa_porrecta.flower.bracteole.setLengthMinMax(1.2, 1.5)
Mimosa_porrecta.flower.bracteole.apex = new ApexBracteole()
Mimosa_porrecta.flower.bracteole.apex.trichomes = new Trichomes()
Mimosa_porrecta.flower.bracteole.apex.trichomes.setiform = new Setiform()
Mimosa_porrecta.flower.bracteole.apex.trichomes.setiform.are = 'present'
Mimosa_porrecta.flower.bracteole.apex.trichomes.setiform.orientation = 'antrorse'
Mimosa_porrecta.flower.merism = '4-merous'
Mimosa_porrecta.flower.calyx = new Calyx()
Mimosa_porrecta.flower.calyx.setLengthMinMax(1.5, 2)
Mimosa_porrecta.flower.calyx.shape = 'pappiform'
Mimosa_porrecta.flower.corolla = new Corolla()
Mimosa_porrecta.flower.corolla.setLengthMinMax(1.8, 2.1)
Mimosa_porrecta.flower.corolla.shape = ['tubulose', 'campanulate']
Mimosa_porrecta.flower.corolla.lobes = new Lobes()
Mimosa_porrecta.flower.corolla.lobes.nervation = '1-nerved'
Mimosa_porrecta.flower.corolla.lobes.apex = new ApexLobes()
Mimosa_porrecta.flower.corolla.lobes.apex.trichomes = new Trichomes()
Mimosa_porrecta.flower.corolla.lobes.apex.trichomes.filiform = new Filiform()
Mimosa_porrecta.flower.corolla.lobes.apex.trichomes.filiform.are = 'present'
Mimosa_porrecta.androecium = new Androecium()
Mimosa_porrecta.androecium.filaments = new Filaments()
Mimosa_porrecta.androecium.filaments.colour = 'pinkish'
Mimosa_porrecta.ginoecium = new Ginoecium()
Mimosa_porrecta.ginoecium.ovary = new Ovary()

Mimosa_porrecta.pollen = new Pollen()

Mimosa_porrecta.fruit = new Fruit()
Mimosa_porrecta.fruit.type = 'craspedium'
Mimosa_porrecta.fruit.setHeightMinMax(13, 30)
Mimosa_porrecta.fruit.setWidthMinMax(5, 7)
Mimosa_porrecta.fruit.shape = 'oblong'
Mimosa_porrecta.fruit.stipe = 'sessile'
Mimosa_porrecta.fruit.replum = new Replum()
Mimosa_porrecta.fruit.replum.trichomes = new Trichomes()
Mimosa_porrecta.fruit.replum.trichomes.dendritic = new Dendritic()
Mimosa_porrecta.fruit.replum.trichomes.dendritic.are = 'present'
Mimosa_porrecta.fruit.replum.trichomes.dendritic.density = 'densely'
Mimosa_porrecta.fruit.epicarp = new Epicarp()
Mimosa_porrecta.fruit.epicarp.type = 'monospermic'
Mimosa_porrecta.fruit.epicarp.trichomes = new Trichomes()
Mimosa_porrecta.fruit.epicarp.trichomes.porrect = new Porrect()
Mimosa_porrecta.fruit.epicarp.trichomes.porrect.are = 'present'
Mimosa_porrecta.fruit.epicarp.trichomes.porrect.density = 'densely'
Mimosa_porrecta.fruit.epicarp.trichomes.filiform = new Filiform()
Mimosa_porrecta.fruit.epicarp.trichomes.filiform.are = 'present'
Mimosa_porrecta.fruit.epicarp.trichomes.filiform.density = 'densely'
Mimosa_porrecta.fruit.numberOfSeeds = 2-5

Mimosa_porrecta.seed = new Seed()
Mimosa_porrecta.seed.setHeightMinMax(4, 4.5)
Mimosa_porrecta.seed.setWidthMinMax(3, 3.2)
Mimosa_porrecta.seed.shape = 'obovate'
Mimosa_porrecta.seed.pleurogram = 'apical-basal'

// Description authorship
Mimosa_porrecta.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_porrecta.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})

// Sources
/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = 2014
source1.title = 'A new species of *Mimosa* (Leguminosae) from Brazil'
source1.journal = 'Phytotaxa'
source1.volume = 183
source1.number = 3
source1.pages = 131-138

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2014
source2.title = 'A new species of *Mimosa* (Leguminosae) from Brazil'
source2.journal = 'Phytotaxa'
source2.volume = 183
source2.number = 3
source2.pages = 131-138
source2.figure = '2A'
source2.obtainingMethod = 'photo'
Mimosa_porrecta.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = 2014
source3.title = 'A new species of *Mimosa* (Leguminosae) from Brazil'
source3.journal = 'Phytotaxa'
source3.volume = 183
source3.number = 3
source3.pages = 131-138
source3.figure = '2B'
source3.obtainingMethod = 'photo'
Mimosa_porrecta.leaf.petiole.addSource(source3)

const source4 = new Source()
source4.sourceType = 'article'
source4.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source4.year = 2014
source4.title = 'A new species of *Mimosa* (Leguminosae) from Brazil'
source4.journal = 'Phytotaxa'
source4.volume = 183
source4.number = 3
source4.pages = 131-138
source4.figure = '2C'
source4.obtainingMethod = 'photo'
Mimosa_porrecta.stems.addSource(source4)
Mimosa_porrecta.inflorescence.addSource(source4)

const source5 = new Source()
source5.sourceType = 'article'
source5.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source5.year = 2014
source5.title = 'A new species of *Mimosa* (Leguminosae) from Brazil'
source5.journal = 'Phytotaxa'
source5.volume = 183
source5.number = 3
source5.pages = 131-138
source5.figure = '2D'
source5.obtainingMethod = 'photo'
Mimosa_porrecta.fruit.addSource(source5)

const source6 = new Source()
source6.sourceType = 'article'
source6.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source6.year = 2014
source6.title = 'A new species of *Mimosa* (Leguminosae) from Brazil'
source6.journal = 'Phytotaxa'
source6.volume = 183
source6.number = 3
source6.pages = 131-138
source6.figure = '3'
source6.obtainingMethod = 'drawing'
Mimosa_porrecta.addSource(source6)

const source7 = new Source()
source7.sourceType = 'article'
source7.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source7.year = 2014
source7.title = 'A new species of *Mimosa* (Leguminosae) from Brazil'
source7.journal = 'Phytotaxa'
source7.volume = 183
source7.number = 3
source7.pages = 131-138
source7.figure = '4A'
source7.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.adaxial.trichomes.filiform.addSource(source7)

const source8 = new Source()
source8.sourceType = 'article'
source8.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source8.year = 2014
source8.title = 'A new species of *Mimosa* (Leguminosae) from Brazil'
source8.journal = 'Phytotaxa'
source8.volume = 183
source8.number = 3
source8.pages = 131-138
source8.figure = '4B'
source8.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.granular.addSource(source8)
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.porrect.addSource(source8)

const source9 = new Source()
source9.sourceType = 'article'
source9.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source9.year = 2014
source9.title = 'A new species of *Mimosa* (Leguminosae) from Brazil'
source9.journal = 'Phytotaxa'
source9.volume = 183
source9.number = 3
source9.pages = 131-138
source9.figure = '4C'
source9.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_porrecta.fruit.replum.trichomes.dendritic.addSource(source9)

const source10 = new Source()
source10.sourceType = 'article'
source10.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source10.year = 2014
source10.title = 'A new species of *Mimosa* (Leguminosae) from Brazil'
source10.journal = 'Phytotaxa'
source10.volume = 183
source10.number = 3
source10.pages = 131-138
source10.figure = '4D'
source10.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.porrect.addSource(source10)

const source11 = new Source()
source11.sourceType = 'article'
source11.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source11.year = 2014
source11.title = 'A new species of *Mimosa* (Leguminosae) from Brazil'
source11.journal = 'Phytotaxa'
source11.volume = 183
source11.number = 3
source11.pages = 131-138
source11.figure = '5A,B'
source11.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_porrecta.pollen.addSource(source11)

const source12 = new Source()
source12.sourceType = 'article'
source12.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source12.year = 2020
source12.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source12.journal = 'Flora'
source12.number = 272
source12.pages = 151702
source12.figure = '6H'
source12.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.porrect.addSource(source12)
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.granular.addSource(source12)

const source13 = new Source()
source13.sourceType = 'article'
source13.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source13.year = 2020
source13.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source13.journal = 'Flora'
source13.number = 272
source13.pages = 151702
source13.figure = '6I'
source13.obtainingMethod = 'opticalMicroscope'
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.porrect.addSource(source13)
Mimosa_porrecta.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.addSource(source13)

// Export Mimosa porrecta
export { Mimosa_porrecta }