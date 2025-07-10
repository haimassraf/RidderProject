import readline from 'readline-sync';
import { chooseAndGetRiddlesByLevel } from "./functions/riddlesFunction/chooseRiddlesByLevel.js";
import { getAllPlayers } from "./functions/playerFunction/getAllPlayers.js";
import { createPlayer } from "./functions/playerFunction/createPlayer.js";


export async function startGame() {
    let isPlay = true;
    let isFound = false;
    let currentPlayer;
    const allPlayers = await getAllPlayers();
    const playerName = readline.question("Enter your name: ");
    for (const player of allPlayers) {
        if (player.name === playerName) {
            console.log(`Welcome Back '${player.name}'!`)
            isFound = true;
            currentPlayer = player;
            break;
        }
    }
    if (!isFound) {
        console.log("Player not found")
        const create = readline.question("Do you want to create a new player with the inserted name (Y) ? ").toLowerCase();
        if (create === 'y') {
            console.log("Creating a New Player...");
            currentPlayer = createPlayer(playerName);
        } else {
            isPlay = false;
        }
    }
    if (isPlay) {
        const allRiddles = await chooseAndGetRiddlesByLevel();
        for (const riddle of allRiddles) {
            riddle.ask();
            currentPlayer.RecordTime(riddle.start, riddle.end);
        }
        currentPlayer.IsUpdateHighScore();
        currentPlayer.ShowStatus();
    }
    console.log("Have a Nice Day.")
}
