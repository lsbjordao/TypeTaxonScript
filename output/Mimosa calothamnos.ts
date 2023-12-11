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


// Description of Mimosa calothamnos
const Mimosa_calothamnos = new Mimosa()
Mimosa_calothamnos.specificEpithet = 'calothamnos'

Mimosa_calothamnos.stems = new Stems()

Mimosa_calothamnos.stipule = new Stipule()
Mimosa_calothamnos.stipule.margin = new MarginStipule()
Mimosa_calothamnos.stipule.adaxial = new AdaxialStipule()
Mimosa_calothamnos.stipule.abaxial = new AbaxialStipule()

Mimosa_calothamnos.leaf = new Leaf()
Mimosa_calothamnos.leaf.petiole = new Petiole()
Mimosa_calothamnos.leaf.bipinnate = new Bipinnate()
Mimosa_calothamnos.leaf.bipinnate.rachis = new Rachis()
Mimosa_calothamnos.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_calothamnos.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_calothamnos.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1)
Mimosa_calothamnos.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 5)
Mimosa_calothamnos.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_calothamnos.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_calothamnos.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_calothamnos.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 21)
Mimosa_calothamnos.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_calothamnos.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_calothamnos.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_calothamnos.inflorescence = new Inflorescence()
Mimosa_calothamnos.inflorescence.peduncle = new Peduncle()
Mimosa_calothamnos.inflorescence.capitate = new CapitateInflorescence()

Mimosa_calothamnos.flower = new Flower()
Mimosa_calothamnos.flower.bracteole = new Bracteole()
Mimosa_calothamnos.flower.merism = '4-merous'
Mimosa_calothamnos.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_calothamnos.flower.calyx = new Calyx()
Mimosa_calothamnos.flower.calyx.shape = 'campanulate'
Mimosa_calothamnos.flower.corolla = new Corolla()
Mimosa_calothamnos.flower.corolla.shape = 'campanulate'

Mimosa_calothamnos.androecium = new Androecium()
Mimosa_calothamnos.androecium.filaments = new Filaments()
Mimosa_calothamnos.androecium.filaments.colour = 'yellowish'

Mimosa_calothamnos.ginoecium = new Ginoecium()
Mimosa_calothamnos.ginoecium.ovary = new Ovary()

Mimosa_calothamnos.fruit = new Fruit()
Mimosa_calothamnos.fruit.stipe = new Stipe()
Mimosa_calothamnos.fruit.replum = new Replum()
Mimosa_calothamnos.fruit.epicarp = new Epicarp()

Mimosa_calothamnos.seed = new Seed()


// Description authorship
Mimosa_calothamnos.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_calothamnos.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa calothamnos
export { Mimosa_calothamnos }