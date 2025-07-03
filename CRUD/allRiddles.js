import { Riddle } from '../classes/riddle.js';
import { MultipleChoiceRiddle } from '../classes/MultipleChoiceRiddle.js';


const imports = [r1, r2, r3, r4, r5, r6, r7, r8];

export function getRiddlesByLevel(level) {
    const allRiddles = [];
    const userImports = imports.filter((imp) => imp.difficulty === level);
    let id = 1;
    for (const riddle of userImports) {
        if ('choices' in riddle) {
            const newRiddle = new MultipleChoiceRiddle(id, riddle.name, riddle.taskDescription, riddle.correctAnswer, riddle.difficulty, riddle.choices, riddle.hint, riddle.timeLimit);
            allRiddles.push(newRiddle);
        }
        else {
            const newRiddle = new Riddle(id, riddle.name, riddle.taskDescription, riddle.correctAnswer, riddle.difficulty, riddle.hint, riddle.timeLimit);
            allRiddles.push(newRiddle);
        }
        id++;
    }
    return allRiddles;
}
