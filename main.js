import readline from 'readline-sync';
import { startGame } from './gameManagment.js';
import { createNewRiddle } from "./functions/riddlesFunction/createNewRiddle.js";
import { readAllRiddles } from "./functions/riddlesFunction/readAllRiddles.js";
import { updateRiddle } from './functions/riddlesFunction/updateRiddle.js';
import { deleteRiddle } from './functions/riddlesFunction/deleteRiddle.js';
import { viewLeaderBoard } from './functions/playerFunction/viewLeaderBoard.js';
import { createPlayer } from './functions/playerFunction/createPlayer.js';
import { readAllPlayers } from './functions/playerFunction/readAllPlayers.js';
import { updatePlayerName } from './functions/playerFunction/updatePlayerName.js';
import { deletePlayer } from './functions/playerFunction/deletePlayer.js';

async function main() {
    console.log('===== Welcome to Riddle Project! =====');

    let exit = false;

    while (!exit) {
        menu();
        const userChoice = readline.question('Enter your choice: ');

        switch (userChoice) {
            case "1":
                await startGame();
                break;
            case "2":
                await viewLeaderBoard();
                break;
            case "3":
                await handleRiddleMenu();
                break;
            case "4":
                await handlePlayerMenu();
                break;
            case "5":
                console.log("Goodbye!");
                exit = true;
                break;
            default:
                console.log("Invalid choice, please select a number from 1 to 5.");
                break;
        }
    }
}

function menu() {
    console.log("\n===== Menu =====");
    console.log("\t1. Play the game");
    console.log("\t2. View leaderboard");
    console.log("\t3. Riddles settings");
    console.log("\t4. Players settings");
    console.log("\t5. Exit");
}

function riddleMenu() {
    console.log("\n--- Riddles Settings ---");
    console.log("\t1. Create a new riddle");
    console.log("\t2. Read all riddles");
    console.log("\t3. Update an existing riddle");
    console.log("\t4. Delete a riddle");
    console.log("\t5. Back to main menu");
}

async function handleRiddleMenu() {
    let back = false;

    while (!back) {
        riddleMenu();
        const riddleChoice = readline.question('Choose an option: ');

        switch (riddleChoice) {
            case "1":
                await createNewRiddle();
                break;
            case "2":
                await readAllRiddles();
                break;
            case "3":
                await updateRiddle();
                break;
            case "4":
                await deleteRiddle();
                break;
            case "5":
                back = true;
                break;
            default:
                console.log("Invalid choice, please select 1 to 5.");
                break;
        }
    }
}

function playerMenu() {
    console.log("\n--- Riddles Settings ---");
    console.log("\t1. Create a new player");
    console.log("\t2. Read all players");
    console.log("\t3. Update an existing player");
    console.log("\t4. Delete a player");
    console.log("\t5. Back to main menu");
}

async function handlePlayerMenu() {
    let back = false;

    while (!back) {
        playerMenu();
        const playerChoice = readline.question('Choose an option: ');

        switch (playerChoice) {
            case "1":
                await createPlayer();
                break;
            case "2":
                await readAllPlayers();
                break;
            case "3":
                await updatePlayerName();
                break;
            case "4":
                await deletePlayer();
                break;
            case "5":
                back = true;
                break;
            default:
                console.log("Invalid choice, please select 1 to 5.");
                break;
        }
    }
}

main();
