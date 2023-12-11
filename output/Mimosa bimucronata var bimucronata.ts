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


// Description of Mimosa bimucronata var bimucronata
const Mimosa_bimucronata var bimucronata = new Mimosa()
Mimosa_bimucronata var bimucronata.specificEpithet = 'bimucronata var bimucronata'

Mimosa_bimucronata var bimucronata.stems = new Stems()

Mimosa_bimucronata var bimucronata.stipule = new Stipule()
Mimosa_bimucronata var bimucronata.stipule.margin = new MarginStipule()
Mimosa_bimucronata var bimucronata.stipule.adaxial = new AdaxialStipule()
Mimosa_bimucronata var bimucronata.stipule.abaxial = new AbaxialStipule()

Mimosa_bimucronata var bimucronata.leaf = new Leaf()
Mimosa_bimucronata var bimucronata.leaf.petiole = new Petiole()
Mimosa_bimucronata var bimucronata.leaf.bipinnate = new Bipinnate()
Mimosa_bimucronata var bimucronata.leaf.bipinnate.rachis = new Rachis()
Mimosa_bimucronata var bimucronata.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_bimucronata var bimucronata.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_bimucronata var bimucronata.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 9)
Mimosa_bimucronata var bimucronata.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_bimucronata var bimucronata.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_bimucronata var bimucronata.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_bimucronata var bimucronata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(18, 41)
Mimosa_bimucronata var bimucronata.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_bimucronata var bimucronata.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_bimucronata var bimucronata.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_bimucronata var bimucronata.inflorescence = new Inflorescence()
Mimosa_bimucronata var bimucronata.inflorescence.peduncle = new Peduncle()
Mimosa_bimucronata var bimucronata.inflorescence.capitate = new CapitateInflorescence()

Mimosa_bimucronata var bimucronata.flower = new Flower()
Mimosa_bimucronata var bimucronata.flower.bracteole = new Bracteole()
Mimosa_bimucronata var bimucronata.flower.merism = '4-merous'
Mimosa_bimucronata var bimucronata.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_bimucronata var bimucronata.flower.calyx = new Calyx()
Mimosa_bimucronata var bimucronata.flower.calyx.shape = 'campanulate'
Mimosa_bimucronata var bimucronata.flower.corolla = new Corolla()
Mimosa_bimucronata var bimucronata.flower.corolla.shape = 'campanulate'

Mimosa_bimucronata var bimucronata.androecium = new Androecium()
Mimosa_bimucronata var bimucronata.androecium.filaments = new Filaments()
Mimosa_bimucronata var bimucronata.androecium.filaments.colour = 'withish'

Mimosa_bimucronata var bimucronata.ginoecium = new Ginoecium()
Mimosa_bimucronata var bimucronata.ginoecium.ovary = new Ovary()

Mimosa_bimucronata var bimucronata.fruit = new Fruit()
Mimosa_bimucronata var bimucronata.fruit.stipe = new Stipe()
Mimosa_bimucronata var bimucronata.fruit.replum = new Replum()
Mimosa_bimucronata var bimucronata.fruit.epicarp = new Epicarp()

Mimosa_bimucronata var bimucronata.seed = new Seed()


// Description authorship
Mimosa_bimucronata var bimucronata.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_bimucronata var bimucronata.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa bimucronata var bimucronata
export { Mimosa_bimucronata var bimucronata }