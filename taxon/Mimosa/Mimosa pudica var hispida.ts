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

// Description of Mimosa pudica_var_hispida
const Mimosa_pudica_var_hispida = new Mimosa()
Mimosa_pudica_var_hispida.specificEpithet = 'pudica var. hispida'

Mimosa_pudica_var_hispida.stems = new Stems()
Mimosa_pudica_var_hispida.stems.trichomes = new Trichomes()
Mimosa_pudica_var_hispida.stems.trichomes.filiform = new Filiform()
Mimosa_pudica_var_hispida.stems.trichomes.filiform.are = 'present'
Mimosa_pudica_var_hispida.stems.trichomes.setiform = new Setiform()
Mimosa_pudica_var_hispida.stems.trichomes.setiform.are = 'present'

Mimosa_pudica_var_hispida.stipule = new Stipule()
Mimosa_pudica_var_hispida.stipule.margin = new MarginStipule()
Mimosa_pudica_var_hispida.stipule.adaxial = new AdaxialStipule()
Mimosa_pudica_var_hispida.stipule.abaxial = new AbaxialStipule()

Mimosa_pudica_var_hispida.leaf = new Leaf()
Mimosa_pudica_var_hispida.leaf.petiole = new Petiole()
Mimosa_pudica_var_hispida.leaf.bipinnate = new Bipinnate()
Mimosa_pudica_var_hispida.leaf.bipinnate.rachis = new Rachis()
Mimosa_pudica_var_hispida.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1)
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae.setNumberOfPairs(2)
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(1)
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(2)
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pudica_var_hispida.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pudica_var_hispida.inflorescence = new Inflorescence()
Mimosa_pudica_var_hispida.inflorescence.peduncle = new Peduncle()
Mimosa_pudica_var_hispida.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pudica_var_hispida.flower = new Flower()
Mimosa_pudica_var_hispida.flower.bracteole = new Bracteole()
Mimosa_pudica_var_hispida.flower.merism = '4-merous'
Mimosa_pudica_var_hispida.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_pudica_var_hispida.flower.calyx = new Calyx()
Mimosa_pudica_var_hispida.flower.calyx.shape = 'campanulate'
Mimosa_pudica_var_hispida.flower.corolla = new Corolla()
Mimosa_pudica_var_hispida.flower.corolla.shape = 'campanulate'

Mimosa_pudica_var_hispida.androecium = new Androecium()
Mimosa_pudica_var_hispida.androecium.filaments = new Filaments()
Mimosa_pudica_var_hispida.androecium.filaments.colour = 'pinkish'

Mimosa_pudica_var_hispida.ginoecium = new Ginoecium()
Mimosa_pudica_var_hispida.ginoecium.ovary = new Ovary()

Mimosa_pudica_var_hispida.fruit = new Fruit()
Mimosa_pudica_var_hispida.fruit.stipe = new Stipe()
Mimosa_pudica_var_hispida.fruit.replum = new Replum()
Mimosa_pudica_var_hispida.fruit.epicarp = new Epicarp()

Mimosa_pudica_var_hispida.seed = new Seed()


// Description authorship
Mimosa_pudica_var_hispida.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pudica_var_hispida.descriptionAuthorship.addAuthor({
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
Mimosa_pudica_var_hispida.addSource(source0)

/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = 2020
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source1.journal = 'Flora'
source1.number = 272
source1.pages = 151702
source1.figure = '2F'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_pudica_var_hispida.stems.trichomes.filiform.addSource(source1)

// Export Mimosa pudica_var_hispida
export { Mimosa_pudica_var_hispida }