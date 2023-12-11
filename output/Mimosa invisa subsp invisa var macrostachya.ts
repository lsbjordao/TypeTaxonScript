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
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa invisa subsp invisa var macrostachya
const Mimosa_invisa subsp invisa var macrostachya = new Mimosa()
Mimosa_invisa subsp invisa var macrostachya.specificEpithet = 'invisa subsp invisa var macrostachya'

Mimosa_invisa subsp invisa var macrostachya.stems = new Stems()

Mimosa_invisa subsp invisa var macrostachya.stipule = new Stipule()
Mimosa_invisa subsp invisa var macrostachya.stipule.margin = new MarginStipule()
Mimosa_invisa subsp invisa var macrostachya.stipule.adaxial = new AdaxialStipule()
Mimosa_invisa subsp invisa var macrostachya.stipule.abaxial = new AbaxialStipule()

Mimosa_invisa subsp invisa var macrostachya.leaf = new Leaf()
Mimosa_invisa subsp invisa var macrostachya.leaf.petiole = new Petiole()
Mimosa_invisa subsp invisa var macrostachya.leaf.bipinnate = new Bipinnate()
Mimosa_invisa subsp invisa var macrostachya.leaf.bipinnate.rachis = new Rachis()
Mimosa_invisa subsp invisa var macrostachya.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_invisa subsp invisa var macrostachya.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_invisa subsp invisa var macrostachya.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(14, 22)
Mimosa_invisa subsp invisa var macrostachya.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_invisa subsp invisa var macrostachya.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_invisa subsp invisa var macrostachya.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_invisa subsp invisa var macrostachya.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(36, 48)
Mimosa_invisa subsp invisa var macrostachya.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_invisa subsp invisa var macrostachya.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_invisa subsp invisa var macrostachya.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_invisa subsp invisa var macrostachya.inflorescence = new Inflorescence()
Mimosa_invisa subsp invisa var macrostachya.inflorescence.peduncle = new Peduncle()
Mimosa_invisa subsp invisa var macrostachya.inflorescence.spicate = new Spicate()

Mimosa_invisa subsp invisa var macrostachya.flower = new Flower()
Mimosa_invisa subsp invisa var macrostachya.flower.bracteole = new Bracteole()
Mimosa_invisa subsp invisa var macrostachya.flower.merism = '[&#39;5-merous&#39;, &#39;6-merous&#39;]'
Mimosa_invisa subsp invisa var macrostachya.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_invisa subsp invisa var macrostachya.flower.calyx = new Calyx()
Mimosa_invisa subsp invisa var macrostachya.flower.calyx.shape = 'campanulate'
Mimosa_invisa subsp invisa var macrostachya.flower.corolla = new Corolla()
Mimosa_invisa subsp invisa var macrostachya.flower.corolla.shape = 'turbinate'

Mimosa_invisa subsp invisa var macrostachya.androecium = new Androecium()
Mimosa_invisa subsp invisa var macrostachya.androecium.filaments = new Filaments()
Mimosa_invisa subsp invisa var macrostachya.androecium.filaments.colour = 'pinkish'

Mimosa_invisa subsp invisa var macrostachya.ginoecium = new Ginoecium()
Mimosa_invisa subsp invisa var macrostachya.ginoecium.ovary = new Ovary()

Mimosa_invisa subsp invisa var macrostachya.fruit = new Fruit()
Mimosa_invisa subsp invisa var macrostachya.fruit.stipe = new Stipe()
Mimosa_invisa subsp invisa var macrostachya.fruit.replum = new Replum()
Mimosa_invisa subsp invisa var macrostachya.fruit.epicarp = new Epicarp()

Mimosa_invisa subsp invisa var macrostachya.seed = new Seed()


// Description authorship
Mimosa_invisa subsp invisa var macrostachya.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_invisa subsp invisa var macrostachya.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa invisa subsp invisa var macrostachya
export { Mimosa_invisa subsp invisa var macrostachya }