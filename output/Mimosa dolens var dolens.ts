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


// Description of Mimosa dolens var dolens
const Mimosa_dolens var dolens = new Mimosa()
Mimosa_dolens var dolens.specificEpithet = 'dolens var dolens'

Mimosa_dolens var dolens.stems = new Stems()

Mimosa_dolens var dolens.stipule = new Stipule()
Mimosa_dolens var dolens.stipule.margin = new MarginStipule()
Mimosa_dolens var dolens.stipule.adaxial = new AdaxialStipule()
Mimosa_dolens var dolens.stipule.abaxial = new AbaxialStipule()

Mimosa_dolens var dolens.leaf = new Leaf()
Mimosa_dolens var dolens.leaf.petiole = new Petiole()
Mimosa_dolens var dolens.leaf.bipinnate = new Bipinnate()
Mimosa_dolens var dolens.leaf.bipinnate.rachis = new Rachis()
Mimosa_dolens var dolens.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_dolens var dolens.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_dolens var dolens.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_dolens var dolens.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_dolens var dolens.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_dolens var dolens.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_dolens var dolens.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 14)
Mimosa_dolens var dolens.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_dolens var dolens.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_dolens var dolens.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_dolens var dolens.inflorescence = new Inflorescence()
Mimosa_dolens var dolens.inflorescence.peduncle = new Peduncle()
Mimosa_dolens var dolens.inflorescence.capitate = new CapitateInflorescence()

Mimosa_dolens var dolens.flower = new Flower()
Mimosa_dolens var dolens.flower.bracteole = new Bracteole()
Mimosa_dolens var dolens.flower.merism = '4-merous'
Mimosa_dolens var dolens.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_dolens var dolens.flower.calyx = new Calyx()
Mimosa_dolens var dolens.flower.calyx.shape = 'pappiform'
Mimosa_dolens var dolens.flower.corolla = new Corolla()
Mimosa_dolens var dolens.flower.corolla.shape = '[&#39;tubulose&#39;, &#39;campanulate&#39;]'

Mimosa_dolens var dolens.androecium = new Androecium()
Mimosa_dolens var dolens.androecium.filaments = new Filaments()
Mimosa_dolens var dolens.androecium.filaments.colour = 'pinkish'

Mimosa_dolens var dolens.ginoecium = new Ginoecium()
Mimosa_dolens var dolens.ginoecium.ovary = new Ovary()

Mimosa_dolens var dolens.fruit = new Fruit()
Mimosa_dolens var dolens.fruit.stipe = new Stipe()
Mimosa_dolens var dolens.fruit.replum = new Replum()
Mimosa_dolens var dolens.fruit.epicarp = new Epicarp()

Mimosa_dolens var dolens.seed = new Seed()


// Description authorship
Mimosa_dolens var dolens.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_dolens var dolens.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa dolens var dolens
export { Mimosa_dolens var dolens }