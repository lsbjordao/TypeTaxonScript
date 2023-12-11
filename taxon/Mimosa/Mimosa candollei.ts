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


// Description of Mimosa candollei
const Mimosa_candollei = new Mimosa()
Mimosa_candollei.specificEpithet = 'candollei'

Mimosa_candollei.stems = new Stems()

Mimosa_candollei.stipule = new Stipule()
Mimosa_candollei.stipule.margin = new MarginStipule()
Mimosa_candollei.stipule.adaxial = new AdaxialStipule()
Mimosa_candollei.stipule.abaxial = new AbaxialStipule()

Mimosa_candollei.leaf = new Leaf()
Mimosa_candollei.leaf.petiole = new Petiole()
Mimosa_candollei.leaf.bipinnate = new Bipinnate()
Mimosa_candollei.leaf.bipinnate.rachis = new Rachis()
Mimosa_candollei.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_candollei.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_candollei.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 3)
Mimosa_candollei.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_candollei.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_candollei.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_candollei.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(13, 20)
Mimosa_candollei.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_candollei.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_candollei.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_candollei.inflorescence = new Inflorescence()
Mimosa_candollei.inflorescence.peduncle = new Peduncle()
Mimosa_candollei.inflorescence.capitate = new CapitateInflorescence()

Mimosa_candollei.flower = new Flower()
Mimosa_candollei.flower.bracteole = new Bracteole()
Mimosa_candollei.flower.merism = '5-merous'
Mimosa_candollei.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_candollei.flower.calyx = new Calyx()
Mimosa_candollei.flower.calyx.shape = 'campanulate'
Mimosa_candollei.flower.corolla = new Corolla()
Mimosa_candollei.flower.corolla.shape = 'turbinate'

Mimosa_candollei.androecium = new Androecium()
Mimosa_candollei.androecium.filaments = new Filaments()
Mimosa_candollei.androecium.filaments.colour = 'pinkish'

Mimosa_candollei.ginoecium = new Ginoecium()
Mimosa_candollei.ginoecium.ovary = new Ovary()

Mimosa_candollei.fruit = new Fruit()
Mimosa_candollei.fruit.stipe = new Stipe()
Mimosa_candollei.fruit.replum = new Replum()
Mimosa_candollei.fruit.epicarp = new Epicarp()

Mimosa_candollei.seed = new Seed()


// Description authorship
Mimosa_candollei.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_candollei.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})


// Sources
const source0 = new Source()
source0.sourceType = 'article'
source0.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source0.year = 2018
source0.title = 'Toward a Census of *Mimosa* (Leguminosae) in the Atlantic Domain, Southeastern Brazil'
source0.journal = 'Systematic Botany'
source0.volume = 43
source0.number = 1
source0.pages = 162-197
Mimosa_candollei.addSource(source0)

// Export Mimosa candollei
export { Mimosa_candollei }