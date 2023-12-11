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


// Description of Mimosa ceratonia var pseudo-obovata
const Mimosa_ceratonia_var_pseudoObovata = new Mimosa()
Mimosa_ceratonia_var_pseudoObovata.specificEpithet = 'ceratonia var pseudo-obovata'

Mimosa_ceratonia_var_pseudoObovata.stems = new Stems()

Mimosa_ceratonia_var_pseudoObovata.stipule = new Stipule()
Mimosa_ceratonia_var_pseudoObovata.stipule.margin = new MarginStipule()
Mimosa_ceratonia_var_pseudoObovata.stipule.adaxial = new AdaxialStipule()
Mimosa_ceratonia_var_pseudoObovata.stipule.abaxial = new AbaxialStipule()

Mimosa_ceratonia_var_pseudoObovata.leaf = new Leaf()
Mimosa_ceratonia_var_pseudoObovata.leaf.petiole = new Petiole()
Mimosa_ceratonia_var_pseudoObovata.leaf.bipinnate = new Bipinnate()
Mimosa_ceratonia_var_pseudoObovata.leaf.bipinnate.rachis = new Rachis()
Mimosa_ceratonia_var_pseudoObovata.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_ceratonia_var_pseudoObovata.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_ceratonia_var_pseudoObovata.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_ceratonia_var_pseudoObovata.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(5)
Mimosa_ceratonia_var_pseudoObovata.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_ceratonia_var_pseudoObovata.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_ceratonia_var_pseudoObovata.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_ceratonia_var_pseudoObovata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(2, 4)
Mimosa_ceratonia_var_pseudoObovata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(5)
Mimosa_ceratonia_var_pseudoObovata.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_ceratonia_var_pseudoObovata.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_ceratonia_var_pseudoObovata.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_ceratonia_var_pseudoObovata.inflorescence = new Inflorescence()
Mimosa_ceratonia_var_pseudoObovata.inflorescence.peduncle = new Peduncle()
Mimosa_ceratonia_var_pseudoObovata.inflorescence.capitate = new CapitateInflorescence()

Mimosa_ceratonia_var_pseudoObovata.flower = new Flower()
Mimosa_ceratonia_var_pseudoObovata.flower.bracteole = new Bracteole()
Mimosa_ceratonia_var_pseudoObovata.flower.merism = '3-merous'
Mimosa_ceratonia_var_pseudoObovata.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_ceratonia_var_pseudoObovata.flower.calyx = new Calyx()
Mimosa_ceratonia_var_pseudoObovata.flower.calyx.shape = 'campanulate'
Mimosa_ceratonia_var_pseudoObovata.flower.corolla = new Corolla()
Mimosa_ceratonia_var_pseudoObovata.flower.corolla.shape = 'turbinate'

Mimosa_ceratonia_var_pseudoObovata.androecium = new Androecium()
Mimosa_ceratonia_var_pseudoObovata.androecium.filaments = new Filaments()
Mimosa_ceratonia_var_pseudoObovata.androecium.filaments.colour = 'whitenish'

Mimosa_ceratonia_var_pseudoObovata.ginoecium = new Ginoecium()
Mimosa_ceratonia_var_pseudoObovata.ginoecium.ovary = new Ovary()

Mimosa_ceratonia_var_pseudoObovata.fruit = new Fruit()
Mimosa_ceratonia_var_pseudoObovata.fruit.stipe = new Stipe()
Mimosa_ceratonia_var_pseudoObovata.fruit.replum = new Replum()
Mimosa_ceratonia_var_pseudoObovata.fruit.epicarp = new Epicarp()

Mimosa_ceratonia_var_pseudoObovata.seed = new Seed()


// Description authorship
Mimosa_ceratonia_var_pseudoObovata.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_ceratonia_var_pseudoObovata.descriptionAuthorship.addAuthor({
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
Mimosa_ceratonia_var_pseudoObovata.addSource(source0)

// Export Mimosa ceratonia var pseudo-obovata
export { Mimosa_ceratonia_var_pseudoObovata }