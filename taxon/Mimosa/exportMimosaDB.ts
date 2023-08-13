import { Mimosa } from '../Mimosa';
import { Mimosa_afranioi } from './Mimosa afranioi';
import { Mimosa_emaensis } from './Mimosa emaensis';
import { Mimosa_schomburgkii } from './Mimosa schomburgkii';

const Mimosa_species: Mimosa[] = [
    Mimosa_afranioi,
    Mimosa_emaensis,
    Mimosa_schomburgkii
]

import { writeFileSync } from 'fs';
const jsonData = JSON.stringify(Mimosa_species);
const filePath = 'MimosaDB.json';
writeFileSync(filePath, jsonData, 'utf-8');