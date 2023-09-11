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
import { Setiform } from '../../characters/v1/Trichomes'
import { SetiformBarbellate } from '../../characters/v1/Trichomes/Setiform'
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

// Description of Mimosa xanthocentra_var_xanthocentra
const Mimosa_xanthocentra_var_xanthocentra = new Mimosa()
Mimosa_xanthocentra_var_xanthocentra.specificEpithet = 'xanthocentra var. xanthocentra'

Mimosa_xanthocentra_var_xanthocentra.stems = new Stems()
Mimosa_xanthocentra_var_xanthocentra.stems.trichomes = new Trichomes()
Mimosa_xanthocentra_var_xanthocentra.stems.trichomes.setiform = new Setiform()
Mimosa_xanthocentra_var_xanthocentra.stems.trichomes.setiform.barbellate = new SetiformBarbellate()
Mimosa_xanthocentra_var_xanthocentra.stems.trichomes.setiform.barbellate.are = 'present'

Mimosa_xanthocentra_var_xanthocentra.stipule = new Stipule()
Mimosa_xanthocentra_var_xanthocentra.stipule.margin = new MarginStipule()
Mimosa_xanthocentra_var_xanthocentra.stipule.adaxial = new AdaxialStipule()
Mimosa_xanthocentra_var_xanthocentra.stipule.abaxial = new AbaxialStipule()

Mimosa_xanthocentra_var_xanthocentra.leaf = new Leaf()
Mimosa_xanthocentra_var_xanthocentra.leaf.petiole = new Petiole()
Mimosa_xanthocentra_var_xanthocentra.leaf.bipinnate = new Bipinnate()
Mimosa_xanthocentra_var_xanthocentra.leaf.bipinnate.rachis = new Rachis()
Mimosa_xanthocentra_var_xanthocentra.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_xanthocentra_var_xanthocentra.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_xanthocentra_var_xanthocentra.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_xanthocentra_var_xanthocentra.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_xanthocentra_var_xanthocentra.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_xanthocentra_var_xanthocentra.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(1)
Mimosa_xanthocentra_var_xanthocentra.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_xanthocentra_var_xanthocentra.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_xanthocentra_var_xanthocentra.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_xanthocentra_var_xanthocentra.inflorescence = new Inflorescence()
Mimosa_xanthocentra_var_xanthocentra.inflorescence.peduncle = new Peduncle()
Mimosa_xanthocentra_var_xanthocentra.inflorescence.capitate = new CapitateInflorescence()

Mimosa_xanthocentra_var_xanthocentra.flower = new Flower()
Mimosa_xanthocentra_var_xanthocentra.flower.bracteole = new Bracteole()
Mimosa_xanthocentra_var_xanthocentra.flower.merism = '4-merous'
Mimosa_xanthocentra_var_xanthocentra.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_xanthocentra_var_xanthocentra.flower.calyx = new Calyx()
Mimosa_xanthocentra_var_xanthocentra.flower.calyx.shape = 'pappiform'
Mimosa_xanthocentra_var_xanthocentra.flower.corolla = new Corolla()
Mimosa_xanthocentra_var_xanthocentra.flower.corolla.shape = 'campanulate'

Mimosa_xanthocentra_var_xanthocentra.androecium = new Androecium()
Mimosa_xanthocentra_var_xanthocentra.androecium.filaments = new Filaments()
Mimosa_xanthocentra_var_xanthocentra.androecium.filaments.colour = 'pinkish'

Mimosa_xanthocentra_var_xanthocentra.ginoecium = new Ginoecium()
Mimosa_xanthocentra_var_xanthocentra.ginoecium.ovary = new Ovary()

Mimosa_xanthocentra_var_xanthocentra.fruit = new Fruit()
Mimosa_xanthocentra_var_xanthocentra.fruit.stipe = new Stipe()
Mimosa_xanthocentra_var_xanthocentra.fruit.replum = new Replum()
Mimosa_xanthocentra_var_xanthocentra.fruit.epicarp = new Epicarp()

Mimosa_xanthocentra_var_xanthocentra.seed = new Seed()


// Description authorship
Mimosa_xanthocentra_var_xanthocentra.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_xanthocentra_var_xanthocentra.descriptionAuthorship.addAuthor({
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
source1.figure = '3B'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_xanthocentra_var_xanthocentra.stems.trichomes.setiform.barbellate.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '3C'
source2.obtainingMethod = 'stereoscope'
Mimosa_xanthocentra_var_xanthocentra.stems.trichomes.setiform.barbellate.addSource(source2)

// Export Mimosa xanthocentra_var_xanthocentra
export { Mimosa_xanthocentra_var_xanthocentra }