import { getRiddlesByLevel } from "../../../server/controllers/riddleController.js";
import readline from 'readline-sync';

export async function chooseRiddlesByLevel(){
    const level = chooseLevel();
    const allRiddlesByLevel = await getRiddlesByLevel(level);
    return allRiddlesByLevel;
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
