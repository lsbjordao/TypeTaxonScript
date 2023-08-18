// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Leaf, Gall } from '../../characters/v1'
import { Bipinnate } from '../../characters/v1/Leaf'
import { Pinnae } from '../../characters/v1/Leaf/Bipinnate'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'

// Description of Mimosa gemulata
const Mimosa_gemulata = new Mimosa()
Mimosa_gemulata.specificEpithet = 'gemulata'

Mimosa_gemulata.leaf = new Leaf()
Mimosa_gemulata.leaf.bipinnate = new Bipinnate()
Mimosa_gemulata.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_gemulata.leaf.bipinnate.pinnae.gall = new Gall()
Mimosa_gemulata.leaf.bipinnate.pinnae.gall.inducedBy = 'Cecidomyiidae'

// Description authorship
Mimosa_gemulata.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_gemulata.descriptionAuthorship.addAuthor({
    name: 'Juliana Santos-Silva',
    date: 1692107172
})

// Sources
/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Vieira, L.G. & Nogueiro, R.M. & Costa, E.C. & Carvalho-Fernandes, S.P. & Santos-Silva, J.'
source1.year = 2018
source1.title = 'Insect galls in Rupestrian field and Cerrado stricto sensu vegetation in Caetité, Bahia, Brazil'
source1.journal = 'Biota Neotrop.'
source1.number = 18
source1.volume = 2
source1.figure = '2P,Q'
source1.obtainingMethod = 'photo'
source1.doi = 'https://doi.org/10.1590/1676-0611-BN-2017-0402'
Mimosa_gemulata.leaf.bipinnate.pinnae.gall.addSource(source1)

// Export Mimosa gemulata
export { Mimosa_gemulata }