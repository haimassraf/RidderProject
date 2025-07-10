import readline from 'readline-sync';
import { makeRequest } from '../makeRequest.js';
import { addMultipleAnswer, requiredQuestion } from '../globalFunction.js';

export async function updateRiddle() {
    let idForUpdate;
    let userChoice;
    do {
        userChoice = readline.question("Enter the object id for update: ")
        idForUpdate = parseInt(userChoice);
        if (isNaN(idForUpdate)) { console.log("The id is required and number") };
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
    const res = await makeRequest(`/riddle/${idForUpdate}`, "PUT", updatedRiddle)
    console.log(res)
}