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
import { Filiform, Granular, Trichomes } from '../../characters/v1/Trichomes'
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
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa arenosa var. arenosa
const Mimosa_arenosa_var_arenosa = new Mimosa()
Mimosa_arenosa_var_arenosa.specificEpithet = 'arenosa var. arenosa'

Mimosa_arenosa_var_arenosa.stipule = new Stipule()
Mimosa_arenosa_var_arenosa.stipule.margin = new MarginStipule()
Mimosa_arenosa_var_arenosa.stipule.adaxial = new AdaxialStipule()
Mimosa_arenosa_var_arenosa.stipule.abaxial = new AbaxialStipule()

Mimosa_arenosa_var_arenosa.leaf = new Leaf()
Mimosa_arenosa_var_arenosa.leaf.petiole = new Petiole()
Mimosa_arenosa_var_arenosa.leaf.petiole.trichomes = new Trichomes()
Mimosa_arenosa_var_arenosa.leaf.petiole.trichomes.granular = new Granular()
Mimosa_arenosa_var_arenosa.leaf.petiole.trichomes.granular.are = 'present'
Mimosa_arenosa_var_arenosa.leaf.bipinnate = new Bipinnate()
Mimosa_arenosa_var_arenosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_arenosa_var_arenosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_arenosa_var_arenosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_arenosa_var_arenosa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 12)
Mimosa_arenosa_var_arenosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_arenosa_var_arenosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_arenosa_var_arenosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_arenosa_var_arenosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 30)
Mimosa_arenosa_var_arenosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_arenosa_var_arenosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_arenosa_var_arenosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_arenosa_var_arenosa.inflorescence = new Inflorescence()
Mimosa_arenosa_var_arenosa.inflorescence.peduncle = new Peduncle()
Mimosa_arenosa_var_arenosa.inflorescence.spicate = new Spicate()

Mimosa_arenosa_var_arenosa.flower = new Flower()
Mimosa_arenosa_var_arenosa.flower.bracteole = new Bracteole()
Mimosa_arenosa_var_arenosa.flower.merism = '4-merous'
Mimosa_arenosa_var_arenosa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_arenosa_var_arenosa.flower.calyx = new Calyx()
Mimosa_arenosa_var_arenosa.flower.calyx.shape = 'campanulate'
Mimosa_arenosa_var_arenosa.flower.corolla = new Corolla()
Mimosa_arenosa_var_arenosa.flower.corolla.shape = 'turbinate'

Mimosa_arenosa_var_arenosa.androecium = new Androecium()
Mimosa_arenosa_var_arenosa.androecium.filaments = new Filaments()
Mimosa_arenosa_var_arenosa.androecium.filaments.colour = 'whitenish'

Mimosa_arenosa_var_arenosa.ginoecium = new Ginoecium()
Mimosa_arenosa_var_arenosa.ginoecium.ovary = new Ovary()

Mimosa_arenosa_var_arenosa.fruit = new Fruit()
Mimosa_arenosa_var_arenosa.fruit.stipe = new Stipe()
Mimosa_arenosa_var_arenosa.fruit.replum = new Replum()
Mimosa_arenosa_var_arenosa.fruit.epicarp = new Epicarp()

Mimosa_arenosa_var_arenosa.seed = new Seed()

// Description authorship
Mimosa_arenosa_var_arenosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_arenosa_var_arenosa.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})

// Sources
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = 2018
source1.title = 'Toward a Census of *Mimosa* (Leguminosae) in the Atlantic Domain, Southeastern Brazil'
source1.journal = 'Systematic Botany'
source1.volume = 43
source1.number = 1
source1.pages = 162-197
Mimosa_arenosa_var_arenosa.addSource(source1)

/// Trichomes
const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '8A'
source2.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_arenosa_var_arenosa.leaf.petiole.trichomes.granular.addSource(source2)

// Export Mimosa arenosa var. arenosa
export { Mimosa_arenosa_var_arenosa }