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
import { Peduncle } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa aaateste
const Mimosa_aaateste = new Mimosa()
Mimosa_aaateste.specificEpithet = 'aaateste'

Mimosa_aaateste.stems = new Stems()

Mimosa_aaateste.stipule = new Stipule()
Mimosa_aaateste.stipule.margin = new MarginStipule()
Mimosa_aaateste.stipule.adaxial = new AdaxialStipule()
Mimosa_aaateste.stipule.abaxial = new AbaxialStipule()

Mimosa_aaateste.leaf = new Leaf()
Mimosa_aaateste.leaf.petiole = new Petiole()
Mimosa_aaateste.leaf.bipinnate = new Bipinnate()
Mimosa_aaateste.leaf.bipinnate.rachis = new Rachis()
Mimosa_aaateste.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_aaateste.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_aaateste.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_aaateste.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_aaateste.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_aaateste.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_aaateste.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_aaateste.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_aaateste.inflorescence = new Inflorescence()
Mimosa_aaateste.inflorescence.peduncle = new Peduncle()

Mimosa_aaateste.flower = new Flower()
Mimosa_aaateste.flower.bracteole = new Bracteole()
Mimosa_aaateste.flower.merism = '4-merous'
Mimosa_aaateste.flower.calyx = new Calyx()
Mimosa_aaateste.flower.corolla = new Corolla()

Mimosa_aaateste.androecium = new Androecium()
Mimosa_aaateste.androecium.filaments = new Filaments()

Mimosa_aaateste.ginoecium = new Ginoecium()
Mimosa_aaateste.ginoecium.ovary = new Ovary()

Mimosa_aaateste.fruit = new Fruit()
Mimosa_aaateste.fruit.stipe = new Stipe()
Mimosa_aaateste.fruit.replum = new Replum()
Mimosa_aaateste.fruit.epicarp = new Epicarp()

Mimosa_aaateste.seed = new Seed()


// Description authorship
Mimosa_aaateste.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_aaateste.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1241324234
})


// Sources


// Export Mimosa aaateste
export { Mimosa_aaateste }