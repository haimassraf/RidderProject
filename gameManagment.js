import readline from 'readline-sync';
import { chooseAndGetRiddlesByLevel } from "./functions/riddlesFunction/chooseAndGetRiddlesByLevel.js";
import { createPlayer } from "./functions/playerFunction/createPlayer.js";
import { getPlayerByName } from './functions/playerFunction/getPlayerByName.js';


export async function startGame() {
    let isPlay = true;
    const playerName = readline.question("Enter your name: ");
    let currentPlayer = await getPlayerByName(playerName);
    if (!currentPlayer) {
        const create = readline.question("Do you want to create a new player with the inserted name (Y) ? ").toLowerCase();
        if (create === 'y') {
            console.log("Creating a New Player...");
            currentPlayer = await createPlayer(playerName);
        } else {
            isPlay = false;
        }
    }
    else {
        console.log(`Welcome Back '${currentPlayer.name}'\nYour current high score is: '${currentPlayer.highScore}'`)
    }
    if (isPlay) {
        const allRiddles = await chooseAndGetRiddlesByLevel();
        for (const riddle of allRiddles) {
            riddle.ask();
            currentPlayer.RecordTime(riddle.start, riddle.end);
        }
        currentPlayer.HighScoreRendel();
        currentPlayer.ShowStatus();
    }
    console.log("Have a Nice Day.")
}
