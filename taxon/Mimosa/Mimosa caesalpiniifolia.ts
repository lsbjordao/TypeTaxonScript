// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Stems, Trichomes, Stipule, Leaf, Inflorescence, Flower, Androecium, Ginoecium, Fruit, Seed } from '../../characters/v1'
import { Filiform } from '../../characters/v1/Trichomes'
import { AbaxialStipule, AdaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Pinnae, Rachis } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Leaflet, Paraphillidia, Rachilla } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { AbaxialLeaflet, AdaxialLeaflet, MarginLeaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Bracteole, Calyx, Corolla } from '../../characters/v1/Flower'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Epicarp, Replum, Stipe } from '../../characters/v1/Fruit'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa caesalpiniifolia
const Mimosa_caesalpiniifolia = new Mimosa()
Mimosa_caesalpiniifolia.specificEpithet = 'caesalpiniifolia'

Mimosa_caesalpiniifolia.stems = new Stems()
Mimosa_caesalpiniifolia.stems.trichomes = new Trichomes()
Mimosa_caesalpiniifolia.stems.trichomes.filiform = new Filiform()
Mimosa_caesalpiniifolia.stems.trichomes.filiform.are = 'present'

Mimosa_caesalpiniifolia.stipule = new Stipule()
Mimosa_caesalpiniifolia.stipule.margin = new MarginStipule()
Mimosa_caesalpiniifolia.stipule.adaxial = new AdaxialStipule()
Mimosa_caesalpiniifolia.stipule.abaxial = new AbaxialStipule()

Mimosa_caesalpiniifolia.leaf = new Leaf()
Mimosa_caesalpiniifolia.leaf.petiole = new Petiole()
Mimosa_caesalpiniifolia.leaf.bipinnate = new Bipinnate()
Mimosa_caesalpiniifolia.leaf.bipinnate.rachis = new Rachis()
Mimosa_caesalpiniifolia.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_caesalpiniifolia.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_caesalpiniifolia.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_caesalpiniifolia.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_caesalpiniifolia.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_caesalpiniifolia.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_caesalpiniifolia.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(1, 4)
Mimosa_caesalpiniifolia.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_caesalpiniifolia.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_caesalpiniifolia.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_caesalpiniifolia.inflorescence = new Inflorescence()
Mimosa_caesalpiniifolia.inflorescence.peduncle = new Peduncle()
Mimosa_caesalpiniifolia.inflorescence.spicate = new Spicate()

Mimosa_caesalpiniifolia.flower = new Flower()
Mimosa_caesalpiniifolia.flower.bracteole = new Bracteole()
Mimosa_caesalpiniifolia.flower.merism = '3-merous'
Mimosa_caesalpiniifolia.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_caesalpiniifolia.flower.calyx = new Calyx()
Mimosa_caesalpiniifolia.flower.calyx.shape = 'campanulate'
Mimosa_caesalpiniifolia.flower.corolla = new Corolla()
Mimosa_caesalpiniifolia.flower.corolla.shape = 'turbinate'

Mimosa_caesalpiniifolia.androecium = new Androecium()
Mimosa_caesalpiniifolia.androecium.filaments = new Filaments()
Mimosa_caesalpiniifolia.androecium.filaments.colour = 'whitenish'

Mimosa_caesalpiniifolia.ginoecium = new Ginoecium()
Mimosa_caesalpiniifolia.ginoecium.ovary = new Ovary()

Mimosa_caesalpiniifolia.fruit = new Fruit()
Mimosa_caesalpiniifolia.fruit.stipe = new Stipe()
Mimosa_caesalpiniifolia.fruit.replum = new Replum()
Mimosa_caesalpiniifolia.fruit.epicarp = new Epicarp()

Mimosa_caesalpiniifolia.seed = new Seed()


// Description authorship
Mimosa_caesalpiniifolia.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_caesalpiniifolia.descriptionAuthorship.addAuthor({
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
source1.figure = '1A'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_caesalpiniifolia.stems.trichomes.filiform.addSource(source1)

// Export Mimosa caesalpiniifolia
export { Mimosa_caesalpiniifolia }