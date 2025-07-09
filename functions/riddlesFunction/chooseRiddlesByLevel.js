import { MultipleChoiceRiddle } from "../../models/MultipleChoiceRiddle.js";
import { Riddle } from "../../models/riddle.js";
import readline from 'readline-sync';

export async function chooseRiddlesByLevel() {
    try {
        const level = chooseLevel();
        const allDataByLevel = await fetch(`http://localhost:3000/riddleByLevel/${level}`).then((res) => res.json());

        const riddlesByLevel = [];
        let id = 1;
        for (const dataByLevel of allDataByLevel) {
            if (dataByLevel.choices) {
                const newRiddle = new MultipleChoiceRiddle(id, dataByLevel.name, dataByLevel.taskDescription, dataByLevel.correctAnswer, dataByLevel.difficulty, dataByLevel.choices, dataByLevel.hint, dataByLevel.timeLimit);
                riddlesByLevel.push(newRiddle);
            } else {
                const newRiddle = new Riddle(id, dataByLevel.name, dataByLevel.taskDescription, dataByLevel.correctAnswer, dataByLevel.difficulty, dataByLevel.hint, dataByLevel.timeLimit);
                riddlesByLevel.push(newRiddle);
            }
            id++;
        }
        return riddlesByLevel;
    } catch(err){
        console.log("Error: ", err.message);
        
    }
}

function chooseLevel() {
    let level;
    do {
        level = readline.question("Choose difficulty: easy / medium / hard: ").toLocaleLowerCase();
        if (!validLevel(level)) {
            console.log("Invalid options, plese enter one of the options: ");
        }
    } while (!validLevel(level));
    return level;
}

function validLevel(input) {
    return input === "easy" || input === "medium" || input === "hard";
}
