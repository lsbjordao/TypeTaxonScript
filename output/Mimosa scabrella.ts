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


// Description of Mimosa scabrella
const Mimosa_scabrella = new Mimosa()
Mimosa_scabrella.specificEpithet = 'scabrella'

Mimosa_scabrella.stems = new Stems()

Mimosa_scabrella.stipule = new Stipule()
Mimosa_scabrella.stipule.margin = new MarginStipule()
Mimosa_scabrella.stipule.adaxial = new AdaxialStipule()
Mimosa_scabrella.stipule.abaxial = new AbaxialStipule()

Mimosa_scabrella.leaf = new Leaf()
Mimosa_scabrella.leaf.petiole = new Petiole()
Mimosa_scabrella.leaf.bipinnate = new Bipinnate()
Mimosa_scabrella.leaf.bipinnate.rachis = new Rachis()
Mimosa_scabrella.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_scabrella.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_scabrella.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_scabrella.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_scabrella.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_scabrella.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(2, 3)
Mimosa_scabrella.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_scabrella.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_scabrella.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_scabrella.inflorescence = new Inflorescence()
Mimosa_scabrella.inflorescence.peduncle = new Peduncle()
Mimosa_scabrella.inflorescence.capitate = new CapitateInflorescence()

Mimosa_scabrella.flower = new Flower()
Mimosa_scabrella.flower.bracteole = new Bracteole()
Mimosa_scabrella.flower.merism = '4-merous'
Mimosa_scabrella.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_scabrella.flower.calyx = new Calyx()
Mimosa_scabrella.flower.calyx.shape = 'campanulate'
Mimosa_scabrella.flower.corolla = new Corolla()
Mimosa_scabrella.flower.corolla.shape = 'campanulate'

Mimosa_scabrella.androecium = new Androecium()
Mimosa_scabrella.androecium.filaments = new Filaments()
Mimosa_scabrella.androecium.filaments.colour = 'yellowish'

Mimosa_scabrella.ginoecium = new Ginoecium()
Mimosa_scabrella.ginoecium.ovary = new Ovary()

Mimosa_scabrella.fruit = new Fruit()
Mimosa_scabrella.fruit.stipe = new Stipe()
Mimosa_scabrella.fruit.replum = new Replum()
Mimosa_scabrella.fruit.epicarp = new Epicarp()

Mimosa_scabrella.seed = new Seed()


// Description authorship
Mimosa_scabrella.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_scabrella.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa scabrella
export { Mimosa_scabrella }