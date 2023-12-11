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


// Description of Mimosa arenosa var arenosa
const Mimosa_arenosa var arenosa = new Mimosa()
Mimosa_arenosa var arenosa.specificEpithet = 'arenosa var arenosa'

Mimosa_arenosa var arenosa.stems = new Stems()

Mimosa_arenosa var arenosa.stipule = new Stipule()
Mimosa_arenosa var arenosa.stipule.margin = new MarginStipule()
Mimosa_arenosa var arenosa.stipule.adaxial = new AdaxialStipule()
Mimosa_arenosa var arenosa.stipule.abaxial = new AbaxialStipule()

Mimosa_arenosa var arenosa.leaf = new Leaf()
Mimosa_arenosa var arenosa.leaf.petiole = new Petiole()
Mimosa_arenosa var arenosa.leaf.bipinnate = new Bipinnate()
Mimosa_arenosa var arenosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_arenosa var arenosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_arenosa var arenosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_arenosa var arenosa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 12)
Mimosa_arenosa var arenosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_arenosa var arenosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_arenosa var arenosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_arenosa var arenosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 30)
Mimosa_arenosa var arenosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_arenosa var arenosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_arenosa var arenosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_arenosa var arenosa.inflorescence = new Inflorescence()
Mimosa_arenosa var arenosa.inflorescence.peduncle = new Peduncle()
Mimosa_arenosa var arenosa.inflorescence.spicate = new Spicate()

Mimosa_arenosa var arenosa.flower = new Flower()
Mimosa_arenosa var arenosa.flower.bracteole = new Bracteole()
Mimosa_arenosa var arenosa.flower.merism = '4-merous'
Mimosa_arenosa var arenosa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_arenosa var arenosa.flower.calyx = new Calyx()
Mimosa_arenosa var arenosa.flower.calyx.shape = 'campanulate'
Mimosa_arenosa var arenosa.flower.corolla = new Corolla()
Mimosa_arenosa var arenosa.flower.corolla.shape = 'turbinate'

Mimosa_arenosa var arenosa.androecium = new Androecium()
Mimosa_arenosa var arenosa.androecium.filaments = new Filaments()
Mimosa_arenosa var arenosa.androecium.filaments.colour = 'withish'

Mimosa_arenosa var arenosa.ginoecium = new Ginoecium()
Mimosa_arenosa var arenosa.ginoecium.ovary = new Ovary()

Mimosa_arenosa var arenosa.fruit = new Fruit()
Mimosa_arenosa var arenosa.fruit.stipe = new Stipe()
Mimosa_arenosa var arenosa.fruit.replum = new Replum()
Mimosa_arenosa var arenosa.fruit.epicarp = new Epicarp()

Mimosa_arenosa var arenosa.seed = new Seed()


// Description authorship
Mimosa_arenosa var arenosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_arenosa var arenosa.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa arenosa var arenosa
export { Mimosa_arenosa var arenosa }