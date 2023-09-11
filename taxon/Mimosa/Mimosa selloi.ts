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


// Description of Mimosa selloi
const Mimosa_selloi = new Mimosa()
Mimosa_selloi.specificEpithet = 'selloi'

Mimosa_selloi.stems = new Stems()

Mimosa_selloi.stipule = new Stipule()
Mimosa_selloi.stipule.margin = new MarginStipule()
Mimosa_selloi.stipule.adaxial = new AdaxialStipule()
Mimosa_selloi.stipule.abaxial = new AbaxialStipule()

Mimosa_selloi.leaf = new Leaf()
Mimosa_selloi.leaf.petiole = new Petiole()
Mimosa_selloi.leaf.bipinnate = new Bipinnate()
Mimosa_selloi.leaf.bipinnate.rachis = new Rachis()
Mimosa_selloi.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_selloi.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_selloi.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_selloi.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_selloi.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_selloi.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_selloi.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_selloi.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_selloi.inflorescence = new Inflorescence()
Mimosa_selloi.inflorescence.peduncle = new Peduncle()
Mimosa_selloi.inflorescence.capitate = new CapitateInflorescence()

Mimosa_selloi.flower = new Flower()
Mimosa_selloi.flower.bracteole = new Bracteole()
Mimosa_selloi.flower.merism = '4-merous'
Mimosa_selloi.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_selloi.flower.calyx = new Calyx()
Mimosa_selloi.flower.calyx.shape = 'campanulate'
Mimosa_selloi.flower.corolla = new Corolla()
Mimosa_selloi.flower.corolla.shape = 'campanulate'

Mimosa_selloi.androecium = new Androecium()
Mimosa_selloi.androecium.filaments = new Filaments()
Mimosa_selloi.androecium.filaments.colour = 'pinkish'

Mimosa_selloi.ginoecium = new Ginoecium()
Mimosa_selloi.ginoecium.ovary = new Ovary()

Mimosa_selloi.fruit = new Fruit()
Mimosa_selloi.fruit.stipe = new Stipe()
Mimosa_selloi.fruit.replum = new Replum()
Mimosa_selloi.fruit.epicarp = new Epicarp()

Mimosa_selloi.seed = new Seed()


// Description authorship
Mimosa_selloi.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_selloi.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})


// Sources


// Export Mimosa selloi
export { Mimosa_selloi }