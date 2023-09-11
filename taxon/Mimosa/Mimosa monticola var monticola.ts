// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
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
const Mimosa_monticola_var_monticola = new Mimosa()
Mimosa_monticola_var_monticola.specificEpithet = 'monticola var monticola'

Mimosa_monticola_var_monticola.stems = new Stems()

Mimosa_monticola_var_monticola.stipule = new Stipule()
Mimosa_monticola_var_monticola.stipule.margin = new MarginStipule()
Mimosa_monticola_var_monticola.stipule.adaxial = new AdaxialStipule()
Mimosa_monticola_var_monticola.stipule.abaxial = new AbaxialStipule()

Mimosa_monticola_var_monticola.leaf = new Leaf()
Mimosa_monticola_var_monticola.leaf.petiole = new Petiole()
Mimosa_monticola_var_monticola.leaf.bipinnate = new Bipinnate()
Mimosa_monticola_var_monticola.leaf.bipinnate.rachis = new Rachis()
Mimosa_monticola_var_monticola.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_monticola_var_monticola.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_monticola_var_monticola.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_monticola_var_monticola.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_monticola_var_monticola.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_monticola_var_monticola.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_monticola_var_monticola.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(11, 15)
Mimosa_monticola_var_monticola.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_monticola_var_monticola.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_monticola_var_monticola.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_monticola_var_monticola.inflorescence = new Inflorescence()
Mimosa_monticola_var_monticola.inflorescence.peduncle = new Peduncle()
Mimosa_monticola_var_monticola.inflorescence.capitate = new CapitateInflorescence()

Mimosa_monticola_var_monticola.flower = new Flower()
Mimosa_monticola_var_monticola.flower.bracteole = new Bracteole()
Mimosa_monticola_var_monticola.flower.merism = '4-merous'
Mimosa_monticola_var_monticola.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_monticola_var_monticola.flower.calyx = new Calyx()
Mimosa_monticola_var_monticola.flower.calyx.shape = 'campanulate'
Mimosa_monticola_var_monticola.flower.corolla = new Corolla()
Mimosa_monticola_var_monticola.flower.corolla.shape = 'campanulate'

Mimosa_monticola_var_monticola.androecium = new Androecium()
Mimosa_monticola_var_monticola.androecium.filaments = new Filaments()
Mimosa_monticola_var_monticola.androecium.filaments.colour = 'pinkish'

Mimosa_monticola_var_monticola.ginoecium = new Ginoecium()
Mimosa_monticola_var_monticola.ginoecium.ovary = new Ovary()

Mimosa_monticola_var_monticola.fruit = new Fruit()
Mimosa_monticola_var_monticola.fruit.stipe = new Stipe()
Mimosa_monticola_var_monticola.fruit.replum = new Replum()
Mimosa_monticola_var_monticola.fruit.epicarp = new Epicarp()

Mimosa_monticola_var_monticola.seed = new Seed()


// Description authorship
Mimosa_monticola_var_monticola.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_monticola_var_monticola.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})


// Sources


// Export Mimosa monticola var monticola
export { Mimosa_monticola_var_monticola }