import readline from 'readline-sync';
import { makeRequest } from '../makeRequest.js';

export async function createNewRiddle() {
    const newRiddle = {
    }

    newRiddle.name = requiredQuestion("Name: ")
    newRiddle.taskDescription = requiredQuestion("Task description: ");
    const isMultiple = readline.question("Multiple choices? (y) ").toLowerCase();
    if (isMultiple === 'y') {
        newRiddle.choices = addMultipleAnswer();
        newRiddle.correctAnswer = requiredQuestion("correct answer (1-4): ", false, true);
    }
    else {
        newRiddle.correctAnswer = requiredQuestion("correct Answer: ")
    }
    newRiddle.difficulty = requiredQuestion("difficulty (easy, medium, hard): ", true);
    newRiddle.hint = readline.question("Hint (or enter if not): ");
    const isTimeLimit = readline.question("Time Limit? (y) ").toLowerCase();
    if (isTimeLimit === 'y') {
        newRiddle.timeLimit = requiredQuestion("Time Limit: ", false, false, true);
    }
    const res = await makeRequest('/riddle', 'POST', newRiddle);
    console.log(res);
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