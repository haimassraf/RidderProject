import readline from 'readline-sync';
import { startGame } from './gameManagment.js';
import { createNewRiddle } from "./functions/riddlesFunction/createNewRiddle.js";
import { readAllRiddles } from "./functions/riddlesFunction/readAllRiddles.js";
import { updateRiddle } from './functions/riddlesFunction/updateRiddle.js';
import { deleteRiddle } from './functions/riddlesFunction/deleteRiddle.js';
import { viewLeaderBoard } from './functions/playerFunction/viewLeaderBoard.js';

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
                await createNewRiddle();
                break;
            case "3":
                await readAllRiddles();
                break;
            case "4":
                await updateRiddle();
                break;
            case "5":
                await deleteRiddle();
                break;
            case "6":
                await viewLeaderBoard();
                break;
            case "7":
                console.log("Goodbye!");
                exit = true;
                break;
            default:
                console.log("Invalid choice, please select a number from 1 to 7.");
                break;
        }
    }
}

function menu() {
    console.log("\n===== Menu =====");
    console.log("\t1. Play the game");
    console.log("\t2. Create a new riddle");
    console.log("\t3. Read all riddles");
    console.log("\t4. Update an existing riddle");
    console.log("\t5. Delete a riddle");
    console.log("\t6. View leaderboard");
    console.log("\t7. Exit");
}

main();
