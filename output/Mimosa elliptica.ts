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


// Description of Mimosa elliptica
const Mimosa_elliptica = new Mimosa()
Mimosa_elliptica.specificEpithet = 'elliptica'

Mimosa_elliptica.stems = new Stems()

Mimosa_elliptica.stipule = new Stipule()
Mimosa_elliptica.stipule.margin = new MarginStipule()
Mimosa_elliptica.stipule.adaxial = new AdaxialStipule()
Mimosa_elliptica.stipule.abaxial = new AbaxialStipule()

Mimosa_elliptica.leaf = new Leaf()
Mimosa_elliptica.leaf.petiole = new Petiole()
Mimosa_elliptica.leaf.bipinnate = new Bipinnate()
Mimosa_elliptica.leaf.bipinnate.rachis = new Rachis()
Mimosa_elliptica.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_elliptica.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_elliptica.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(6, 16)
Mimosa_elliptica.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_elliptica.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_elliptica.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_elliptica.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(22, 36)
Mimosa_elliptica.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_elliptica.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_elliptica.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_elliptica.inflorescence = new Inflorescence()
Mimosa_elliptica.inflorescence.peduncle = new Peduncle()
Mimosa_elliptica.inflorescence.capitate = new CapitateInflorescence()

Mimosa_elliptica.flower = new Flower()
Mimosa_elliptica.flower.bracteole = new Bracteole()
Mimosa_elliptica.flower.merism = '4-merous'
Mimosa_elliptica.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_elliptica.flower.calyx = new Calyx()
Mimosa_elliptica.flower.calyx.shape = 'campanulate'
Mimosa_elliptica.flower.corolla = new Corolla()
Mimosa_elliptica.flower.corolla.shape = 'campanulate'

Mimosa_elliptica.androecium = new Androecium()
Mimosa_elliptica.androecium.filaments = new Filaments()
Mimosa_elliptica.androecium.filaments.colour = 'pinkish'

Mimosa_elliptica.ginoecium = new Ginoecium()
Mimosa_elliptica.ginoecium.ovary = new Ovary()

Mimosa_elliptica.fruit = new Fruit()
Mimosa_elliptica.fruit.stipe = new Stipe()
Mimosa_elliptica.fruit.replum = new Replum()
Mimosa_elliptica.fruit.epicarp = new Epicarp()

Mimosa_elliptica.seed = new Seed()


// Description authorship
Mimosa_elliptica.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_elliptica.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa elliptica
export { Mimosa_elliptica }