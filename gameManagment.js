import readline from 'readline-sync';
import { chooseAndGetRiddlesByLevel } from "./functions/riddlesFunction/chooseAndGetRiddlesByLevel.js";
import { createPlayer } from "./functions/playerFunction/createPlayer.js";
import { getPlayerByName } from './functions/playerFunction/getPlayerByName.js';


export async function startGame() {
    try {
        let play = true;
        const playerName = readline.question("Enter your name: ");
        let currentPlayer = await getPlayerByName(playerName);
        if (!currentPlayer) {
            const create = readline.question("Do you want to create a new player with the inserted name (Y) ? ").toLowerCase();
            if (create === 'y') {
                console.log("Creating a New Player...");
                currentPlayer = await createPlayer(playerName);
            } else {
                play = false;
            }
        }
        else {
            console.log(`Welcome Back '${currentPlayer.name}'\nYour current high score is: '${currentPlayer.highScore}'`)
        }
        if (play) {
            const allRiddles = await chooseAndGetRiddlesByLevel();
            if (allRiddles.length > 0) {
                for (const riddle of allRiddles) {
                    riddle.ask();
                    currentPlayer.RecordTime(riddle.start, riddle.end);
                }
                await currentPlayer.HighScoreRendel();
                currentPlayer.ShowStatus();
            }
            else {
                console.log("Problem with get riddles")
            }
        }
        console.log("Have a Nice Day.")
    } catch (err) {
        console.log("Error: ", err.message)
    }
}
