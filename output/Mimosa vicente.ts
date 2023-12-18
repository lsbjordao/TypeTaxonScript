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
import { Peduncle } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa vicente
const Mimosa_vicente = new Mimosa()
Mimosa_vicente.specificEpithet = 'vicente'

Mimosa_vicente.stems = new Stems()

Mimosa_vicente.stipule = new Stipule()
Mimosa_vicente.stipule.margin = new MarginStipule()
Mimosa_vicente.stipule.adaxial = new AdaxialStipule()
Mimosa_vicente.stipule.abaxial = new AbaxialStipule()

Mimosa_vicente.leaf = new Leaf()
Mimosa_vicente.leaf.petiole = new Petiole()
Mimosa_vicente.leaf.bipinnate = new Bipinnate()
Mimosa_vicente.leaf.bipinnate.rachis = new Rachis()
Mimosa_vicente.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_vicente.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_vicente.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_vicente.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_vicente.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_vicente.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_vicente.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_vicente.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_vicente.inflorescence = new Inflorescence()
Mimosa_vicente.inflorescence.peduncle = new Peduncle()

Mimosa_vicente.flower = new Flower()
Mimosa_vicente.flower.bracteole = new Bracteole()
Mimosa_vicente.flower.calyx = new Calyx()
Mimosa_vicente.flower.corolla = new Corolla()

Mimosa_vicente.androecium = new Androecium()
Mimosa_vicente.androecium.filaments = new Filaments()

Mimosa_vicente.ginoecium = new Ginoecium()
Mimosa_vicente.ginoecium.ovary = new Ovary()

Mimosa_vicente.fruit = new Fruit()
Mimosa_vicente.fruit.stipe = new Stipe()
Mimosa_vicente.fruit.replum = new Replum()
Mimosa_vicente.fruit.epicarp = new Epicarp()

Mimosa_vicente.seed = new Seed()


// Description authorship
Mimosa_vicente.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_vicente.descriptionAuthorship.addAuthor({
    name: '',
    date: 
})


// Sources


// Export Mimosa vicente
export { Mimosa_vicente }