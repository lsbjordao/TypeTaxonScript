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


// Description of Mimosa diplotricha var diplotricha
const Mimosa_diplotricha var diplotricha = new Mimosa()
Mimosa_diplotricha var diplotricha.specificEpithet = 'diplotricha var diplotricha'

Mimosa_diplotricha var diplotricha.stems = new Stems()

Mimosa_diplotricha var diplotricha.stipule = new Stipule()
Mimosa_diplotricha var diplotricha.stipule.margin = new MarginStipule()
Mimosa_diplotricha var diplotricha.stipule.adaxial = new AdaxialStipule()
Mimosa_diplotricha var diplotricha.stipule.abaxial = new AbaxialStipule()

Mimosa_diplotricha var diplotricha.leaf = new Leaf()
Mimosa_diplotricha var diplotricha.leaf.petiole = new Petiole()
Mimosa_diplotricha var diplotricha.leaf.bipinnate = new Bipinnate()
Mimosa_diplotricha var diplotricha.leaf.bipinnate.rachis = new Rachis()
Mimosa_diplotricha var diplotricha.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_diplotricha var diplotricha.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_diplotricha var diplotricha.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 8)
Mimosa_diplotricha var diplotricha.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_diplotricha var diplotricha.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_diplotricha var diplotricha.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_diplotricha var diplotricha.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(11, 28)
Mimosa_diplotricha var diplotricha.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_diplotricha var diplotricha.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_diplotricha var diplotricha.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_diplotricha var diplotricha.inflorescence = new Inflorescence()
Mimosa_diplotricha var diplotricha.inflorescence.peduncle = new Peduncle()
Mimosa_diplotricha var diplotricha.inflorescence.capitate = new CapitateInflorescence()

Mimosa_diplotricha var diplotricha.flower = new Flower()
Mimosa_diplotricha var diplotricha.flower.bracteole = new Bracteole()
Mimosa_diplotricha var diplotricha.flower.merism = '4-merous'
Mimosa_diplotricha var diplotricha.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_diplotricha var diplotricha.flower.calyx = new Calyx()
Mimosa_diplotricha var diplotricha.flower.calyx.shape = 'campanulate'
Mimosa_diplotricha var diplotricha.flower.corolla = new Corolla()
Mimosa_diplotricha var diplotricha.flower.corolla.shape = '[&#39;campanulate&#39;, &#39;turbinate&#39;]'

Mimosa_diplotricha var diplotricha.androecium = new Androecium()
Mimosa_diplotricha var diplotricha.androecium.filaments = new Filaments()
Mimosa_diplotricha var diplotricha.androecium.filaments.colour = 'pinkish'

Mimosa_diplotricha var diplotricha.ginoecium = new Ginoecium()
Mimosa_diplotricha var diplotricha.ginoecium.ovary = new Ovary()

Mimosa_diplotricha var diplotricha.fruit = new Fruit()
Mimosa_diplotricha var diplotricha.fruit.stipe = new Stipe()
Mimosa_diplotricha var diplotricha.fruit.replum = new Replum()
Mimosa_diplotricha var diplotricha.fruit.epicarp = new Epicarp()

Mimosa_diplotricha var diplotricha.seed = new Seed()


// Description authorship
Mimosa_diplotricha var diplotricha.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_diplotricha var diplotricha.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa diplotricha var diplotricha
export { Mimosa_diplotricha var diplotricha }