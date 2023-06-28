import { Mimosa } from './Mimosa';
import { Leaf } from './Leaf';

const MimosaNew = new Mimosa();
MimosaNew.Habit = 'tree';
MimosaNew.Leaf = new Leaf();
MimosaNew.Leaf.petiole = 'present';
MimosaNew.Leaf.tamanho = 0;

console.log(MimosaNew);
