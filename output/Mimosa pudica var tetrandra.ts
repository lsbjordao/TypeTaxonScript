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


// Description of Mimosa pudica var tetrandra
const Mimosa_pudica var tetrandra = new Mimosa()
Mimosa_pudica var tetrandra.specificEpithet = 'pudica var tetrandra'

Mimosa_pudica var tetrandra.stems = new Stems()

Mimosa_pudica var tetrandra.stipule = new Stipule()
Mimosa_pudica var tetrandra.stipule.margin = new MarginStipule()
Mimosa_pudica var tetrandra.stipule.adaxial = new AdaxialStipule()
Mimosa_pudica var tetrandra.stipule.abaxial = new AbaxialStipule()

Mimosa_pudica var tetrandra.leaf = new Leaf()
Mimosa_pudica var tetrandra.leaf.petiole = new Petiole()
Mimosa_pudica var tetrandra.leaf.bipinnate = new Bipinnate()
Mimosa_pudica var tetrandra.leaf.bipinnate.rachis = new Rachis()
Mimosa_pudica var tetrandra.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pudica var tetrandra.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pudica var tetrandra.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1)
Mimosa_pudica var tetrandra.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pudica var tetrandra.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pudica var tetrandra.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pudica var tetrandra.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(1)
Mimosa_pudica var tetrandra.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(2)
Mimosa_pudica var tetrandra.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pudica var tetrandra.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pudica var tetrandra.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pudica var tetrandra.inflorescence = new Inflorescence()
Mimosa_pudica var tetrandra.inflorescence.peduncle = new Peduncle()
Mimosa_pudica var tetrandra.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pudica var tetrandra.flower = new Flower()
Mimosa_pudica var tetrandra.flower.bracteole = new Bracteole()
Mimosa_pudica var tetrandra.flower.merism = '4-merous'
Mimosa_pudica var tetrandra.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_pudica var tetrandra.flower.calyx = new Calyx()
Mimosa_pudica var tetrandra.flower.calyx.shape = 'campanulate'
Mimosa_pudica var tetrandra.flower.corolla = new Corolla()
Mimosa_pudica var tetrandra.flower.corolla.shape = 'campanulate'

Mimosa_pudica var tetrandra.androecium = new Androecium()
Mimosa_pudica var tetrandra.androecium.filaments = new Filaments()
Mimosa_pudica var tetrandra.androecium.filaments.colour = 'pinkish'

Mimosa_pudica var tetrandra.ginoecium = new Ginoecium()
Mimosa_pudica var tetrandra.ginoecium.ovary = new Ovary()

Mimosa_pudica var tetrandra.fruit = new Fruit()
Mimosa_pudica var tetrandra.fruit.stipe = new Stipe()
Mimosa_pudica var tetrandra.fruit.replum = new Replum()
Mimosa_pudica var tetrandra.fruit.epicarp = new Epicarp()

Mimosa_pudica var tetrandra.seed = new Seed()


// Description authorship
Mimosa_pudica var tetrandra.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pudica var tetrandra.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa pudica var tetrandra
export { Mimosa_pudica var tetrandra }