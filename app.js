import { getRiddlesByLevel } from "./riddles/allRiddles.js";
import { Player } from "./classes/player.js";
import readline from 'readline-sync';

function main() {
    console.log('=== Welcome to Riddle Project! ===');
    const playerName = readline.question("Enter you name: ");
    const player = new Player(playerName);
    const level = chooseLevel();
    const allRiddles = getRiddlesByLevel(level);
    for (const riddle of allRiddles) {
        riddle.start = new Date();
        riddle.ask();
        riddle.end = new Date();
        player.RecordTime(riddle.start, riddle.end);
    }
    console.log(player.times);
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