import { Riddle } from '../classes/riddle.js';
import { MultipleChoiceRiddle } from '../classes/MultipleChoiceRiddle.js';
import { r1 } from './r1.js';
import { r2 } from './r2.js';
import { r3 } from './r3.js';
import { r4 } from './r4.js';
import { r5 } from './r5.js';
import { r6 } from './r6.js';
import { r7 } from './r7.js';

const imports = [r1, r2, r3, r4, r5, r6, r7];
export const allRiddles = [];

for (const imp of imports) {
    if ('choices' in imp) {
         var newRiddle = new MultipleChoiceRiddle(imp.id, imp.name, imp.taskDescription, imp.correctAnswer, imp.choices);
    }
    else {
        var newRiddle = new Riddle(imp.id, imp.name, imp.taskDescription, imp.correctAnswer);
    }
    allRiddles.push(newRiddle);
}
