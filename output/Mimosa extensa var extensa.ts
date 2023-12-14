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


// Description of Mimosa extensa var extensa
const Mimosa_extensa var extensa = new Mimosa()
Mimosa_extensa var extensa.specificEpithet = 'extensa var extensa'

Mimosa_extensa var extensa.stems = new Stems()

Mimosa_extensa var extensa.stipule = new Stipule()
Mimosa_extensa var extensa.stipule.margin = new MarginStipule()
Mimosa_extensa var extensa.stipule.adaxial = new AdaxialStipule()
Mimosa_extensa var extensa.stipule.abaxial = new AbaxialStipule()

Mimosa_extensa var extensa.leaf = new Leaf()
Mimosa_extensa var extensa.leaf.petiole = new Petiole()
Mimosa_extensa var extensa.leaf.bipinnate = new Bipinnate()
Mimosa_extensa var extensa.leaf.bipinnate.rachis = new Rachis()
Mimosa_extensa var extensa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_extensa var extensa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_extensa var extensa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 3)
Mimosa_extensa var extensa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_extensa var extensa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_extensa var extensa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_extensa var extensa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_extensa var extensa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_extensa var extensa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_extensa var extensa.inflorescence = new Inflorescence()
Mimosa_extensa var extensa.inflorescence.peduncle = new Peduncle()
Mimosa_extensa var extensa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_extensa var extensa.flower = new Flower()
Mimosa_extensa var extensa.flower.bracteole = new Bracteole()
Mimosa_extensa var extensa.flower.merism = '5-merous'
Mimosa_extensa var extensa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_extensa var extensa.flower.calyx = new Calyx()
Mimosa_extensa var extensa.flower.calyx.shape = 'campanulate'
Mimosa_extensa var extensa.flower.corolla = new Corolla()
Mimosa_extensa var extensa.flower.corolla.shape = 'campanulate'

Mimosa_extensa var extensa.androecium = new Androecium()
Mimosa_extensa var extensa.androecium.filaments = new Filaments()
Mimosa_extensa var extensa.androecium.filaments.colour = 'withish'

Mimosa_extensa var extensa.ginoecium = new Ginoecium()
Mimosa_extensa var extensa.ginoecium.ovary = new Ovary()

Mimosa_extensa var extensa.fruit = new Fruit()
Mimosa_extensa var extensa.fruit.stipe = new Stipe()
Mimosa_extensa var extensa.fruit.replum = new Replum()
Mimosa_extensa var extensa.fruit.epicarp = new Epicarp()

Mimosa_extensa var extensa.seed = new Seed()


// Description authorship
Mimosa_extensa var extensa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_extensa var extensa.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa extensa var extensa
export { Mimosa_extensa var extensa }