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


// Description of Mimosa Mimosa sp nov
const Mimosa_Mimosa sp nov = new Mimosa()
Mimosa_Mimosa sp nov.specificEpithet = 'Mimosa sp nov'

Mimosa_Mimosa sp nov.stems = new Stems()

Mimosa_Mimosa sp nov.stipule = new Stipule()
Mimosa_Mimosa sp nov.stipule.margin = new MarginStipule()
Mimosa_Mimosa sp nov.stipule.adaxial = new AdaxialStipule()
Mimosa_Mimosa sp nov.stipule.abaxial = new AbaxialStipule()

Mimosa_Mimosa sp nov.leaf = new Leaf()
Mimosa_Mimosa sp nov.leaf.petiole = new Petiole()
Mimosa_Mimosa sp nov.leaf.bipinnate = new Bipinnate()
Mimosa_Mimosa sp nov.leaf.bipinnate.rachis = new Rachis()
Mimosa_Mimosa sp nov.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_Mimosa sp nov.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_Mimosa sp nov.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_Mimosa sp nov.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_Mimosa sp nov.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_Mimosa sp nov.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(1)
Mimosa_Mimosa sp nov.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_Mimosa sp nov.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_Mimosa sp nov.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_Mimosa sp nov.inflorescence = new Inflorescence()
Mimosa_Mimosa sp nov.inflorescence.peduncle = new Peduncle()
Mimosa_Mimosa sp nov.inflorescence.capitate = new CapitateInflorescence()

Mimosa_Mimosa sp nov.flower = new Flower()
Mimosa_Mimosa sp nov.flower.bracteole = new Bracteole()
Mimosa_Mimosa sp nov.flower.merism = '4-merous'
Mimosa_Mimosa sp nov.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_Mimosa sp nov.flower.calyx = new Calyx()
Mimosa_Mimosa sp nov.flower.calyx.shape = 'pappiform'
Mimosa_Mimosa sp nov.flower.corolla = new Corolla()
Mimosa_Mimosa sp nov.flower.corolla.shape = '[&#39;tubulose&#39;, &#39;campanulate&#39;]'

Mimosa_Mimosa sp nov.androecium = new Androecium()
Mimosa_Mimosa sp nov.androecium.filaments = new Filaments()
Mimosa_Mimosa sp nov.androecium.filaments.colour = 'pinkish'

Mimosa_Mimosa sp nov.ginoecium = new Ginoecium()
Mimosa_Mimosa sp nov.ginoecium.ovary = new Ovary()

Mimosa_Mimosa sp nov.fruit = new Fruit()
Mimosa_Mimosa sp nov.fruit.stipe = new Stipe()
Mimosa_Mimosa sp nov.fruit.replum = new Replum()
Mimosa_Mimosa sp nov.fruit.epicarp = new Epicarp()

Mimosa_Mimosa sp nov.seed = new Seed()


// Description authorship
Mimosa_Mimosa sp nov.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_Mimosa sp nov.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa Mimosa sp nov
export { Mimosa_Mimosa sp nov }