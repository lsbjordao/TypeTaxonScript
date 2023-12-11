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


// Description of Mimosa ceratonia var pseudo-obovata
const Mimosa_ceratonia var pseudo-obovata = new Mimosa()
Mimosa_ceratonia var pseudo-obovata.specificEpithet = 'ceratonia var pseudo-obovata'

Mimosa_ceratonia var pseudo-obovata.stems = new Stems()

Mimosa_ceratonia var pseudo-obovata.stipule = new Stipule()
Mimosa_ceratonia var pseudo-obovata.stipule.margin = new MarginStipule()
Mimosa_ceratonia var pseudo-obovata.stipule.adaxial = new AdaxialStipule()
Mimosa_ceratonia var pseudo-obovata.stipule.abaxial = new AbaxialStipule()

Mimosa_ceratonia var pseudo-obovata.leaf = new Leaf()
Mimosa_ceratonia var pseudo-obovata.leaf.petiole = new Petiole()
Mimosa_ceratonia var pseudo-obovata.leaf.bipinnate = new Bipinnate()
Mimosa_ceratonia var pseudo-obovata.leaf.bipinnate.rachis = new Rachis()
Mimosa_ceratonia var pseudo-obovata.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_ceratonia var pseudo-obovata.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_ceratonia var pseudo-obovata.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_ceratonia var pseudo-obovata.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(5)
Mimosa_ceratonia var pseudo-obovata.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_ceratonia var pseudo-obovata.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_ceratonia var pseudo-obovata.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_ceratonia var pseudo-obovata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(2, 4)
Mimosa_ceratonia var pseudo-obovata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(5)
Mimosa_ceratonia var pseudo-obovata.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_ceratonia var pseudo-obovata.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_ceratonia var pseudo-obovata.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_ceratonia var pseudo-obovata.inflorescence = new Inflorescence()
Mimosa_ceratonia var pseudo-obovata.inflorescence.peduncle = new Peduncle()
Mimosa_ceratonia var pseudo-obovata.inflorescence.capitate = new CapitateInflorescence()

Mimosa_ceratonia var pseudo-obovata.flower = new Flower()
Mimosa_ceratonia var pseudo-obovata.flower.bracteole = new Bracteole()
Mimosa_ceratonia var pseudo-obovata.flower.merism = '3-merous'
Mimosa_ceratonia var pseudo-obovata.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_ceratonia var pseudo-obovata.flower.calyx = new Calyx()
Mimosa_ceratonia var pseudo-obovata.flower.calyx.shape = 'campanulate'
Mimosa_ceratonia var pseudo-obovata.flower.corolla = new Corolla()
Mimosa_ceratonia var pseudo-obovata.flower.corolla.shape = 'turbinate'

Mimosa_ceratonia var pseudo-obovata.androecium = new Androecium()
Mimosa_ceratonia var pseudo-obovata.androecium.filaments = new Filaments()
Mimosa_ceratonia var pseudo-obovata.androecium.filaments.colour = 'withish'

Mimosa_ceratonia var pseudo-obovata.ginoecium = new Ginoecium()
Mimosa_ceratonia var pseudo-obovata.ginoecium.ovary = new Ovary()

Mimosa_ceratonia var pseudo-obovata.fruit = new Fruit()
Mimosa_ceratonia var pseudo-obovata.fruit.stipe = new Stipe()
Mimosa_ceratonia var pseudo-obovata.fruit.replum = new Replum()
Mimosa_ceratonia var pseudo-obovata.fruit.epicarp = new Epicarp()

Mimosa_ceratonia var pseudo-obovata.seed = new Seed()


// Description authorship
Mimosa_ceratonia var pseudo-obovata.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_ceratonia var pseudo-obovata.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 12312
})


// Sources


// Export Mimosa ceratonia var pseudo-obovata
export { Mimosa_ceratonia var pseudo-obovata }