import { Player } from "./classes/player.js";
import readline from 'readline-sync';
import * as riddleService from './service/riddelService/controller.js'


export function main() {
    console.log('=== Welcome to Riddle Project! ===');
    menu();
    const userChoice = readline.question();
    switch (userChoice) {
        case "1":
            startGame();
            break;
        case "2":
            createNewRiddle();
            break;
        case "3":
            readAllRiddles();
            break;
        case "4":
            UpdateRiddle();
            break;
        case "5":
            deleteRiddle();
            break;
        case "6":
            viewLeaderboard();
            break;
        default:
            console.log("InValid choice");
            break;
    }
}


function menu() {
    console.log("\t1.play the game");
    console.log("\t2.Create a new riddle");
    console.log("\t3.Read all riddles");
    console.log("\t4.Update an existing riddle");
    console.log("\t5.Delete a riddle");
    console.log("\t6.View leaderboard");
    console.log("\t7.Exit.");
}

async function startGame() {
    const playerName = readline.question("Enter you name: ");
    const player = new Player(playerName);
    const level = chooseLevel();
    const allRiddles = await riddleService.getRiddlesByLevel(level);
    for (const riddle of allRiddles) {
        riddle.ask();
        player.RecordTime(riddle.start, riddle.end);
    }
    player.ShowStatus();
}

function chooseLevel() {
    let level;
    do {
        level = readline.question("Choose difficulty: easy / medium / hard: ").toLocaleLowerCase();
        if (!validLevel(level)) {
            console.log("Invalid options, plese enter one of the options: ");
        }
    } while (!validLevel(level));
    return level;
}

function validLevel(input) {
    return input === "easy" || input === "medium" || input === "hard";
}

function createNewRiddle() {
    const newRiddle = {
        "name": "",
        "taskDescription": "",
        "correctAnswer": "",
        "difficulty": "",
        "hint": "",
        "timeLimit": 0,
        "choices": []
    }
    newRiddle.name = requiredQuestion("Name: ")
    newRiddle.taskDescription = requiredQuestion("Task description: ");
    newRiddle.isMultiple = readline.question("Multiple choices? (y)").toLowerCase();
    if (isMultiple === 'y') {
        newRiddle.choices = addMultipleAnswer();
    }
    newRiddle.correctAnswer = requiredQuestion(isMultiple === 'y' ? "correct answer (1-4): " : "correct Answer: ");
    newRiddle.difficulty = requiredQuestion("difficulty (easy, medium, hard): ", true);
    newRiddle.hint = readline.question("Hint (or enter if not): ");
    newRiddle.timeLimit = readline.question("Time limit (or enter if not - deafult): ");


}

function requiredQuestion(question, isDifficulty = false) {
    let res;
    do {
        res = readline.question(question);

        if (!isDifficulty) {
            if (!res) {
                console.log("You must enter this line");
            }
        } else {
            const validDifficulties = ["easy", "medium", "hard"];
            if (!validDifficulties.includes(res.toLowerCase())) {
                console.log("Difficulty must be one of: easy, medium, hard");
                res = "";
            }
        }
    } while (!res)
    return res;
}

function addMultipleAnswer() {
    const answers = [];
    for (let i = 0; i < 4; i++) {
        const answer = requiredQuestion(`Enter ${i + 1} answer`);
        answers.push(answer);
    }
    return answers;
}