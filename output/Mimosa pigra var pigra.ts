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


// Description of Mimosa pigra var pigra
const Mimosa_pigra var pigra = new Mimosa()
Mimosa_pigra var pigra.specificEpithet = 'pigra var pigra'

Mimosa_pigra var pigra.stems = new Stems()

Mimosa_pigra var pigra.stipule = new Stipule()
Mimosa_pigra var pigra.stipule.margin = new MarginStipule()
Mimosa_pigra var pigra.stipule.adaxial = new AdaxialStipule()
Mimosa_pigra var pigra.stipule.abaxial = new AbaxialStipule()

Mimosa_pigra var pigra.leaf = new Leaf()
Mimosa_pigra var pigra.leaf.petiole = new Petiole()
Mimosa_pigra var pigra.leaf.bipinnate = new Bipinnate()
Mimosa_pigra var pigra.leaf.bipinnate.rachis = new Rachis()
Mimosa_pigra var pigra.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pigra var pigra.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pigra var pigra.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(7, 18)
Mimosa_pigra var pigra.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pigra var pigra.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pigra var pigra.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pigra var pigra.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 18)
Mimosa_pigra var pigra.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pigra var pigra.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pigra var pigra.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pigra var pigra.inflorescence = new Inflorescence()
Mimosa_pigra var pigra.inflorescence.peduncle = new Peduncle()
Mimosa_pigra var pigra.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pigra var pigra.flower = new Flower()
Mimosa_pigra var pigra.flower.bracteole = new Bracteole()
Mimosa_pigra var pigra.flower.merism = '4-merous'
Mimosa_pigra var pigra.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_pigra var pigra.flower.calyx = new Calyx()
Mimosa_pigra var pigra.flower.calyx.shape = 'pappiform'
Mimosa_pigra var pigra.flower.corolla = new Corolla()
Mimosa_pigra var pigra.flower.corolla.shape = 'campanulate'

Mimosa_pigra var pigra.androecium = new Androecium()
Mimosa_pigra var pigra.androecium.filaments = new Filaments()
Mimosa_pigra var pigra.androecium.filaments.colour = 'withish'

Mimosa_pigra var pigra.ginoecium = new Ginoecium()
Mimosa_pigra var pigra.ginoecium.ovary = new Ovary()

Mimosa_pigra var pigra.fruit = new Fruit()
Mimosa_pigra var pigra.fruit.stipe = new Stipe()
Mimosa_pigra var pigra.fruit.replum = new Replum()
Mimosa_pigra var pigra.fruit.epicarp = new Epicarp()

Mimosa_pigra var pigra.seed = new Seed()


// Description authorship
Mimosa_pigra var pigra.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pigra var pigra.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa pigra var pigra
export { Mimosa_pigra var pigra }