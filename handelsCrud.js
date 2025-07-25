import readline from 'readline-sync';
import { createNewRiddle } from "./functions/riddlesFunction/createNewRiddle.js";
import { readAllRiddles } from "./functions/riddlesFunction/readAllRiddles.js";
import { updateRiddle } from './functions/riddlesFunction/updateRiddle.js';
import { deleteRiddle } from './functions/riddlesFunction/deleteRiddle.js';
import { readAllPlayers } from './functions/playerFunction/readAllPlayers.js';
import { updatePlayerName } from './functions/playerFunction/updatePlayerName.js';
import { deletePlayer } from './functions/playerFunction/deletePlayer.js';

function riddleMenu() {
    console.log("\n--- Riddles Settings ---");
    console.log("\t1. Create a new riddle");
    console.log("\t2. Read all riddles");
    console.log("\t3. Update an existing riddle");
    console.log("\t4. Delete a riddle");
    console.log("\t5. Back to main menu");
}

export async function handleRiddleMenu() {
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
    console.log("\t1. Read all players");
    console.log("\t2. Update an existing player");
    console.log("\t3. Delete a player");
    console.log("\t4. Back to main menu");
}

export async function handlePlayerMenu() {
    let back = false;

    while (!back) {
        playerMenu();
        const playerChoice = readline.question('Choose an option: ');

        switch (playerChoice) {
            case "1":
                await readAllPlayers();
                break;
            case "2":
                await updatePlayerName();
                break;
            case "3":
                await deletePlayer();
                break;
            case "4":
                back = true;
                break;
            default:
                console.log("Invalid choice, please select 1 to 5.");
                break;
        }
    }
}
