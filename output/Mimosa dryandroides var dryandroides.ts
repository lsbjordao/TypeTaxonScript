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


// Description of Mimosa dryandroides var dryandroides
const Mimosa_dryandroides var dryandroides = new Mimosa()
Mimosa_dryandroides var dryandroides.specificEpithet = 'dryandroides var dryandroides'

Mimosa_dryandroides var dryandroides.stems = new Stems()

Mimosa_dryandroides var dryandroides.stipule = new Stipule()
Mimosa_dryandroides var dryandroides.stipule.margin = new MarginStipule()
Mimosa_dryandroides var dryandroides.stipule.adaxial = new AdaxialStipule()
Mimosa_dryandroides var dryandroides.stipule.abaxial = new AbaxialStipule()

Mimosa_dryandroides var dryandroides.leaf = new Leaf()
Mimosa_dryandroides var dryandroides.leaf.petiole = new Petiole()
Mimosa_dryandroides var dryandroides.leaf.bipinnate = new Bipinnate()
Mimosa_dryandroides var dryandroides.leaf.bipinnate.rachis = new Rachis()
Mimosa_dryandroides var dryandroides.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_dryandroides var dryandroides.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_dryandroides var dryandroides.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_dryandroides var dryandroides.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_dryandroides var dryandroides.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_dryandroides var dryandroides.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(1)
Mimosa_dryandroides var dryandroides.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(20, 28)
Mimosa_dryandroides var dryandroides.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_dryandroides var dryandroides.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_dryandroides var dryandroides.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_dryandroides var dryandroides.inflorescence = new Inflorescence()
Mimosa_dryandroides var dryandroides.inflorescence.peduncle = new Peduncle()
Mimosa_dryandroides var dryandroides.inflorescence.capitate = new CapitateInflorescence()

Mimosa_dryandroides var dryandroides.flower = new Flower()
Mimosa_dryandroides var dryandroides.flower.bracteole = new Bracteole()
Mimosa_dryandroides var dryandroides.flower.merism = '4-merous'
Mimosa_dryandroides var dryandroides.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_dryandroides var dryandroides.flower.calyx = new Calyx()
Mimosa_dryandroides var dryandroides.flower.calyx.shape = 'pappiform'
Mimosa_dryandroides var dryandroides.flower.corolla = new Corolla()
Mimosa_dryandroides var dryandroides.flower.corolla.shape = 'campanulate'

Mimosa_dryandroides var dryandroides.androecium = new Androecium()
Mimosa_dryandroides var dryandroides.androecium.filaments = new Filaments()
Mimosa_dryandroides var dryandroides.androecium.filaments.colour = 'pinkish'

Mimosa_dryandroides var dryandroides.ginoecium = new Ginoecium()
Mimosa_dryandroides var dryandroides.ginoecium.ovary = new Ovary()

Mimosa_dryandroides var dryandroides.fruit = new Fruit()
Mimosa_dryandroides var dryandroides.fruit.stipe = new Stipe()
Mimosa_dryandroides var dryandroides.fruit.replum = new Replum()
Mimosa_dryandroides var dryandroides.fruit.epicarp = new Epicarp()

Mimosa_dryandroides var dryandroides.seed = new Seed()


// Description authorship
Mimosa_dryandroides var dryandroides.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_dryandroides var dryandroides.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa dryandroides var dryandroides
export { Mimosa_dryandroides var dryandroides }