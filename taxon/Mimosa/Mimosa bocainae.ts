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
    Fruit,
    Trichomes
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
import { Setiform } from '../../characters/v1/Trichomes'
import { SetiformBarbellate } from '../../characters/v1/Trichomes/Setiform'


// Description of Mimosa bocainae
const Mimosa_bocainae = new Mimosa()
Mimosa_bocainae.specificEpithet = 'bocainae'

Mimosa_bocainae.stems = new Stems()
Mimosa_bocainae.stems.trichomes = new Trichomes()
Mimosa_bocainae.stems.trichomes.setiform = new Setiform()
Mimosa_bocainae.stems.trichomes.setiform.barbellate = new SetiformBarbellate()
Mimosa_bocainae.stems.trichomes.setiform.barbellate.are = 'present'
Mimosa_bocainae.stems.trichomes.setiform.barbellate.density = 'densely'

Mimosa_bocainae.stipule = new Stipule()
Mimosa_bocainae.stipule.margin = new MarginStipule()
Mimosa_bocainae.stipule.adaxial = new AdaxialStipule()
Mimosa_bocainae.stipule.abaxial = new AbaxialStipule()

Mimosa_bocainae.leaf = new Leaf()
Mimosa_bocainae.leaf.petiole = new Petiole()
Mimosa_bocainae.leaf.bipinnate = new Bipinnate()
Mimosa_bocainae.leaf.bipinnate.rachis = new Rachis()
Mimosa_bocainae.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_bocainae.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_bocainae.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_bocainae.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_bocainae.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_bocainae.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_bocainae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(26, 32)
Mimosa_bocainae.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_bocainae.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_bocainae.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_bocainae.inflorescence = new Inflorescence()
Mimosa_bocainae.inflorescence.peduncle = new Peduncle()
Mimosa_bocainae.inflorescence.capitate = new CapitateInflorescence()

Mimosa_bocainae.flower = new Flower()
Mimosa_bocainae.flower.bracteole = new Bracteole()
Mimosa_bocainae.flower.merism = '4-merous'
Mimosa_bocainae.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_bocainae.flower.calyx = new Calyx()
Mimosa_bocainae.flower.calyx.shape = 'pappiform'
Mimosa_bocainae.flower.corolla = new Corolla()
Mimosa_bocainae.flower.corolla.shape = 'turbinate'

Mimosa_bocainae.androecium = new Androecium()
Mimosa_bocainae.androecium.filaments = new Filaments()
Mimosa_bocainae.androecium.filaments.colour = 'pinkish'

Mimosa_bocainae.ginoecium = new Ginoecium()
Mimosa_bocainae.ginoecium.ovary = new Ovary()

Mimosa_bocainae.fruit = new Fruit()
Mimosa_bocainae.fruit.stipe = new Stipe()
Mimosa_bocainae.fruit.replum = new Replum()
Mimosa_bocainae.fruit.epicarp = new Epicarp()

Mimosa_bocainae.seed = new Seed()


// Description authorship
Mimosa_bocainae.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_bocainae.descriptionAuthorship.addAuthor({
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
Mimosa_bocainae.addSource(source0)

// Export Mimosa bocainae
export { Mimosa_bocainae }