# TaxonDescriptor

## Abra o Visual Studio Code

## Abra a pasta TaxonDescriptor

## Instale o pacote Typescript
```
npm install
```

## Edite o arquivo descriptor.ts

```
// Taxa
import { Mimosa } from './taxon/Mimosa';

// Characters
import { Leaf } from './character/Leaf';
import { Paraphillidia } from './character/Leaf/Paraphillidia';
import { Petiole } from './character/Leaf/Petiole';

import { Flower } from './character/Flower';
import { Calyx } from './character/Flower/Calyx';
import { Corolla } from './character/Flower/Corolla';

import { Fruit } from './character/Fruit';
import { Replum } from './character/Fruit/Replum';
import { Epicarp } from './character/Fruit/Epicarp';

// Describe a species
const Mimosa_new = new Mimosa();

Mimosa_new.habit = 'subshrub';

Mimosa_new.leaf = new Leaf();

Mimosa_new.leaf.petiole = new Petiole();
Mimosa_new.leaf.petiole.present = true;
Mimosa_new.leaf.petiole.setLength(3);

Mimosa_new.leaf.paraphillidia = new Paraphillidia();
Mimosa_new.leaf.paraphillidia.present = false;
Mimosa_new.leaf.paraphillidia.setLength(null);

Mimosa_new.flower = new Flower();

Mimosa_new.flower.calyx = new Calyx();
Mimosa_new.flower.calyx.numSepals = 4;
Mimosa_new.flower.calyx.length = 1;
Mimosa_new.flower.calyx.shape = 'campanulate';

Mimosa_new.flower.corolla = new Corolla();
Mimosa_new.flower.corolla.numPepals = 4;
Mimosa_new.flower.corolla.length = 3;
Mimosa_new.flower.corolla.shape = 'campanulate';


Mimosa_new.fruit = new Fruit();

Mimosa_new.fruit.replum = new Replum();
Mimosa_new.fruit.replum.shape = 'straight';
Mimosa_new.fruit.replum.prickles = false;

Mimosa_new.fruit.epicarp = new Epicarp();
Mimosa_new.fruit.epicarp.shape = 'straight';
Mimosa_new.fruit.epicarp.prickles = false;



// Print
console.log(Mimosa_new);
```

## Transpile o arquivo `descriptor.ts`
```
tsc descriptor
```

## Rode o arquivo `descriptor.js`
```
node descriptor
```
