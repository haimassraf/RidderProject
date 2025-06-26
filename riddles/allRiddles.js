import { Riddle } from '../classes/riddle.js';
import {r1} from './r1.js';
import {r2} from './r2.js';
import { r3 } from './r3.js';
import { r4 } from './r4.js';
import { r5 } from './r5.js';
import { r6 } from './r6.js';

const imports = [r1, r2, r3, r4, r5, r6];
export const allRiddles = [];

for (const imp of imports) {
    allRiddles.push(Object.assign(new Riddle(), imp))
}
