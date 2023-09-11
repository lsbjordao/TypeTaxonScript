// Import genus Mimosa
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

// Description of Mimosa somnians var. lasiocarpa
const Mimosa_somnians_var_lasiocarpa = new Mimosa()
Mimosa_somnians_var_lasiocarpa.specificEpithet = 'somnians var. lasiocarpa'

Mimosa_somnians_var_lasiocarpa.stems = new Stems()
Mimosa_somnians_var_lasiocarpa.stems.trichomes = new Trichomes()
Mimosa_somnians_var_lasiocarpa.stems.trichomes.filiform = new Filiform()
Mimosa_somnians_var_lasiocarpa.stems.trichomes.filiform.are = 'present'
Mimosa_somnians_var_lasiocarpa.stems.trichomes.setiform = new Setiform()
Mimosa_somnians_var_lasiocarpa.stems.trichomes.setiform.are = 'present'

Mimosa_somnians_var_lasiocarpa.stipule = new Stipule()
Mimosa_somnians_var_lasiocarpa.stipule.margin = new MarginStipule()
Mimosa_somnians_var_lasiocarpa.stipule.adaxial = new AdaxialStipule()
Mimosa_somnians_var_lasiocarpa.stipule.abaxial = new AbaxialStipule()

Mimosa_somnians_var_lasiocarpa.leaf = new Leaf()
Mimosa_somnians_var_lasiocarpa.leaf.petiole = new Petiole()
Mimosa_somnians_var_lasiocarpa.leaf.bipinnate = new Bipinnate()
Mimosa_somnians_var_lasiocarpa.leaf.bipinnate.rachis = new Rachis()
Mimosa_somnians_var_lasiocarpa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_somnians_var_lasiocarpa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_somnians_var_lasiocarpa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_somnians_var_lasiocarpa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_somnians_var_lasiocarpa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_somnians_var_lasiocarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(3, 7)
Mimosa_somnians_var_lasiocarpa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_somnians_var_lasiocarpa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_somnians_var_lasiocarpa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_somnians_var_lasiocarpa.inflorescence = new Inflorescence()
Mimosa_somnians_var_lasiocarpa.inflorescence.peduncle = new Peduncle()
Mimosa_somnians_var_lasiocarpa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_somnians_var_lasiocarpa.flower = new Flower()
Mimosa_somnians_var_lasiocarpa.flower.bracteole = new Bracteole()
Mimosa_somnians_var_lasiocarpa.flower.merism = '4-merous'
Mimosa_somnians_var_lasiocarpa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_somnians_var_lasiocarpa.flower.calyx = new Calyx()
Mimosa_somnians_var_lasiocarpa.flower.calyx.shape = 'campanulate'
Mimosa_somnians_var_lasiocarpa.flower.corolla = new Corolla()
Mimosa_somnians_var_lasiocarpa.flower.corolla.shape = 'turbinate'

Mimosa_somnians_var_lasiocarpa.androecium = new Androecium()
Mimosa_somnians_var_lasiocarpa.androecium.filaments = new Filaments()
Mimosa_somnians_var_lasiocarpa.androecium.filaments.colour = 'pinkish'

Mimosa_somnians_var_lasiocarpa.ginoecium = new Ginoecium()
Mimosa_somnians_var_lasiocarpa.ginoecium.ovary = new Ovary()

Mimosa_somnians_var_lasiocarpa.fruit = new Fruit()
Mimosa_somnians_var_lasiocarpa.fruit.stipe = new Stipe()
Mimosa_somnians_var_lasiocarpa.fruit.replum = new Replum()
Mimosa_somnians_var_lasiocarpa.fruit.epicarp = new Epicarp()

Mimosa_somnians_var_lasiocarpa.seed = new Seed()


// Description authorship
Mimosa_somnians_var_lasiocarpa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_somnians_var_lasiocarpa.descriptionAuthorship.addAuthor({
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
source1.figure = '2I'
source1.obtainingMethod = 'opticalMicroscope'
Mimosa_somnians_var_lasiocarpa.stems.trichomes.filiform.addSource(source1)
Mimosa_somnians_var_lasiocarpa.stems.trichomes.setiform.addSource(source1)

// Export Mimosa somnians_var_lasiocarpa
export { Mimosa_somnians_var_lasiocarpa }