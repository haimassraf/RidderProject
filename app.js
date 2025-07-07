import readline from 'readline-sync';
import { startGame } from './gameManagment.js';
import { createNewRiddle } from "./functions/riddlesFunction/createNewRiddle.js";
import { readAllRiddles } from "./functions/riddlesFunction/readAllRiddles.js";
import { updateRiddle } from './functions/riddlesFunction/updateRiddle.js';
import { deleteRiddle } from './functions/riddlesFunction/deleteRiddle.js';
import { viewLeaderBoard } from './functions/playerFunction/viewLeaderBoard.js';

async function main() {
    console.log('=== Welcome to Riddle Project! ===');
    // let ifExit = false;
    // while (!ifExit) {
    menu();
    const userChoice = readline.question();
    switch (userChoice) {
        case "1":
            await startGame();
            break;
        case "2":
            createNewRiddle();
            break;
        case "3":
            readAllRiddles();
            break;
        case "4":
            updateRiddle();
            break;
        case "5":
            deleteRiddle();
            break;
        case "6":
            viewLeaderBoard();
            break;
        // case "7":
        //     ifExit = true;
        //     break;
        default:
            console.log("Invalid choice");
            break;
    }
}
// }

function menu() {
    console.log("\t1.play the game");
    console.log("\t2.Create a new riddle");
    console.log("\t3.Read all riddles");
    console.log("\t4.Update an existing riddle");
    console.log("\t5.Delete a riddle");
    console.log("\t6.View leaderboard");
    console.log("\t7.Exit.");
}

main();