// Import genus Mimosa
import { Mimosa } from '../taxon/Mimosa';

// Import species of Mimosa
import { Mimosa_afranioi } from '../taxon/Mimosa/Mimosa afranioi';
import { Mimosa_blanchetii } from '../taxon/Mimosa/Mimosa blanchetii';
import { Mimosa_campicola } from '../taxon/Mimosa/Mimosa campicola';
import { Mimosa_dolens_var_dolens } from '../taxon/Mimosa/Mimosa dolens var dolens';
import { Mimosa_dryandroides_var_dryandroides } from '../taxon/Mimosa/Mimosa dryandroides var dryandroides';
import { Mimosa_emaensis } from '../taxon/Mimosa/Mimosa emaensis';
import { Mimosa_furfuracea } from '../taxon/Mimosa/Mimosa furfuracea';
import { Mimosa_myuros } from '../taxon/Mimosa/Mimosa myuros';
import { Mimosa_porrecta } from '../taxon/Mimosa/Mimosa porrecta';
import { Mimosa_schomburgkii } from '../taxon/Mimosa/Mimosa schomburgkii';

const Mimosa_species: Mimosa[] = [
    Mimosa_afranioi,
    Mimosa_emaensis,
    Mimosa_blanchetii,
    Mimosa_dolens_var_dolens,
    Mimosa_porrecta,
    Mimosa_furfuracea,
    Mimosa_myuros,
    Mimosa_schomburgkii
]

// Export MimosaDB.json
import { writeFileSync } from 'fs';
const jsonData = JSON.stringify(Mimosa_species);
const filePath = 'MimosaDB.json';
writeFileSync(filePath, jsonData, 'utf-8');