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


// Description of Mimosa myuros
const Mimosa_myuros = new Mimosa()
Mimosa_myuros.specificEpithet = 'myuros'

Mimosa_myuros.stems = new Stems()

Mimosa_myuros.stipule = new Stipule()
Mimosa_myuros.stipule.margin = new MarginStipule()
Mimosa_myuros.stipule.adaxial = new AdaxialStipule()
Mimosa_myuros.stipule.abaxial = new AbaxialStipule()

Mimosa_myuros.leaf = new Leaf()
Mimosa_myuros.leaf.petiole = new Petiole()
Mimosa_myuros.leaf.bipinnate = new Bipinnate()
Mimosa_myuros.leaf.bipinnate.rachis = new Rachis()
Mimosa_myuros.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_myuros.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_myuros.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 6)
Mimosa_myuros.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(7)
Mimosa_myuros.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_myuros.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(5, 6)
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(7)
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_myuros.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_myuros.inflorescence = new Inflorescence()
Mimosa_myuros.inflorescence.peduncle = new Peduncle()
Mimosa_myuros.inflorescence.spicate = new Spicate()

Mimosa_myuros.flower = new Flower()
Mimosa_myuros.flower.bracteole = new Bracteole()
Mimosa_myuros.flower.merism = '4-merous'
Mimosa_myuros.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_myuros.flower.calyx = new Calyx()
Mimosa_myuros.flower.calyx.shape = 'campanulate'
Mimosa_myuros.flower.corolla = new Corolla()
Mimosa_myuros.flower.corolla.shape = 'campanulate'

Mimosa_myuros.androecium = new Androecium()
Mimosa_myuros.androecium.filaments = new Filaments()
Mimosa_myuros.androecium.filaments.colour = 'withish'

Mimosa_myuros.ginoecium = new Ginoecium()
Mimosa_myuros.ginoecium.ovary = new Ovary()

Mimosa_myuros.fruit = new Fruit()
Mimosa_myuros.fruit.stipe = new Stipe()
Mimosa_myuros.fruit.replum = new Replum()
Mimosa_myuros.fruit.epicarp = new Epicarp()

Mimosa_myuros.seed = new Seed()


// Description authorship
Mimosa_myuros.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_myuros.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa myuros
export { Mimosa_myuros }