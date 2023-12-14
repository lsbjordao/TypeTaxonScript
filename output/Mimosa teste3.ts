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
import { Peduncle } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa teste3
const Mimosa_teste3 = new Mimosa()
Mimosa_teste3.specificEpithet = 'teste3'

Mimosa_teste3.stems = new Stems()

Mimosa_teste3.stipule = new Stipule()
Mimosa_teste3.stipule.margin = new MarginStipule()
Mimosa_teste3.stipule.adaxial = new AdaxialStipule()
Mimosa_teste3.stipule.abaxial = new AbaxialStipule()

Mimosa_teste3.leaf = new Leaf()
Mimosa_teste3.leaf.petiole = new Petiole()
Mimosa_teste3.leaf.bipinnate = new Bipinnate()
Mimosa_teste3.leaf.bipinnate.rachis = new Rachis()
Mimosa_teste3.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_teste3.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_teste3.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_teste3.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_teste3.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_teste3.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_teste3.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_teste3.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_teste3.inflorescence = new Inflorescence()
Mimosa_teste3.inflorescence.peduncle = new Peduncle()

Mimosa_teste3.flower = new Flower()
Mimosa_teste3.flower.bracteole = new Bracteole()
Mimosa_teste3.flower.calyx = new Calyx()
Mimosa_teste3.flower.corolla = new Corolla()

Mimosa_teste3.androecium = new Androecium()
Mimosa_teste3.androecium.filaments = new Filaments()

Mimosa_teste3.ginoecium = new Ginoecium()
Mimosa_teste3.ginoecium.ovary = new Ovary()

Mimosa_teste3.fruit = new Fruit()
Mimosa_teste3.fruit.stipe = new Stipe()
Mimosa_teste3.fruit.replum = new Replum()
Mimosa_teste3.fruit.epicarp = new Epicarp()

Mimosa_teste3.seed = new Seed()


// Description authorship
Mimosa_teste3.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_teste3.descriptionAuthorship.addAuthor({
    name: '',
    date: 
})


// Sources


// Export Mimosa teste3
export { Mimosa_teste3 }