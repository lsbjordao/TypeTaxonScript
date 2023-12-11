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


// Description of Mimosa velloziana var velloziana
const Mimosa_velloziana var velloziana = new Mimosa()
Mimosa_velloziana var velloziana.specificEpithet = 'velloziana var velloziana'

Mimosa_velloziana var velloziana.stems = new Stems()

Mimosa_velloziana var velloziana.stipule = new Stipule()
Mimosa_velloziana var velloziana.stipule.margin = new MarginStipule()
Mimosa_velloziana var velloziana.stipule.adaxial = new AdaxialStipule()
Mimosa_velloziana var velloziana.stipule.abaxial = new AbaxialStipule()

Mimosa_velloziana var velloziana.leaf = new Leaf()
Mimosa_velloziana var velloziana.leaf.petiole = new Petiole()
Mimosa_velloziana var velloziana.leaf.bipinnate = new Bipinnate()
Mimosa_velloziana var velloziana.leaf.bipinnate.rachis = new Rachis()
Mimosa_velloziana var velloziana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_velloziana var velloziana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_velloziana var velloziana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_velloziana var velloziana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_velloziana var velloziana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_velloziana var velloziana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(1)
Mimosa_velloziana var velloziana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_velloziana var velloziana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_velloziana var velloziana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_velloziana var velloziana.inflorescence = new Inflorescence()
Mimosa_velloziana var velloziana.inflorescence.peduncle = new Peduncle()
Mimosa_velloziana var velloziana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_velloziana var velloziana.flower = new Flower()
Mimosa_velloziana var velloziana.flower.bracteole = new Bracteole()
Mimosa_velloziana var velloziana.flower.merism = '4-merous'
Mimosa_velloziana var velloziana.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_velloziana var velloziana.flower.calyx = new Calyx()
Mimosa_velloziana var velloziana.flower.calyx.shape = 'campanulate'
Mimosa_velloziana var velloziana.flower.corolla = new Corolla()
Mimosa_velloziana var velloziana.flower.corolla.shape = '[&#39;tubulose&#39;, &#39;campanulate&#39;]'

Mimosa_velloziana var velloziana.androecium = new Androecium()
Mimosa_velloziana var velloziana.androecium.filaments = new Filaments()
Mimosa_velloziana var velloziana.androecium.filaments.colour = 'pinkish'

Mimosa_velloziana var velloziana.ginoecium = new Ginoecium()
Mimosa_velloziana var velloziana.ginoecium.ovary = new Ovary()

Mimosa_velloziana var velloziana.fruit = new Fruit()
Mimosa_velloziana var velloziana.fruit.stipe = new Stipe()
Mimosa_velloziana var velloziana.fruit.replum = new Replum()
Mimosa_velloziana var velloziana.fruit.epicarp = new Epicarp()

Mimosa_velloziana var velloziana.seed = new Seed()


// Description authorship
Mimosa_velloziana var velloziana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_velloziana var velloziana.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa velloziana var velloziana
export { Mimosa_velloziana var velloziana }