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
import { SetiformBarbellate } from '../../characters/v1/Trichomes/Setiform'


// Description of Mimosa pigra_var_pigra
const Mimosa_pigra_var_pigra = new Mimosa()
Mimosa_pigra_var_pigra.specificEpithet = 'pigra var. pigra'

Mimosa_pigra_var_pigra.stems = new Stems()
Mimosa_pigra_var_pigra.stems.trichomes = new Trichomes()
Mimosa_pigra_var_pigra.stems.trichomes.filiform = new Filiform()
Mimosa_pigra_var_pigra.stems.trichomes.filiform.are = 'present'
Mimosa_pigra_var_pigra.stems.trichomes.setiform = new Setiform()
Mimosa_pigra_var_pigra.stems.trichomes.setiform.barbellate = new SetiformBarbellate()
Mimosa_pigra_var_pigra.stems.trichomes.setiform.barbellate.are = 'present'

Mimosa_pigra_var_pigra.stipule = new Stipule()
Mimosa_pigra_var_pigra.stipule.margin = new MarginStipule()
Mimosa_pigra_var_pigra.stipule.adaxial = new AdaxialStipule()
Mimosa_pigra_var_pigra.stipule.abaxial = new AbaxialStipule()

Mimosa_pigra_var_pigra.leaf = new Leaf()
Mimosa_pigra_var_pigra.leaf.petiole = new Petiole()
Mimosa_pigra_var_pigra.leaf.bipinnate = new Bipinnate()
Mimosa_pigra_var_pigra.leaf.bipinnate.rachis = new Rachis()
Mimosa_pigra_var_pigra.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pigra_var_pigra.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pigra_var_pigra.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(7, 18)
Mimosa_pigra_var_pigra.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pigra_var_pigra.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pigra_var_pigra.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pigra_var_pigra.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 18)
Mimosa_pigra_var_pigra.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pigra_var_pigra.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pigra_var_pigra.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pigra_var_pigra.inflorescence = new Inflorescence()
Mimosa_pigra_var_pigra.inflorescence.peduncle = new Peduncle()
Mimosa_pigra_var_pigra.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pigra_var_pigra.flower = new Flower()
Mimosa_pigra_var_pigra.flower.bracteole = new Bracteole()
Mimosa_pigra_var_pigra.flower.merism = '4-merous'
Mimosa_pigra_var_pigra.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_pigra_var_pigra.flower.calyx = new Calyx()
Mimosa_pigra_var_pigra.flower.calyx.shape = 'pappiform'
Mimosa_pigra_var_pigra.flower.corolla = new Corolla()
Mimosa_pigra_var_pigra.flower.corolla.shape = 'campanulate'

Mimosa_pigra_var_pigra.androecium = new Androecium()
Mimosa_pigra_var_pigra.androecium.filaments = new Filaments()
Mimosa_pigra_var_pigra.androecium.filaments.colour = 'whitenish'

Mimosa_pigra_var_pigra.ginoecium = new Ginoecium()
Mimosa_pigra_var_pigra.ginoecium.ovary = new Ovary()

Mimosa_pigra_var_pigra.fruit = new Fruit()
Mimosa_pigra_var_pigra.fruit.stipe = new Stipe()
Mimosa_pigra_var_pigra.fruit.replum = new Replum()
Mimosa_pigra_var_pigra.fruit.epicarp = new Epicarp()

Mimosa_pigra_var_pigra.seed = new Seed()


// Description authorship
Mimosa_pigra_var_pigra.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pigra_var_pigra.descriptionAuthorship.addAuthor({
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
source0.pages = '162-197'
Mimosa_pigra_var_pigra.addSource(source0)

/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = 2020
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source1.journal = 'Flora'
source1.number = 272
source1.pages = '151702'
source1.figure = '3D'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_pigra_var_pigra.stems.trichomes.setiform.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = '151702'
source2.figure = '3E'
source2.obtainingMethod = 'stereoscope'
Mimosa_pigra_var_pigra.stems.trichomes.setiform.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = 2020
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source3.journal = 'Flora'
source3.number = 272
source3.pages = '151702'
source3.figure = '3F'
source3.obtainingMethod = 'opticalMicroscope'
Mimosa_pigra_var_pigra.stems.trichomes.setiform.addSource(source3)

// Export Mimosa pigra_var_pigra
export { Mimosa_pigra_var_pigra }