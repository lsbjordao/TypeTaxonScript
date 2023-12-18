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


// Description of Mimosa sensitiva var sensitiva
const Mimosa_sensitiva var sensitiva = new Mimosa()
Mimosa_sensitiva var sensitiva.specificEpithet = 'sensitiva var sensitiva'

Mimosa_sensitiva var sensitiva.stems = new Stems()

Mimosa_sensitiva var sensitiva.stipule = new Stipule()
Mimosa_sensitiva var sensitiva.stipule.margin = new MarginStipule()
Mimosa_sensitiva var sensitiva.stipule.adaxial = new AdaxialStipule()
Mimosa_sensitiva var sensitiva.stipule.abaxial = new AbaxialStipule()

Mimosa_sensitiva var sensitiva.leaf = new Leaf()
Mimosa_sensitiva var sensitiva.leaf.petiole = new Petiole()
Mimosa_sensitiva var sensitiva.leaf.bipinnate = new Bipinnate()
Mimosa_sensitiva var sensitiva.leaf.bipinnate.rachis = new Rachis()
Mimosa_sensitiva var sensitiva.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_sensitiva var sensitiva.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_sensitiva var sensitiva.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_sensitiva var sensitiva.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_sensitiva var sensitiva.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_sensitiva var sensitiva.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(1)
Mimosa_sensitiva var sensitiva.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_sensitiva var sensitiva.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_sensitiva var sensitiva.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_sensitiva var sensitiva.inflorescence = new Inflorescence()
Mimosa_sensitiva var sensitiva.inflorescence.peduncle = new Peduncle()
Mimosa_sensitiva var sensitiva.inflorescence.capitate = new CapitateInflorescence()

Mimosa_sensitiva var sensitiva.flower = new Flower()
Mimosa_sensitiva var sensitiva.flower.bracteole = new Bracteole()
Mimosa_sensitiva var sensitiva.flower.merism = '4-merous'
Mimosa_sensitiva var sensitiva.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_sensitiva var sensitiva.flower.calyx = new Calyx()
Mimosa_sensitiva var sensitiva.flower.calyx.shape = 'pappiform'
Mimosa_sensitiva var sensitiva.flower.corolla = new Corolla()
Mimosa_sensitiva var sensitiva.flower.corolla.shape = '[&#39;tubulose&#39;, &#39;campanulate&#39;]'

Mimosa_sensitiva var sensitiva.androecium = new Androecium()
Mimosa_sensitiva var sensitiva.androecium.filaments = new Filaments()
Mimosa_sensitiva var sensitiva.androecium.filaments.colour = 'pinkish'

Mimosa_sensitiva var sensitiva.ginoecium = new Ginoecium()
Mimosa_sensitiva var sensitiva.ginoecium.ovary = new Ovary()

Mimosa_sensitiva var sensitiva.fruit = new Fruit()
Mimosa_sensitiva var sensitiva.fruit.stipe = new Stipe()
Mimosa_sensitiva var sensitiva.fruit.replum = new Replum()
Mimosa_sensitiva var sensitiva.fruit.epicarp = new Epicarp()

Mimosa_sensitiva var sensitiva.seed = new Seed()


// Description authorship
Mimosa_sensitiva var sensitiva.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_sensitiva var sensitiva.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa sensitiva var sensitiva
export { Mimosa_sensitiva var sensitiva }