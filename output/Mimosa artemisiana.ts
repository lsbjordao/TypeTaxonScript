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


// Description of Mimosa artemisiana
const Mimosa_artemisiana = new Mimosa()
Mimosa_artemisiana.specificEpithet = 'artemisiana'

Mimosa_artemisiana.stems = new Stems()

Mimosa_artemisiana.stipule = new Stipule()
Mimosa_artemisiana.stipule.margin = new MarginStipule()
Mimosa_artemisiana.stipule.adaxial = new AdaxialStipule()
Mimosa_artemisiana.stipule.abaxial = new AbaxialStipule()

Mimosa_artemisiana.leaf = new Leaf()
Mimosa_artemisiana.leaf.petiole = new Petiole()
Mimosa_artemisiana.leaf.bipinnate = new Bipinnate()
Mimosa_artemisiana.leaf.bipinnate.rachis = new Rachis()
Mimosa_artemisiana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_artemisiana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_artemisiana.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(7, 12)
Mimosa_artemisiana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_artemisiana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_artemisiana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_artemisiana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(15, 29)
Mimosa_artemisiana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_artemisiana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_artemisiana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_artemisiana.inflorescence = new Inflorescence()
Mimosa_artemisiana.inflorescence.peduncle = new Peduncle()
Mimosa_artemisiana.inflorescence.spicate = new Spicate()

Mimosa_artemisiana.flower = new Flower()
Mimosa_artemisiana.flower.bracteole = new Bracteole()
Mimosa_artemisiana.flower.merism = '4-merous'
Mimosa_artemisiana.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_artemisiana.flower.calyx = new Calyx()
Mimosa_artemisiana.flower.calyx.shape = 'campanulate'
Mimosa_artemisiana.flower.corolla = new Corolla()
Mimosa_artemisiana.flower.corolla.shape = 'campanulate'

Mimosa_artemisiana.androecium = new Androecium()
Mimosa_artemisiana.androecium.filaments = new Filaments()
Mimosa_artemisiana.androecium.filaments.colour = 'withish'

Mimosa_artemisiana.ginoecium = new Ginoecium()
Mimosa_artemisiana.ginoecium.ovary = new Ovary()

Mimosa_artemisiana.fruit = new Fruit()
Mimosa_artemisiana.fruit.stipe = new Stipe()
Mimosa_artemisiana.fruit.replum = new Replum()
Mimosa_artemisiana.fruit.epicarp = new Epicarp()

Mimosa_artemisiana.seed = new Seed()


// Description authorship
Mimosa_artemisiana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_artemisiana.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa artemisiana
export { Mimosa_artemisiana }