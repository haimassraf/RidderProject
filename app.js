import { allRiddles } from "./riddles/allRiddles.js";
import { Player } from "./classes/player.js";
import readline from 'readline-sync';

console.log('=== Welcome to Riddle Project! ===');
const playerName = readline.question("Enter you name: ");
const player = new Player(playerName);
for (const riddle of allRiddles) {
    let start = new Date();
    riddle.ask();
    let end = new Date();
    player.RecordTime(start, end);
}

player.ShowStatus();