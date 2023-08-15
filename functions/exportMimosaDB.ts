// Import genus Mimosa
import { Mimosa } from '../taxon/Mimosa';

// Import species of Mimosa
import { Mimosa_afranioi } from '../taxon/Mimosa/Mimosa afranioi';
import { Mimosa_emaensis } from '../taxon/Mimosa/Mimosa emaensis';
import { Mimosa_schomburgkii } from '../taxon/Mimosa/Mimosa schomburgkii';

const Mimosa_species: Mimosa[] = [
    Mimosa_afranioi,
    Mimosa_emaensis,
    Mimosa_schomburgkii
]

// Export MimosaDB.json
import { writeFileSync } from 'fs';
const jsonData = JSON.stringify(Mimosa_species);
const filePath = 'MimosaDB.json';
writeFileSync(filePath, jsonData, 'utf-8');