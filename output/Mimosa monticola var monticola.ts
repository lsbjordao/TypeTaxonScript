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


// Description of Mimosa monticola var monticola
const Mimosa_monticola var monticola = new Mimosa()
Mimosa_monticola var monticola.specificEpithet = 'monticola var monticola'

Mimosa_monticola var monticola.stems = new Stems()

Mimosa_monticola var monticola.stipule = new Stipule()
Mimosa_monticola var monticola.stipule.margin = new MarginStipule()
Mimosa_monticola var monticola.stipule.adaxial = new AdaxialStipule()
Mimosa_monticola var monticola.stipule.abaxial = new AbaxialStipule()

Mimosa_monticola var monticola.leaf = new Leaf()
Mimosa_monticola var monticola.leaf.petiole = new Petiole()
Mimosa_monticola var monticola.leaf.bipinnate = new Bipinnate()
Mimosa_monticola var monticola.leaf.bipinnate.rachis = new Rachis()
Mimosa_monticola var monticola.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_monticola var monticola.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_monticola var monticola.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_monticola var monticola.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_monticola var monticola.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_monticola var monticola.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(1)
Mimosa_monticola var monticola.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(11, 15)
Mimosa_monticola var monticola.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_monticola var monticola.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_monticola var monticola.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_monticola var monticola.inflorescence = new Inflorescence()
Mimosa_monticola var monticola.inflorescence.peduncle = new Peduncle()
Mimosa_monticola var monticola.inflorescence.capitate = new CapitateInflorescence()

Mimosa_monticola var monticola.flower = new Flower()
Mimosa_monticola var monticola.flower.bracteole = new Bracteole()
Mimosa_monticola var monticola.flower.merism = '4-merous'
Mimosa_monticola var monticola.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_monticola var monticola.flower.calyx = new Calyx()
Mimosa_monticola var monticola.flower.calyx.shape = 'campanulate'
Mimosa_monticola var monticola.flower.corolla = new Corolla()
Mimosa_monticola var monticola.flower.corolla.shape = 'campanulate'

Mimosa_monticola var monticola.androecium = new Androecium()
Mimosa_monticola var monticola.androecium.filaments = new Filaments()
Mimosa_monticola var monticola.androecium.filaments.colour = 'pinkish'

Mimosa_monticola var monticola.ginoecium = new Ginoecium()
Mimosa_monticola var monticola.ginoecium.ovary = new Ovary()

Mimosa_monticola var monticola.fruit = new Fruit()
Mimosa_monticola var monticola.fruit.stipe = new Stipe()
Mimosa_monticola var monticola.fruit.replum = new Replum()
Mimosa_monticola var monticola.fruit.epicarp = new Epicarp()

Mimosa_monticola var monticola.seed = new Seed()


// Description authorship
Mimosa_monticola var monticola.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_monticola var monticola.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa monticola var monticola
export { Mimosa_monticola var monticola }