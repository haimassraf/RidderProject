import { MultipleChoiceRiddle } from "../../models/MultipleChoiceRiddle.js";
import { Riddle } from "../../models/riddle.js";
import readline from 'readline-sync';
import { makeRequest } from "../makeRequest.js";

export async function chooseRiddlesByLevel() {
    const level = chooseLevel();
    const allDataByLevel = await makeRequest(`/riddle/riddleByLevel/${level}`, 'GET');
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
