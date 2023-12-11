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


// Description of Mimosa xanthocentra var xanthocentra
const Mimosa_xanthocentra var xanthocentra = new Mimosa()
Mimosa_xanthocentra var xanthocentra.specificEpithet = 'xanthocentra var xanthocentra'

Mimosa_xanthocentra var xanthocentra.stems = new Stems()

Mimosa_xanthocentra var xanthocentra.stipule = new Stipule()
Mimosa_xanthocentra var xanthocentra.stipule.margin = new MarginStipule()
Mimosa_xanthocentra var xanthocentra.stipule.adaxial = new AdaxialStipule()
Mimosa_xanthocentra var xanthocentra.stipule.abaxial = new AbaxialStipule()

Mimosa_xanthocentra var xanthocentra.leaf = new Leaf()
Mimosa_xanthocentra var xanthocentra.leaf.petiole = new Petiole()
Mimosa_xanthocentra var xanthocentra.leaf.bipinnate = new Bipinnate()
Mimosa_xanthocentra var xanthocentra.leaf.bipinnate.rachis = new Rachis()
Mimosa_xanthocentra var xanthocentra.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_xanthocentra var xanthocentra.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_xanthocentra var xanthocentra.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_xanthocentra var xanthocentra.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_xanthocentra var xanthocentra.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_xanthocentra var xanthocentra.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(1)
Mimosa_xanthocentra var xanthocentra.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_xanthocentra var xanthocentra.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_xanthocentra var xanthocentra.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_xanthocentra var xanthocentra.inflorescence = new Inflorescence()
Mimosa_xanthocentra var xanthocentra.inflorescence.peduncle = new Peduncle()
Mimosa_xanthocentra var xanthocentra.inflorescence.capitate = new CapitateInflorescence()

Mimosa_xanthocentra var xanthocentra.flower = new Flower()
Mimosa_xanthocentra var xanthocentra.flower.bracteole = new Bracteole()
Mimosa_xanthocentra var xanthocentra.flower.merism = '4-merous'
Mimosa_xanthocentra var xanthocentra.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_xanthocentra var xanthocentra.flower.calyx = new Calyx()
Mimosa_xanthocentra var xanthocentra.flower.calyx.shape = 'pappiform'
Mimosa_xanthocentra var xanthocentra.flower.corolla = new Corolla()
Mimosa_xanthocentra var xanthocentra.flower.corolla.shape = 'campanulate'

Mimosa_xanthocentra var xanthocentra.androecium = new Androecium()
Mimosa_xanthocentra var xanthocentra.androecium.filaments = new Filaments()
Mimosa_xanthocentra var xanthocentra.androecium.filaments.colour = 'pinkish'

Mimosa_xanthocentra var xanthocentra.ginoecium = new Ginoecium()
Mimosa_xanthocentra var xanthocentra.ginoecium.ovary = new Ovary()

Mimosa_xanthocentra var xanthocentra.fruit = new Fruit()
Mimosa_xanthocentra var xanthocentra.fruit.stipe = new Stipe()
Mimosa_xanthocentra var xanthocentra.fruit.replum = new Replum()
Mimosa_xanthocentra var xanthocentra.fruit.epicarp = new Epicarp()

Mimosa_xanthocentra var xanthocentra.seed = new Seed()


// Description authorship
Mimosa_xanthocentra var xanthocentra.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_xanthocentra var xanthocentra.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa xanthocentra var xanthocentra
export { Mimosa_xanthocentra var xanthocentra }