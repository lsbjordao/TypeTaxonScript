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


// Description of Mimosa lundiana
const Mimosa_lundiana = new Mimosa()
Mimosa_lundiana.specificEpithet = 'lundiana'

Mimosa_lundiana.stems = new Stems()

Mimosa_lundiana.stipule = new Stipule()
Mimosa_lundiana.stipule.margin = new MarginStipule()
Mimosa_lundiana.stipule.adaxial = new AdaxialStipule()
Mimosa_lundiana.stipule.abaxial = new AbaxialStipule()

Mimosa_lundiana.leaf = new Leaf()
Mimosa_lundiana.leaf.petiole = new Petiole()
Mimosa_lundiana.leaf.bipinnate = new Bipinnate()
Mimosa_lundiana.leaf.bipinnate.rachis = new Rachis()
Mimosa_lundiana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_lundiana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_lundiana.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_lundiana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_lundiana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_lundiana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_lundiana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 13)
Mimosa_lundiana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_lundiana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_lundiana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_lundiana.inflorescence = new Inflorescence()
Mimosa_lundiana.inflorescence.peduncle = new Peduncle()
Mimosa_lundiana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_lundiana.flower = new Flower()
Mimosa_lundiana.flower.bracteole = new Bracteole()
Mimosa_lundiana.flower.merism = '4-merous'
Mimosa_lundiana.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_lundiana.flower.calyx = new Calyx()
Mimosa_lundiana.flower.calyx.shape = 'campanulate'
Mimosa_lundiana.flower.corolla = new Corolla()
Mimosa_lundiana.flower.corolla.shape = ['campanulate', 'turbinate']

Mimosa_lundiana.androecium = new Androecium()
Mimosa_lundiana.androecium.filaments = new Filaments()
Mimosa_lundiana.androecium.filaments.colour = 'pinkish'

Mimosa_lundiana.ginoecium = new Ginoecium()
Mimosa_lundiana.ginoecium.ovary = new Ovary()

Mimosa_lundiana.fruit = new Fruit()
Mimosa_lundiana.fruit.stipe = new Stipe()
Mimosa_lundiana.fruit.replum = new Replum()
Mimosa_lundiana.fruit.epicarp = new Epicarp()

Mimosa_lundiana.seed = new Seed()


// Description authorship
Mimosa_lundiana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_lundiana.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})


// Sources


// Export Mimosa lundiana
export { Mimosa_lundiana }