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


// Description of Mimosa oblonga var oblonga
const Mimosa_oblonga var oblonga = new Mimosa()
Mimosa_oblonga var oblonga.specificEpithet = 'oblonga var oblonga'

Mimosa_oblonga var oblonga.stems = new Stems()

Mimosa_oblonga var oblonga.stipule = new Stipule()
Mimosa_oblonga var oblonga.stipule.margin = new MarginStipule()
Mimosa_oblonga var oblonga.stipule.adaxial = new AdaxialStipule()
Mimosa_oblonga var oblonga.stipule.abaxial = new AbaxialStipule()

Mimosa_oblonga var oblonga.leaf = new Leaf()
Mimosa_oblonga var oblonga.leaf.petiole = new Petiole()
Mimosa_oblonga var oblonga.leaf.bipinnate = new Bipinnate()
Mimosa_oblonga var oblonga.leaf.bipinnate.rachis = new Rachis()
Mimosa_oblonga var oblonga.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_oblonga var oblonga.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_oblonga var oblonga.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_oblonga var oblonga.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_oblonga var oblonga.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_oblonga var oblonga.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_oblonga var oblonga.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(1)
Mimosa_oblonga var oblonga.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_oblonga var oblonga.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_oblonga var oblonga.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_oblonga var oblonga.inflorescence = new Inflorescence()
Mimosa_oblonga var oblonga.inflorescence.peduncle = new Peduncle()
Mimosa_oblonga var oblonga.inflorescence.capitate = new CapitateInflorescence()

Mimosa_oblonga var oblonga.flower = new Flower()
Mimosa_oblonga var oblonga.flower.bracteole = new Bracteole()
Mimosa_oblonga var oblonga.flower.merism = '4-merous'
Mimosa_oblonga var oblonga.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_oblonga var oblonga.flower.calyx = new Calyx()
Mimosa_oblonga var oblonga.flower.calyx.shape = 'campanulate'
Mimosa_oblonga var oblonga.flower.corolla = new Corolla()
Mimosa_oblonga var oblonga.flower.corolla.shape = 'campanulate'

Mimosa_oblonga var oblonga.androecium = new Androecium()
Mimosa_oblonga var oblonga.androecium.filaments = new Filaments()
Mimosa_oblonga var oblonga.androecium.filaments.colour = 'pinkish'

Mimosa_oblonga var oblonga.ginoecium = new Ginoecium()
Mimosa_oblonga var oblonga.ginoecium.ovary = new Ovary()

Mimosa_oblonga var oblonga.fruit = new Fruit()
Mimosa_oblonga var oblonga.fruit.stipe = new Stipe()
Mimosa_oblonga var oblonga.fruit.replum = new Replum()
Mimosa_oblonga var oblonga.fruit.epicarp = new Epicarp()

Mimosa_oblonga var oblonga.seed = new Seed()


// Description authorship
Mimosa_oblonga var oblonga.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_oblonga var oblonga.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa oblonga var oblonga
export { Mimosa_oblonga var oblonga }