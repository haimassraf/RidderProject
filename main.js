import readline from 'readline-sync';
import { startGame } from './gameManagment.js';
import { login } from './functions/auth/login.js';
import { signup } from './functions/auth/signup.js';
import { getToken } from './functions/auth/authToken.js';
import { handelsMenu } from './handelsMenu.js';

async function main() {
    console.log('===== Welcome to Riddle Project! =====');

    let exit = false;

    while (!exit) {
        if (getToken()) {
            await handelsMenu();
        }
        menu();
        const userChoice = readline.question('Enter your choice: ');

        switch (userChoice) {
            case "1":
                await startGame(true);
                break;
            case "2":
                await login();
                break;
            case "3":
                await signup();
                break;
            case "4":
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
    console.log("\t1. Play as a guest");
    console.log("\t2. login");
    console.log("\t3. signup");
    console.log("\t4. Exit");
}

main();
