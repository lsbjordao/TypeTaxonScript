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
import { Filiform, Setiform, Capitate } from '../../characters/v1/Trichomes'
import { CapitateSetiform } from '../../characters/v1/Trichomes/Capitate'
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

// Description of Mimosa paludosa
const Mimosa_paludosa = new Mimosa()
Mimosa_paludosa.specificEpithet = 'paludosa'

Mimosa_paludosa.stems = new Stems()
Mimosa_paludosa.stems.trichomes = new Trichomes()
Mimosa_paludosa.stems.trichomes.filiform = new Filiform()
Mimosa_paludosa.stems.trichomes.filiform.are = 'present'
Mimosa_paludosa.stems.trichomes.setiform = new Setiform()
Mimosa_paludosa.stems.trichomes.setiform.are = 'present'
Mimosa_paludosa.stems.trichomes.capitate = new Capitate()
Mimosa_paludosa.stems.trichomes.capitate.setiform = new CapitateSetiform()
Mimosa_paludosa.stems.trichomes.capitate.setiform.are = 'present'

Mimosa_paludosa.stipule = new Stipule()
Mimosa_paludosa.stipule.margin = new MarginStipule()
Mimosa_paludosa.stipule.adaxial = new AdaxialStipule()
Mimosa_paludosa.stipule.abaxial = new AbaxialStipule()

Mimosa_paludosa.leaf = new Leaf()
Mimosa_paludosa.leaf.petiole = new Petiole()
Mimosa_paludosa.leaf.bipinnate = new Bipinnate()
Mimosa_paludosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_paludosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_paludosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_paludosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_paludosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_paludosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_paludosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 17)
Mimosa_paludosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_paludosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_paludosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_paludosa.inflorescence = new Inflorescence()
Mimosa_paludosa.inflorescence.peduncle = new Peduncle()
Mimosa_paludosa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_paludosa.flower = new Flower()
Mimosa_paludosa.flower.bracteole = new Bracteole()
Mimosa_paludosa.flower.merism = '4-merous'
Mimosa_paludosa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_paludosa.flower.calyx = new Calyx()
Mimosa_paludosa.flower.calyx.shape = 'campanulate'
Mimosa_paludosa.flower.corolla = new Corolla()
Mimosa_paludosa.flower.corolla.shape = 'campanulate'

Mimosa_paludosa.androecium = new Androecium()
Mimosa_paludosa.androecium.filaments = new Filaments()
Mimosa_paludosa.androecium.filaments.colour = 'pinkish'

Mimosa_paludosa.ginoecium = new Ginoecium()
Mimosa_paludosa.ginoecium.ovary = new Ovary()

Mimosa_paludosa.fruit = new Fruit()
Mimosa_paludosa.fruit.stipe = new Stipe()
Mimosa_paludosa.fruit.replum = new Replum()
Mimosa_paludosa.fruit.epicarp = new Epicarp()

Mimosa_paludosa.seed = new Seed()


// Description authorship
Mimosa_paludosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_paludosa.descriptionAuthorship.addAuthor({
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
Mimosa_paludosa.addSource(source0)

/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = 2020
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source1.journal = 'Flora'
source1.number = 272
source1.pages = 151702
source1.figure = '1A'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_paludosa.stems.trichomes.filiform.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = 2020
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = 272
source2.pages = 151702
source2.figure = '9C'
source2.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_paludosa.stems.trichomes.filiform.addSource(source2)
Mimosa_paludosa.stems.trichomes.capitate.setiform.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = 2020
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source3.journal = 'Flora'
source3.number = 272
source3.pages = 151702
source3.figure = '9D'
source3.obtainingMethod = 'photo'
Mimosa_paludosa.stems.trichomes.capitate.setiform.addSource(source3)

const source4 = new Source()
source4.sourceType = 'article'
source4.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source4.year = 2020
source4.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source4.journal = 'Flora'
source4.number = 272
source4.pages = 151702
source4.figure = '9E'
source4.obtainingMethod = 'opticalMicroscope'
Mimosa_paludosa.stems.trichomes.capitate.setiform.addSource(source4)

// Export Mimosa paludosa
export { Mimosa_paludosa }