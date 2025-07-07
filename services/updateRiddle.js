import readline from 'readline-sync';
import { updateById } from '../DAL/riddleController.js';

export function updateRiddle() {

    let idForUpdate;
    let userChoice;
    do {
        userChoice = readline.question("Enter the object id for update: ")
        idForUpdate = parseInt(userChoice);
        if (isNaN(idForUpdate)) { console.log("The id is number") };
    } while (isNaN(idForUpdate));

    const updatedRiddle = {};

    const updateName = readline.question("Update name? (y): ").toLowerCase();
    if (updateName === 'y') {
        updatedRiddle.name = requiredQuestion("New name: ");
    }

    const updateTask = readline.question("Update task description? (y): ").toLowerCase();
    if (updateTask === 'y') {
        updatedRiddle.taskDescription = requiredQuestion("New task description: ");
    }

    const updateMultiple = readline.question("Update or insert multiple choices? (y): ").toLowerCase();
    if (updateMultiple === 'y') {
        updatedRiddle.choices = addMultipleAnswer();
        updatedRiddle.correctAnswer = requiredQuestion("New correct answer (1-4): ", false, true);
    }
    else {
        const updateCorrectAnswer = readline.question("Update correct answer? (y) ").toLowerCase();
        if (updateCorrectAnswer == "y") {
            updatedRiddle.correctAnswer = requiredQuestion("New correct answer: ");
        }
    }

    const updateDifficulty = readline.question("Update difficulty? (y): ").toLowerCase();
    if (updateDifficulty === 'y') {
        updatedRiddle.difficulty = requiredQuestion("New difficulty (easy, medium, hard): ", true);
    }

    const updateHint = readline.question("Update hint? (y): ").toLowerCase();
    if (updateHint === 'y') {
        updatedRiddle.hint = readline.question("New hint: ");
    }

    const updateTime = readline.question("Update time limit? (y): ").toLowerCase();
    if (updateTime === 'y') {
        updatedRiddle.timeLimit = requiredQuestion("New time limit (1 - 60): ", false, false, true);
    }

    updateById(idForUpdate, updatedRiddle);
}

function requiredQuestion(question, isDifficulty = false, isMultiple = false, timeLimit = false) {
    let res;
    do {
        res = readline.question(`\n${question}`);

        if (!isDifficulty && !isMultiple && !timeLimit) {
            if (!res) {
                console.log("You must enter this line");
            }
        } else if (isDifficulty) {
            const levels = ["easy", "medium", "hard"];
            if (!levels.includes(res.toLowerCase())) {
                console.log("Difficulty must be one of: easy, medium, hard");
                res = "";
            }
        }
        else if (isMultiple) {
            const num = parseInt(res);
            if (isNaN(num) || num < 1 || num > 4) {
                console.log("Answer must be a number between 1 to 4.");
                res = "";
            }
        }
        else if (timeLimit) {
            const num = parseInt(res);
            if (isNaN(num) || num < 1 || num > 60) {
                console.log("You must enter a positive number that lower than 60");
                res = "";
            }
            else {
                res = num;
            }
        }
    } while (!res)
    return res;
}

function addMultipleAnswer() {
    const answers = [];
    for (let i = 0; i < 4; i++) {
        const answer = requiredQuestion(`Enter ${i + 1} answer: `);
        answers.push(answer);
    }
    return answers;
}