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


// Description of Mimosa somnians subsp lasiocarpa var lasiocarpa
const Mimosa_somnians subsp lasiocarpa var lasiocarpa = new Mimosa()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.specificEpithet = 'somnians subsp lasiocarpa var lasiocarpa'

Mimosa_somnians subsp lasiocarpa var lasiocarpa.stems = new Stems()

Mimosa_somnians subsp lasiocarpa var lasiocarpa.stipule = new Stipule()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.stipule.margin = new MarginStipule()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.stipule.adaxial = new AdaxialStipule()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.stipule.abaxial = new AbaxialStipule()

Mimosa_somnians subsp lasiocarpa var lasiocarpa.leaf = new Leaf()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.leaf.petiole = new Petiole()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.leaf.bipinnate = new Bipinnate()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.leaf.bipinnate.rachis = new Rachis()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(3, 7)
Mimosa_somnians subsp lasiocarpa var lasiocarpa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_somnians subsp lasiocarpa var lasiocarpa.inflorescence = new Inflorescence()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.inflorescence.peduncle = new Peduncle()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_somnians subsp lasiocarpa var lasiocarpa.flower = new Flower()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.flower.bracteole = new Bracteole()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.flower.merism = '4-merous'
Mimosa_somnians subsp lasiocarpa var lasiocarpa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_somnians subsp lasiocarpa var lasiocarpa.flower.calyx = new Calyx()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.flower.calyx.shape = 'campanulate'
Mimosa_somnians subsp lasiocarpa var lasiocarpa.flower.corolla = new Corolla()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.flower.corolla.shape = 'turbinate'

Mimosa_somnians subsp lasiocarpa var lasiocarpa.androecium = new Androecium()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.androecium.filaments = new Filaments()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.androecium.filaments.colour = 'pinkish'

Mimosa_somnians subsp lasiocarpa var lasiocarpa.ginoecium = new Ginoecium()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.ginoecium.ovary = new Ovary()

Mimosa_somnians subsp lasiocarpa var lasiocarpa.fruit = new Fruit()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.fruit.stipe = new Stipe()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.fruit.replum = new Replum()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.fruit.epicarp = new Epicarp()

Mimosa_somnians subsp lasiocarpa var lasiocarpa.seed = new Seed()


// Description authorship
Mimosa_somnians subsp lasiocarpa var lasiocarpa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_somnians subsp lasiocarpa var lasiocarpa.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa somnians subsp lasiocarpa var lasiocarpa
export { Mimosa_somnians subsp lasiocarpa var lasiocarpa }