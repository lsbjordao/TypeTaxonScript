// Import characters
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Filiform, Setiform } from '../../characters/v1/Trichomes'
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

// Description of Mimosa sensitiva_var_sensitiva
const Mimosa_sensitiva_var_sensitiva = new Mimosa()
Mimosa_sensitiva_var_sensitiva.specificEpithet = 'sensitiva var. sensitiva'

Mimosa_sensitiva_var_sensitiva.stems = new Stems()

Mimosa_sensitiva_var_sensitiva.stipule = new Stipule()
Mimosa_sensitiva_var_sensitiva.stipule.margin = new MarginStipule()
Mimosa_sensitiva_var_sensitiva.stipule.adaxial = new AdaxialStipule()
Mimosa_sensitiva_var_sensitiva.stipule.abaxial = new AbaxialStipule()

Mimosa_sensitiva_var_sensitiva.leaf = new Leaf()
Mimosa_sensitiva_var_sensitiva.leaf.petiole = new Petiole()
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate = new Bipinnate()
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.rachis = new Rachis()
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(1)
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.setiform = new Setiform()
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.setiform.are = 'present'

Mimosa_sensitiva_var_sensitiva.inflorescence = new Inflorescence()
Mimosa_sensitiva_var_sensitiva.inflorescence.peduncle = new Peduncle()
Mimosa_sensitiva_var_sensitiva.inflorescence.capitate = new CapitateInflorescence()

Mimosa_sensitiva_var_sensitiva.flower = new Flower()
Mimosa_sensitiva_var_sensitiva.flower.bracteole = new Bracteole()
Mimosa_sensitiva_var_sensitiva.flower.merism = '4-merous'
Mimosa_sensitiva_var_sensitiva.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_sensitiva_var_sensitiva.flower.calyx = new Calyx()
Mimosa_sensitiva_var_sensitiva.flower.calyx.shape = 'pappiform'
Mimosa_sensitiva_var_sensitiva.flower.corolla = new Corolla()
Mimosa_sensitiva_var_sensitiva.flower.corolla.shape = ['tubulose', 'campanulate']

Mimosa_sensitiva_var_sensitiva.androecium = new Androecium()
Mimosa_sensitiva_var_sensitiva.androecium.filaments = new Filaments()
Mimosa_sensitiva_var_sensitiva.androecium.filaments.colour = 'pinkish'

Mimosa_sensitiva_var_sensitiva.ginoecium = new Ginoecium()
Mimosa_sensitiva_var_sensitiva.ginoecium.ovary = new Ovary()

Mimosa_sensitiva_var_sensitiva.fruit = new Fruit()
Mimosa_sensitiva_var_sensitiva.fruit.stipe = new Stipe()
Mimosa_sensitiva_var_sensitiva.fruit.replum = new Replum()
Mimosa_sensitiva_var_sensitiva.fruit.epicarp = new Epicarp()

Mimosa_sensitiva_var_sensitiva.seed = new Seed()


// Description authorship
Mimosa_sensitiva_var_sensitiva.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_sensitiva_var_sensitiva.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})

// Sources
/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = 2020
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source1.journal = 'Flora'
source1.number = 272
source1.pages = 151702
source1.figure = '2G'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_sensitiva_var_sensitiva.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.setiform.addSource(source1)

// Export Mimosa sensitiva_var_sensitiva
export { Mimosa_sensitiva_var_sensitiva }