// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Dendritic, Stellate, Fasciculate } from '../../characters/v1/Trichomes'
import { StellateLepidote } from '../../characters/v1/Trichomes/Stellate'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa furfuracea
const Mimosa_furfuracea = new Mimosa()
Mimosa_furfuracea.specificEpithet = 'furfuracea'

Mimosa_furfuracea.stems = new Stems()
Mimosa_furfuracea.stems.trichomes = new Trichomes()
Mimosa_furfuracea.stems.trichomes.dendritic = new Dendritic()
Mimosa_furfuracea.stems.trichomes.dendritic.are = 'present'

Mimosa_furfuracea.stipule = new Stipule()
Mimosa_furfuracea.stipule.margin = new MarginStipule()
Mimosa_furfuracea.stipule.adaxial = new AdaxialStipule()
Mimosa_furfuracea.stipule.abaxial = new AbaxialStipule()

Mimosa_furfuracea.leaf = new Leaf()
Mimosa_furfuracea.leaf.petiole = new Petiole()
Mimosa_furfuracea.leaf.bipinnate = new Bipinnate()
Mimosa_furfuracea.leaf.bipinnate.rachis = new Rachis()
Mimosa_furfuracea.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_furfuracea.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_furfuracea.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 3)
Mimosa_furfuracea.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_furfuracea.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(6)
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(9, 16)
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate = new Fasciculate()
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate.are = 'present'

Mimosa_furfuracea.inflorescence = new Inflorescence()
Mimosa_furfuracea.inflorescence.peduncle = new Peduncle()
Mimosa_furfuracea.inflorescence.capitate = new CapitateInflorescence()

Mimosa_furfuracea.flower = new Flower()
Mimosa_furfuracea.flower.bracteole = new Bracteole()
Mimosa_furfuracea.flower.merism = '4-merous'
Mimosa_furfuracea.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_furfuracea.flower.calyx = new Calyx()
Mimosa_furfuracea.flower.calyx.shape = 'pateliform'
Mimosa_furfuracea.flower.corolla = new Corolla()
Mimosa_furfuracea.flower.corolla.shape = 'campanulate'
Mimosa_furfuracea.flower.corolla.trichomes = new Trichomes()
Mimosa_furfuracea.flower.corolla.trichomes.stellate = new Stellate()
Mimosa_furfuracea.flower.corolla.trichomes.stellate.lepidote = new StellateLepidote()
Mimosa_furfuracea.flower.corolla.trichomes.stellate.lepidote.are = 'present'

Mimosa_furfuracea.androecium = new Androecium()
Mimosa_furfuracea.androecium.filaments = new Filaments()
Mimosa_furfuracea.androecium.filaments.colour = 'yellowish'

Mimosa_furfuracea.ginoecium = new Ginoecium()
Mimosa_furfuracea.ginoecium.ovary = new Ovary()

Mimosa_furfuracea.fruit = new Fruit()
Mimosa_furfuracea.fruit.stipe = new Stipe()
Mimosa_furfuracea.fruit.replum = new Replum()
Mimosa_furfuracea.fruit.epicarp = new Epicarp()

Mimosa_furfuracea.seed = new Seed()


// Description authorship
Mimosa_furfuracea.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_furfuracea.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})

// Sources
const source0 = new Source()
source0.sourceType = 'article'
source0.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source0.year = 2018
source0.title = 'Toward a Census of *Mimosa* (Leguminosae) in the Atlantic Domain, Southeastern Brazil'
source0.journal = 'Systematic Botany'
source0.volume = 43
source0.number = 1
source0.pages = 162-197
Mimosa_furfuracea.addSource(source0)

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