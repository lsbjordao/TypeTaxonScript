// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
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


// Description of Mimosa ramosissima
const Mimosa_ramosissima = new Mimosa()
Mimosa_ramosissima.specificEpithet = 'ramosissima'

Mimosa_ramosissima.stems = new Stems()

Mimosa_ramosissima.stipule = new Stipule()
Mimosa_ramosissima.stipule.margin = new MarginStipule()
Mimosa_ramosissima.stipule.adaxial = new AdaxialStipule()
Mimosa_ramosissima.stipule.abaxial = new AbaxialStipule()

Mimosa_ramosissima.leaf = new Leaf()
Mimosa_ramosissima.leaf.petiole = new Petiole()
Mimosa_ramosissima.leaf.bipinnate = new Bipinnate()
Mimosa_ramosissima.leaf.bipinnate.rachis = new Rachis()
Mimosa_ramosissima.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_ramosissima.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_ramosissima.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_ramosissima.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_ramosissima.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_ramosissima.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(4, 6)
Mimosa_ramosissima.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_ramosissima.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_ramosissima.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_ramosissima.inflorescence = new Inflorescence()
Mimosa_ramosissima.inflorescence.peduncle = new Peduncle()
Mimosa_ramosissima.inflorescence.capitate = new CapitateInflorescence()

Mimosa_ramosissima.flower = new Flower()
Mimosa_ramosissima.flower.bracteole = new Bracteole()
Mimosa_ramosissima.flower.merism = '4-merous'
Mimosa_ramosissima.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_ramosissima.flower.calyx = new Calyx()
Mimosa_ramosissima.flower.calyx.shape = 'campanulate'
Mimosa_ramosissima.flower.corolla = new Corolla()
Mimosa_ramosissima.flower.corolla.shape = 'campanulate'

Mimosa_ramosissima.androecium = new Androecium()
Mimosa_ramosissima.androecium.filaments = new Filaments()
Mimosa_ramosissima.androecium.filaments.colour = 'pinkish'

Mimosa_ramosissima.ginoecium = new Ginoecium()
Mimosa_ramosissima.ginoecium.ovary = new Ovary()

Mimosa_ramosissima.fruit = new Fruit()
Mimosa_ramosissima.fruit.stipe = new Stipe()
Mimosa_ramosissima.fruit.replum = new Replum()
Mimosa_ramosissima.fruit.epicarp = new Epicarp()

Mimosa_ramosissima.seed = new Seed()


// Description authorship
Mimosa_ramosissima.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_ramosissima.descriptionAuthorship.addAuthor({
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
Mimosa_ramosissima.addSource(source0)

// Export Mimosa ramosissima
export { Mimosa_ramosissima }