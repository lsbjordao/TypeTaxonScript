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


// Description of Mimosa cubatanensis
const Mimosa_cubatanensis = new Mimosa()
Mimosa_cubatanensis.specificEpithet = 'cubatanensis'

Mimosa_cubatanensis.stems = new Stems()

Mimosa_cubatanensis.stipule = new Stipule()
Mimosa_cubatanensis.stipule.margin = new MarginStipule()
Mimosa_cubatanensis.stipule.adaxial = new AdaxialStipule()
Mimosa_cubatanensis.stipule.abaxial = new AbaxialStipule()

Mimosa_cubatanensis.leaf = new Leaf()
Mimosa_cubatanensis.leaf.petiole = new Petiole()
Mimosa_cubatanensis.leaf.bipinnate = new Bipinnate()
Mimosa_cubatanensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_cubatanensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_cubatanensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_cubatanensis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 5)
Mimosa_cubatanensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_cubatanensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(8, 14)
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_cubatanensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_cubatanensis.inflorescence = new Inflorescence()
Mimosa_cubatanensis.inflorescence.peduncle = new Peduncle()
Mimosa_cubatanensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_cubatanensis.flower = new Flower()
Mimosa_cubatanensis.flower.bracteole = new Bracteole()
Mimosa_cubatanensis.flower.merism = '4-merous'
Mimosa_cubatanensis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_cubatanensis.flower.calyx = new Calyx()
Mimosa_cubatanensis.flower.calyx.shape = 'campanulate'
Mimosa_cubatanensis.flower.corolla = new Corolla()
Mimosa_cubatanensis.flower.corolla.shape = 'campanulate'

Mimosa_cubatanensis.androecium = new Androecium()
Mimosa_cubatanensis.androecium.filaments = new Filaments()
Mimosa_cubatanensis.androecium.filaments.colour = 'withish'

Mimosa_cubatanensis.ginoecium = new Ginoecium()
Mimosa_cubatanensis.ginoecium.ovary = new Ovary()

Mimosa_cubatanensis.fruit = new Fruit()
Mimosa_cubatanensis.fruit.stipe = new Stipe()
Mimosa_cubatanensis.fruit.replum = new Replum()
Mimosa_cubatanensis.fruit.epicarp = new Epicarp()

Mimosa_cubatanensis.seed = new Seed()


// Description authorship
Mimosa_cubatanensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_cubatanensis.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa cubatanensis
export { Mimosa_cubatanensis }