import readline from 'readline-sync';
import { makeRequest } from '../makeRequest.js';
import { addMultipleAnswer, requiredQuestion } from './globalFunction.js';

export async function createNewRiddle() {
    const newRiddle = {}

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
    console.log(newRiddle)
    console.log(res);
}
