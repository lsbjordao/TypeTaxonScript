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


// Description of Mimosa pudica var hispida
const Mimosa_pudica var hispida = new Mimosa()
Mimosa_pudica var hispida.specificEpithet = 'pudica var hispida'

Mimosa_pudica var hispida.stems = new Stems()

Mimosa_pudica var hispida.stipule = new Stipule()
Mimosa_pudica var hispida.stipule.margin = new MarginStipule()
Mimosa_pudica var hispida.stipule.adaxial = new AdaxialStipule()
Mimosa_pudica var hispida.stipule.abaxial = new AbaxialStipule()

Mimosa_pudica var hispida.leaf = new Leaf()
Mimosa_pudica var hispida.leaf.petiole = new Petiole()
Mimosa_pudica var hispida.leaf.bipinnate = new Bipinnate()
Mimosa_pudica var hispida.leaf.bipinnate.rachis = new Rachis()
Mimosa_pudica var hispida.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pudica var hispida.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pudica var hispida.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1)
Mimosa_pudica var hispida.leaf.bipinnate.pinnae.setNumberOfPairs(2)
Mimosa_pudica var hispida.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pudica var hispida.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pudica var hispida.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pudica var hispida.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(1)
Mimosa_pudica var hispida.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(2)
Mimosa_pudica var hispida.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pudica var hispida.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pudica var hispida.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pudica var hispida.inflorescence = new Inflorescence()
Mimosa_pudica var hispida.inflorescence.peduncle = new Peduncle()
Mimosa_pudica var hispida.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pudica var hispida.flower = new Flower()
Mimosa_pudica var hispida.flower.bracteole = new Bracteole()
Mimosa_pudica var hispida.flower.merism = '4-merous'
Mimosa_pudica var hispida.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_pudica var hispida.flower.calyx = new Calyx()
Mimosa_pudica var hispida.flower.calyx.shape = 'campanulate'
Mimosa_pudica var hispida.flower.corolla = new Corolla()
Mimosa_pudica var hispida.flower.corolla.shape = 'campanulate'

Mimosa_pudica var hispida.androecium = new Androecium()
Mimosa_pudica var hispida.androecium.filaments = new Filaments()
Mimosa_pudica var hispida.androecium.filaments.colour = 'pinkish'

Mimosa_pudica var hispida.ginoecium = new Ginoecium()
Mimosa_pudica var hispida.ginoecium.ovary = new Ovary()

Mimosa_pudica var hispida.fruit = new Fruit()
Mimosa_pudica var hispida.fruit.stipe = new Stipe()
Mimosa_pudica var hispida.fruit.replum = new Replum()
Mimosa_pudica var hispida.fruit.epicarp = new Epicarp()

Mimosa_pudica var hispida.seed = new Seed()


// Description authorship
Mimosa_pudica var hispida.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pudica var hispida.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa pudica var hispida
export { Mimosa_pudica var hispida }