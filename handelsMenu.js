import readline from 'readline-sync';
import { startGame } from './gameManagment.js';
import { viewLeaderBoard } from './functions/playerFunction/viewLeaderBoard.js';
import { handlePlayerMenu, handleRiddleMenu } from './handelsCrud.js';
import { logout } from './functions/auth/logout.js';

function menu() {
    console.log("\n===== Menu =====");
    console.log("\t1. Play the game");
    console.log("\t2. View leaderboard");
    console.log("\t3. Riddles settings");
    console.log("\t4. Players settings");
    console.log("\t5. Logout");
}

export async function handelsMenu() {

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
                await logout();
                exit = true;
                break;
            default:
                console.log("Invalid choice, please select a number from 1 to 5.");
                break;
        }
    }
}
