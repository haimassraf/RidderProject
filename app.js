import { Player } from "./classes/player.js";
import readline from 'readline-sync';
import * as cnt from './CRUD/controller.js'


async function main() {
    console.log('=== Welcome to Riddle Project! ===');
    const playerName = readline.question("Enter you name: ");
    const player = new Player(playerName);
    const level = chooseLevel();
    const allRiddles = await cnt.getRiddlesByLevel(level);
    for (const riddle of allRiddles) {
        riddle.ask();
        player.RecordTime(riddle.start, riddle.end);
    }
    player.ShowStatus();
}

main();

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