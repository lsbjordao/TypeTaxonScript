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


// Description of Mimosa setosa subsp paludosa var paludosa
const Mimosa_setosa subsp paludosa var paludosa = new Mimosa()
Mimosa_setosa subsp paludosa var paludosa.specificEpithet = 'setosa subsp paludosa var paludosa'

Mimosa_setosa subsp paludosa var paludosa.stems = new Stems()

Mimosa_setosa subsp paludosa var paludosa.stipule = new Stipule()
Mimosa_setosa subsp paludosa var paludosa.stipule.margin = new MarginStipule()
Mimosa_setosa subsp paludosa var paludosa.stipule.adaxial = new AdaxialStipule()
Mimosa_setosa subsp paludosa var paludosa.stipule.abaxial = new AbaxialStipule()

Mimosa_setosa subsp paludosa var paludosa.leaf = new Leaf()
Mimosa_setosa subsp paludosa var paludosa.leaf.petiole = new Petiole()
Mimosa_setosa subsp paludosa var paludosa.leaf.bipinnate = new Bipinnate()
Mimosa_setosa subsp paludosa var paludosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_setosa subsp paludosa var paludosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_setosa subsp paludosa var paludosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_setosa subsp paludosa var paludosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_setosa subsp paludosa var paludosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_setosa subsp paludosa var paludosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_setosa subsp paludosa var paludosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 17)
Mimosa_setosa subsp paludosa var paludosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_setosa subsp paludosa var paludosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_setosa subsp paludosa var paludosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_setosa subsp paludosa var paludosa.inflorescence = new Inflorescence()
Mimosa_setosa subsp paludosa var paludosa.inflorescence.peduncle = new Peduncle()
Mimosa_setosa subsp paludosa var paludosa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_setosa subsp paludosa var paludosa.flower = new Flower()
Mimosa_setosa subsp paludosa var paludosa.flower.bracteole = new Bracteole()
Mimosa_setosa subsp paludosa var paludosa.flower.merism = '4-merous'
Mimosa_setosa subsp paludosa var paludosa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_setosa subsp paludosa var paludosa.flower.calyx = new Calyx()
Mimosa_setosa subsp paludosa var paludosa.flower.calyx.shape = 'campanulate'
Mimosa_setosa subsp paludosa var paludosa.flower.corolla = new Corolla()
Mimosa_setosa subsp paludosa var paludosa.flower.corolla.shape = 'campanulate'

Mimosa_setosa subsp paludosa var paludosa.androecium = new Androecium()
Mimosa_setosa subsp paludosa var paludosa.androecium.filaments = new Filaments()
Mimosa_setosa subsp paludosa var paludosa.androecium.filaments.colour = 'pinkish'

Mimosa_setosa subsp paludosa var paludosa.ginoecium = new Ginoecium()
Mimosa_setosa subsp paludosa var paludosa.ginoecium.ovary = new Ovary()

Mimosa_setosa subsp paludosa var paludosa.fruit = new Fruit()
Mimosa_setosa subsp paludosa var paludosa.fruit.stipe = new Stipe()
Mimosa_setosa subsp paludosa var paludosa.fruit.replum = new Replum()
Mimosa_setosa subsp paludosa var paludosa.fruit.epicarp = new Epicarp()

Mimosa_setosa subsp paludosa var paludosa.seed = new Seed()


// Description authorship
Mimosa_setosa subsp paludosa var paludosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_setosa subsp paludosa var paludosa.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa setosa subsp paludosa var paludosa
export { Mimosa_setosa subsp paludosa var paludosa }