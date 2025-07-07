import { Player } from "./models/player.js";
import readline from 'readline-sync';
import { getRiddlesByLevel } from "./DAL/riddleController.js";


export async function startGame() {
    const playerName = readline.question("Enter you name: ");
    const player = new Player(playerName);
    const level = chooseLevel();
    const allRiddles = await getRiddlesByLevel(level);
    for (const riddle of allRiddles) {
        riddle.ask();
        player.RecordTime(riddle.start, riddle.end);
    }
    player.ShowStatus();
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
