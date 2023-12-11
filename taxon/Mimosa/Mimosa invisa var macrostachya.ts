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
import { Filiform } from '../../characters/v1/Trichomes'
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
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa invisa_var_macrostachya
const Mimosa_invisa_var_macrostachya = new Mimosa()
Mimosa_invisa_var_macrostachya.specificEpithet = 'invisa var. macrostachya'

Mimosa_invisa_var_macrostachya.stems = new Stems()

Mimosa_invisa_var_macrostachya.stipule = new Stipule()
Mimosa_invisa_var_macrostachya.stipule.margin = new MarginStipule()
Mimosa_invisa_var_macrostachya.stipule.adaxial = new AdaxialStipule()
Mimosa_invisa_var_macrostachya.stipule.abaxial = new AbaxialStipule()

Mimosa_invisa_var_macrostachya.leaf = new Leaf()
Mimosa_invisa_var_macrostachya.leaf.petiole = new Petiole()
Mimosa_invisa_var_macrostachya.leaf.bipinnate = new Bipinnate()
Mimosa_invisa_var_macrostachya.leaf.bipinnate.rachis = new Rachis()
Mimosa_invisa_var_macrostachya.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(14, 22)
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(36, 48)
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin.trichomes = new Trichomes()
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform = new Filiform()
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform.are = 'present'
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform.orientation = 'antrorse'
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform.numberOfCells = 'unicelullar'
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_invisa_var_macrostachya.inflorescence = new Inflorescence()
Mimosa_invisa_var_macrostachya.inflorescence.peduncle = new Peduncle()
Mimosa_invisa_var_macrostachya.inflorescence.spicate = new Spicate()

Mimosa_invisa_var_macrostachya.flower = new Flower()
Mimosa_invisa_var_macrostachya.flower.bracteole = new Bracteole()
Mimosa_invisa_var_macrostachya.flower.merism = ['5-merous', '6-merous']
Mimosa_invisa_var_macrostachya.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_invisa_var_macrostachya.flower.calyx = new Calyx()
Mimosa_invisa_var_macrostachya.flower.calyx.shape = 'campanulate'
Mimosa_invisa_var_macrostachya.flower.corolla = new Corolla()
Mimosa_invisa_var_macrostachya.flower.corolla.shape = 'turbinate'

Mimosa_invisa_var_macrostachya.androecium = new Androecium()
Mimosa_invisa_var_macrostachya.androecium.filaments = new Filaments()
Mimosa_invisa_var_macrostachya.androecium.filaments.colour = 'pinkish'

Mimosa_invisa_var_macrostachya.ginoecium = new Ginoecium()
Mimosa_invisa_var_macrostachya.ginoecium.ovary = new Ovary()

Mimosa_invisa_var_macrostachya.fruit = new Fruit()
Mimosa_invisa_var_macrostachya.fruit.stipe = new Stipe()
Mimosa_invisa_var_macrostachya.fruit.replum = new Replum()
Mimosa_invisa_var_macrostachya.fruit.epicarp = new Epicarp()

Mimosa_invisa_var_macrostachya.seed = new Seed()


// Description authorship
Mimosa_invisa_var_macrostachya.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_invisa_var_macrostachya.descriptionAuthorship.addAuthor({
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
Mimosa_invisa_var_macrostachya.addSource(source0)

/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = 2020
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source1.journal = 'Flora'
source1.number = 272
source1.pages = 151702
source1.figure = '1E'
source1.obtainingMethod = 'opticalMicroscope'
Mimosa_invisa_var_macrostachya.leaf.bipinnate.pinnae.leaflet.margin.trichomes.filiform.addSource(source1)

// Export Mimosa invisa_var_macrostachya
export { Mimosa_invisa_var_macrostachya }