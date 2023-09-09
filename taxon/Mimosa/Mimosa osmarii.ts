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
import { Granular, Filiform } from '../../characters/v1/Trichomes'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { CapitateInflorescence, Peduncle } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Lobes } from '../../characters/v1/Flower/Corolla'
import { Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa osmarii
const Mimosa_osmarii = new Mimosa()
Mimosa_osmarii.specificEpithet = 'osmarii'

Mimosa_osmarii.habit = 'herb'
Mimosa_osmarii.lightStrategy = ['sciophilous', 'semisciophilous']

Mimosa_osmarii.stems = new Stems()
Mimosa_osmarii.stems.orientation = 'scandent'
Mimosa_osmarii.stems.trichomes = new Trichomes
Mimosa_osmarii.stems.trichomes.granular = new Granular()
Mimosa_osmarii.stems.trichomes.granular.are = 'present'
Mimosa_osmarii.stems.prickles = new Prickles()
Mimosa_osmarii.stems.prickles.orientation = 'decurved'
Mimosa_osmarii.stems.prickles.length.max = 2


Mimosa_osmarii.stipule = new Stipule()
Mimosa_osmarii.stipule.setLengthMinMax(0.8, 2)
Mimosa_osmarii.stipule.shape = 'lanceolate'
Mimosa_osmarii.stipule.nervation = '1-nerved'
Mimosa_osmarii.stipule.persistance = 'persistent'
Mimosa_osmarii.stipule.margin = new MarginStipule()
Mimosa_osmarii.stipule.margin.trichomes = new Trichomes()
Mimosa_osmarii.stipule.margin.trichomes.filiform = new Filiform()
Mimosa_osmarii.stipule.margin.trichomes.filiform.are = 'present or absent'
Mimosa_osmarii.stipule.abaxial = new AbaxialStipule()
Mimosa_osmarii.stipule.abaxial.trichomes = new Trichomes()
Mimosa_osmarii.stipule.abaxial.trichomes.granular = new Granular()
Mimosa_osmarii.stipule.abaxial.trichomes.granular.are = 'present or absent'

Mimosa_osmarii.leaf = new Leaf()
Mimosa_osmarii.leaf.petiole = new Petiole()
Mimosa_osmarii.leaf.petiole.setLengthMinMax(13, 35)
Mimosa_osmarii.leaf.petiole.transversalShape = '4-ribbed'
Mimosa_osmarii.leaf.petiole.prickles = new Prickles()
Mimosa_osmarii.leaf.petiole.prickles.orientation = 'decurved'
Mimosa_osmarii.leaf.bipinnate = new Bipinnate()
Mimosa_osmarii.leaf.bipinnate.rachis = new Rachis()
Mimosa_osmarii.leaf.bipinnate.rachis.setLengthMinMax(5, 35)
Mimosa_osmarii.leaf.bipinnate.rachis.prickles = new Prickles()
Mimosa_osmarii.leaf.bipinnate.rachis.prickles.are = 'present'
Mimosa_osmarii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_osmarii.leaf.bipinnate.rachis.spicule.are = 'present or absent'
Mimosa_osmarii.leaf.bipinnate.rachis.spicule.setLengthMinMax(1, 1.5)
Mimosa_osmarii.leaf.bipinnate.rachis.spicule.shape = 'deltate'
Mimosa_osmarii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_osmarii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_osmarii.leaf.bipinnate.pinnae.paraphillidia.are = 'present'
Mimosa_osmarii.leaf.bipinnate.pinnae.paraphillidia.setLengthMinMax(0.2, 3)
Mimosa_osmarii.leaf.bipinnate.pinnae.paraphillidia.pairLength = 'equal'
Mimosa_osmarii.leaf.bipinnate.pinnae.paraphillidia.shape = ['lanceolate', 'linear']
// add 'developing 1–5.5 mm from the pinna-pulvinus and 1.1–3 mm from the first pair of leaflets, but always closer to the first pair than the pinna-pulvinus'

// fix
Mimosa_osmarii.leaf.bipinnate.pinnae.numberOfPairs.rarelyMin = 1
Mimosa_osmarii.leaf.bipinnate.pinnae.numberOfPairs.min = 2
Mimosa_osmarii.leaf.bipinnate.pinnae.numberOfPairs.max = 2
Mimosa_osmarii.leaf.bipinnate.pinnae.numberOfPairs.rarelyMax = 4
Mimosa_osmarii.leaf.bipinnate.pinnae.prickles = new Prickles()
Mimosa_osmarii.leaf.bipinnate.pinnae.prickles.orientation = 'decurved'
Mimosa_osmarii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_osmarii.leaf.bipinnate.pinnae.rachilla.prickles = new Prickles()
Mimosa_osmarii.leaf.bipinnate.pinnae.rachilla.prickles.are = 'present'
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
// add number of pairs in leaflet
// values: 2-3
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.innermostOfProximalPairReduced = 'yes'
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.setHeightMinMax(2, 7.5)
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.setWidthMinMax(1.3, 4.1)
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.shape = 'obovate'
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.base = ['oblique-acute', 'oblique-rounded', 'oblique-subcordate']
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.apex = ['mucronulate-obtuse', 'mucronulate-rounded']
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.margin.trichomes = new Trichomes()
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.margin.trichomes.are = 'absent'
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.adaxial.trichomes = new Trichomes()
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.adaxial.trichomes.granular = new Granular()
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.adaxial.trichomes.granular.are = 'present or absent'
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.granular = new Granular()
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.granular.are = 'present or absent'

Mimosa_osmarii.inflorescence = new Inflorescence()
Mimosa_osmarii.inflorescence.shape = 'moriform'
Mimosa_osmarii.inflorescence.capitate = new CapitateInflorescence()
Mimosa_osmarii.inflorescence.capitate.shape = 'globose'
// add diam? 
// value: 2.5-6 mm diam.
// 1–3-axillary
Mimosa_osmarii.inflorescence.peduncle = new Peduncle()
Mimosa_osmarii.inflorescence.peduncle.setLengthMinMax(18, 40)

Mimosa_osmarii.flower = new Flower()
Mimosa_osmarii.flower.bracteole = new Bracteole()
Mimosa_osmarii.flower.bracteole.setLengthMinMax(0.4, 0.9)
Mimosa_osmarii.flower.bracteole.shape = 'lanceolate'
Mimosa_osmarii.flower.bracteole.trichomes = new Trichomes()
Mimosa_osmarii.flower.bracteole.trichomes.granular = new Granular()
Mimosa_osmarii.flower.bracteole.trichomes.granular.are = 'present or absent'
Mimosa_osmarii.flower.merism = '4-merous'
// add merism 4(-5)
Mimosa_osmarii.flower.calyx = new Calyx()
Mimosa_osmarii.flower.calyx.setLengthMinMax(0.4, 0.6)
Mimosa_osmarii.flower.calyx.shape = 'campanulate'
// add shortly denticulate
Mimosa_osmarii.flower.corolla = new Corolla()
Mimosa_osmarii.flower.corolla.setLengthMinMax(2, 2.5)
Mimosa_osmarii.flower.corolla.shape = ['campanulate', 'turbinate']
Mimosa_osmarii.flower.corolla.lobes = new Lobes()
Mimosa_osmarii.flower.corolla.lobes.nervation = '1-nerved'
Mimosa_osmarii.androecium = new Androecium()
Mimosa_osmarii.androecium.filaments = new Filaments()
// add filaments 6–6.5 mm long
// add fused at base 0.2–0.5 mm long
Mimosa_osmarii.androecium.filaments.colour = 'pinkish'
Mimosa_osmarii.ginoecium = new Ginoecium()
Mimosa_osmarii.ginoecium.ovary = new Ovary()
Mimosa_osmarii.ginoecium.ovary.trichomes = new Trichomes()
Mimosa_osmarii.ginoecium.ovary.trichomes.are = 'absent'

Mimosa_osmarii.pollen = new Pollen()

Mimosa_osmarii.fruit = new Fruit()
Mimosa_osmarii.fruit.type = 'craspedium'
Mimosa_osmarii.fruit.setHeightMinMax(34, 38)
Mimosa_osmarii.fruit.setWidthMinMax(3.3, 3.5)
Mimosa_osmarii.fruit.shape = 'oblong'
// add slightly curved
Mimosa_osmarii.fruit.stipe = 'sessile'
// add stipe 3–5 mm long
Mimosa_osmarii.fruit.replum = new Replum()
Mimosa_osmarii.fruit.replum.shape = 'undulate'
Mimosa_osmarii.fruit.epicarp = new Epicarp()
Mimosa_osmarii.fruit.epicarp.type = 'monospermic'
Mimosa_osmarii.fruit.epicarp.trichomes = new Trichomes()
Mimosa_osmarii.fruit.epicarp.trichomes.granular = new Granular()
Mimosa_osmarii.fruit.epicarp.trichomes.granular.are = 'present'
// fix number of seeds
Mimosa_osmarii.fruit.numberOfSeeds = 6-9


// Description authorship
Mimosa_osmarii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_osmarii.descriptionAuthorship.addAuthor({
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
Mimosa_osmarii.addSource(source2)

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
Mimosa_osmarii.leaf.petiole.addSource(source3)

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
Mimosa_osmarii.stems.addSource(source4)
Mimosa_osmarii.inflorescence.addSource(source4)

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
Mimosa_osmarii.fruit.addSource(source5)

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
Mimosa_osmarii.addSource(source6)

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
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.adaxial.trichomes.filiform.addSource(source7)

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
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.granular.addSource(source8)
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.porrect.addSource(source8)

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
Mimosa_osmarii.fruit.replum.trichomes.dendritic.addSource(source9)

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
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.porrect.addSource(source10)

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
Mimosa_osmarii.pollen.addSource(source11)

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
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.porrect.addSource(source12)
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.granular.addSource(source12)

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
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.porrect.addSource(source13)
Mimosa_osmarii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.filiform.addSource(source13)

// Export Mimosa osmarii
export { Mimosa_osmarii }