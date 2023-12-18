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


// Description of Mimosa debilis var debilis
const Mimosa_debilis var debilis = new Mimosa()
Mimosa_debilis var debilis.specificEpithet = 'debilis var debilis'

Mimosa_debilis var debilis.stems = new Stems()

Mimosa_debilis var debilis.stipule = new Stipule()
Mimosa_debilis var debilis.stipule.margin = new MarginStipule()
Mimosa_debilis var debilis.stipule.adaxial = new AdaxialStipule()
Mimosa_debilis var debilis.stipule.abaxial = new AbaxialStipule()

Mimosa_debilis var debilis.leaf = new Leaf()
Mimosa_debilis var debilis.leaf.petiole = new Petiole()
Mimosa_debilis var debilis.leaf.bipinnate = new Bipinnate()
Mimosa_debilis var debilis.leaf.bipinnate.rachis = new Rachis()
Mimosa_debilis var debilis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_debilis var debilis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_debilis var debilis.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_debilis var debilis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_debilis var debilis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_debilis var debilis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_debilis var debilis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(2)
Mimosa_debilis var debilis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_debilis var debilis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_debilis var debilis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_debilis var debilis.inflorescence = new Inflorescence()
Mimosa_debilis var debilis.inflorescence.peduncle = new Peduncle()
Mimosa_debilis var debilis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_debilis var debilis.flower = new Flower()
Mimosa_debilis var debilis.flower.bracteole = new Bracteole()
Mimosa_debilis var debilis.flower.merism = '4-merous'
Mimosa_debilis var debilis.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_debilis var debilis.flower.calyx = new Calyx()
Mimosa_debilis var debilis.flower.calyx.shape = 'campanulate'
Mimosa_debilis var debilis.flower.corolla = new Corolla()
Mimosa_debilis var debilis.flower.corolla.shape = 'campanulate'

Mimosa_debilis var debilis.androecium = new Androecium()
Mimosa_debilis var debilis.androecium.filaments = new Filaments()
Mimosa_debilis var debilis.androecium.filaments.colour = 'pinkish'

Mimosa_debilis var debilis.ginoecium = new Ginoecium()
Mimosa_debilis var debilis.ginoecium.ovary = new Ovary()

Mimosa_debilis var debilis.fruit = new Fruit()
Mimosa_debilis var debilis.fruit.stipe = new Stipe()
Mimosa_debilis var debilis.fruit.replum = new Replum()
Mimosa_debilis var debilis.fruit.epicarp = new Epicarp()

Mimosa_debilis var debilis.seed = new Seed()


// Description authorship
Mimosa_debilis var debilis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_debilis var debilis.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa debilis var debilis
export { Mimosa_debilis var debilis }