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


// Description of Mimosa furfuracea
const Mimosa_furfuracea = new Mimosa()
Mimosa_furfuracea.specificEpithet = 'furfuracea'

Mimosa_furfuracea.stems = new Stems()

Mimosa_furfuracea.stipule = new Stipule()
Mimosa_furfuracea.stipule.margin = new MarginStipule()
Mimosa_furfuracea.stipule.adaxial = new AdaxialStipule()
Mimosa_furfuracea.stipule.abaxial = new AbaxialStipule()

Mimosa_furfuracea.leaf = new Leaf()
Mimosa_furfuracea.leaf.petiole = new Petiole()
Mimosa_furfuracea.leaf.bipinnate = new Bipinnate()
Mimosa_furfuracea.leaf.bipinnate.rachis = new Rachis()
Mimosa_furfuracea.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_furfuracea.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_furfuracea.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 3)
Mimosa_furfuracea.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_furfuracea.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(6)
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(9, 16)
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_furfuracea.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_furfuracea.inflorescence = new Inflorescence()
Mimosa_furfuracea.inflorescence.peduncle = new Peduncle()
Mimosa_furfuracea.inflorescence.capitate = new CapitateInflorescence()

Mimosa_furfuracea.flower = new Flower()
Mimosa_furfuracea.flower.bracteole = new Bracteole()
Mimosa_furfuracea.flower.merism = '4-merous'
Mimosa_furfuracea.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_furfuracea.flower.calyx = new Calyx()
Mimosa_furfuracea.flower.calyx.shape = 'Pateliforme'
Mimosa_furfuracea.flower.corolla = new Corolla()
Mimosa_furfuracea.flower.corolla.shape = 'campanulate'

Mimosa_furfuracea.androecium = new Androecium()
Mimosa_furfuracea.androecium.filaments = new Filaments()
Mimosa_furfuracea.androecium.filaments.colour = 'yellowish'

Mimosa_furfuracea.ginoecium = new Ginoecium()
Mimosa_furfuracea.ginoecium.ovary = new Ovary()

Mimosa_furfuracea.fruit = new Fruit()
Mimosa_furfuracea.fruit.stipe = new Stipe()
Mimosa_furfuracea.fruit.replum = new Replum()
Mimosa_furfuracea.fruit.epicarp = new Epicarp()

Mimosa_furfuracea.seed = new Seed()


// Description authorship
Mimosa_furfuracea.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_furfuracea.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa furfuracea
export { Mimosa_furfuracea }