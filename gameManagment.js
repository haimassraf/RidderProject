import { Player } from "./models/player.js";
import readline from 'readline-sync';
import { chooseRiddlesByLevel } from "./functions/riddlesFunction/chooseRiddlesByLevel.js";


export async function startGame() {
    const playerName = readline.question("Enter you name: ");
    const player = new Player(playerName);
    const allRiddles = await chooseRiddlesByLevel();
    for (const riddle of allRiddles) {
        riddle.ask();
        player.RecordTime(riddle.start, riddle.end);
    }
    player.ShowStatus();
}
