import readline from 'readline-sync';
import { chooseRiddlesByLevel } from "./functions/riddlesFunction/chooseRiddlesByLevel.js";
import { getAllPlayers } from "./functions/playerFunction/getAllPlayers.js";
import { createPlayer } from "./functions/playerFunction/createPlayer.js";


export async function startGame() {
    const allPlayers = await getAllPlayers();
    const playerName = readline.question("Enter your name: ");
    let found = false;
    let currentPlayer;
    for (const player of allPlayers) {
        if (player.name === playerName) {
            console.log(`Welcome Back '${player.name}'`)
            found = true;
            currentPlayer = player;
            break;
        }
    }
    if (!found) {
        console.log("creating new player...");
        currentPlayer = createPlayer(playerName);
    }
    const allRiddles = await chooseRiddlesByLevel();
    for (const riddle of allRiddles) {
        riddle.ask();
        currentPlayer.RecordTime(riddle.start, riddle.end);
    }
    currentPlayer.isUpdateHighScore();
    currentPlayer.ShowStatus();
}
