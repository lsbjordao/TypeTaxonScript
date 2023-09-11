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


// Description of Mimosa aaateste2
const Mimosa_aaateste2 = new Mimosa()
Mimosa_aaateste2.specificEpithet = 'aaateste2'

Mimosa_aaateste2.stems = new Stems()

Mimosa_aaateste2.stipule = new Stipule()
Mimosa_aaateste2.stipule.margin = new MarginStipule()
Mimosa_aaateste2.stipule.adaxial = new AdaxialStipule()
Mimosa_aaateste2.stipule.abaxial = new AbaxialStipule()

Mimosa_aaateste2.leaf = new Leaf()
Mimosa_aaateste2.leaf.petiole = new Petiole()
Mimosa_aaateste2.leaf.bipinnate = new Bipinnate()
Mimosa_aaateste2.leaf.bipinnate.rachis = new Rachis()
Mimosa_aaateste2.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_aaateste2.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_aaateste2.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_aaateste2.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_aaateste2.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_aaateste2.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_aaateste2.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_aaateste2.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_aaateste2.inflorescence = new Inflorescence()
Mimosa_aaateste2.inflorescence.peduncle = new Peduncle()

Mimosa_aaateste2.flower = new Flower()
Mimosa_aaateste2.flower.bracteole = new Bracteole()
Mimosa_aaateste2.flower.merism = '5-merous'
Mimosa_aaateste2.flower.calyx = new Calyx()
Mimosa_aaateste2.flower.corolla = new Corolla()

Mimosa_aaateste2.androecium = new Androecium()
Mimosa_aaateste2.androecium.filaments = new Filaments()

Mimosa_aaateste2.ginoecium = new Ginoecium()
Mimosa_aaateste2.ginoecium.ovary = new Ovary()

Mimosa_aaateste2.fruit = new Fruit()
Mimosa_aaateste2.fruit.stipe = new Stipe()
Mimosa_aaateste2.fruit.replum = new Replum()
Mimosa_aaateste2.fruit.epicarp = new Epicarp()

Mimosa_aaateste2.seed = new Seed()


// Description authorship
Mimosa_aaateste2.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_aaateste2.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1241324234
})


// Sources


// Export Mimosa aaateste2
export { Mimosa_aaateste2 }