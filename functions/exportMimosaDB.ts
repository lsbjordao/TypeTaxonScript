// Import genus Mimosa
import { Mimosa } from '../taxon/Mimosa'

// Import species of Mimosa
import { Mimosa_afranioi } from '../taxon/Mimosa/Mimosa afranioi'
import { Mimosa_arenosa_var_arenosa } from '../taxon/Mimosa/Mimosa arenosa var arenosa'
import { Mimosa_aurivillus_var_calothamnos } from '../taxon/Mimosa/Mimosa aurivillus var calothamnos'
import { Mimosa_bimucronata } from '../taxon/Mimosa/Mimosa bimucronata'
import { Mimosa_blanchetii } from '../taxon/Mimosa/Mimosa blanchetii'
import { Mimosa_caesalpiniifolia } from '../taxon/Mimosa/Mimosa caesalpiniifolia'
import { Mimosa_campicola } from '../taxon/Mimosa/Mimosa campicola'
import { Mimosa_cordistipula } from '../taxon/Mimosa/Mimosa cordistipula'
import { Mimosa_cubatanensis } from '../taxon/Mimosa/Mimosa cubatanensis'
import { Mimosa_debilis_var_debilis } from '../taxon/Mimosa/Mimosa debilis var debilis'
import { Mimosa_diplotricha_var_diplotricha } from '../taxon/Mimosa/Mimosa diplotricha var diplotricha'
import { Mimosa_dolens_var_dolens } from '../taxon/Mimosa/Mimosa dolens var dolens'
import { Mimosa_dryandroides_var_dryandroides } from '../taxon/Mimosa/Mimosa dryandroides var dryandroides'
import { Mimosa_elliptica } from '../taxon/Mimosa/Mimosa elliptica'
import { Mimosa_emaensis } from '../taxon/Mimosa/Mimosa emaensis'
import { Mimosa_ernestii } from '../taxon/Mimosa/Mimosa ernestii'
import { Mimosa_extensa } from '../taxon/Mimosa/Mimosa extensa'
import { Mimosa_furfuracea } from '../taxon/Mimosa/Mimosa furfuracea'
import { Mimosa_gemmulata } from '../taxon/Mimosa/Mimosa gemmulata'
import { Mimosa_glazioui } from '../taxon/Mimosa/Mimosa glazioui'
import { Mimosa_invisa_var_macrostachya } from '../taxon/Mimosa/Mimosa invisa var macrostachya'
import { Mimosa_itatiaiensis } from '../taxon/Mimosa/Mimosa itatiaiensis'
import { Mimosa_leptantha } from '../taxon/Mimosa/Mimosa leptantha'
import { Mimosa_minarum } from '../taxon/Mimosa/Mimosa minarum'
import { Mimosa_misera } from '../taxon/Mimosa/Mimosa misera'
import { Mimosa_myuros } from '../taxon/Mimosa/Mimosa myuros'
import { Mimosa_oblonga_var_oblonga } from '../taxon/Mimosa/Mimosa oblonga var oblonga'
import { Mimosa_osmarii } from '../taxon/Mimosa/Mimosa osmarii'
import { Mimosa_paludosa } from '../taxon/Mimosa/Mimosa paludosa'
import { Mimosa_pigra_var_pigra } from '../taxon/Mimosa/Mimosa pigra var pigra'
import { Mimosa_pilulifera_var_pseudincana } from '../taxon/Mimosa/Mimosa pilulifera var pseudincana'
import { Mimosa_porrecta } from '../taxon/Mimosa/Mimosa porrecta'
import { Mimosa_pudica_var_hispida } from '../taxon/Mimosa/Mimosa pudica var hispida'
import { Mimosa_scabrella } from '../taxon/Mimosa/Mimosa scabrella'
import { Mimosa_schomburgkii } from '../taxon/Mimosa/Mimosa schomburgkii'
import { Mimosa_sensitiva_var_sensitiva } from '../taxon/Mimosa/Mimosa sensitiva var sensitiva'
import { Mimosa_somnians_var_lasiocarpa } from '../taxon/Mimosa/Mimosa somnians var lasiocarpa'
import { Mimosa_xanthocentra_var_xanthocentra } from '../taxon/Mimosa/Mimosa xanthocentra var xanthocentra'

const Mimosa_species: Mimosa[] = [
    Mimosa_afranioi,
    Mimosa_arenosa_var_arenosa,
    Mimosa_aurivillus_var_calothamnos,
    Mimosa_bimucronata,
    Mimosa_blanchetii,
    Mimosa_caesalpiniifolia,
    Mimosa_campicola,
    Mimosa_cordistipula,
    Mimosa_cubatanensis,
    Mimosa_debilis_var_debilis,
    Mimosa_diplotricha_var_diplotricha,
    Mimosa_dolens_var_dolens,
    Mimosa_dryandroides_var_dryandroides,
    Mimosa_elliptica,
    Mimosa_emaensis,
    Mimosa_ernestii,
    Mimosa_extensa,
    Mimosa_furfuracea,
    Mimosa_gemmulata,
    Mimosa_glazioui,
    Mimosa_invisa_var_macrostachya,
    Mimosa_itatiaiensis,
    Mimosa_leptantha,
    Mimosa_minarum,
    Mimosa_misera,
    Mimosa_myuros,
    Mimosa_oblonga_var_oblonga,
    Mimosa_osmarii,
    Mimosa_paludosa,
    Mimosa_pigra_var_pigra,
    Mimosa_pilulifera_var_pseudincana,
    Mimosa_porrecta,
    Mimosa_pudica_var_hispida,
    Mimosa_scabrella,
    Mimosa_schomburgkii,
    Mimosa_sensitiva_var_sensitiva,
    Mimosa_somnians_var_lasiocarpa,
    Mimosa_xanthocentra_var_xanthocentra
]

// Export MimosaDB.json
import { writeFileSync } from 'fs'
const jsonData = JSON.stringify(Mimosa_species)
const filePath = 'MimosaDB.json'
writeFileSync(filePath, jsonData, 'utf-8')