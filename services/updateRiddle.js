import { createNewRiddle } from "./createNewRiddle.js";
import readline from 'readline-sync';

export function updateRiddle() {
    const updatedRiddle = {};
    updatedRiddle.name = readline.question("Name (or enter if not): ");
    updatedRiddle.taskDescription = readline.question("Task description (or enter if not): ");
    const isMultiple = readline.question("Multiple choices? (y) ").toLowerCase();
    if (isMultiple === 'y') {
        updatedRiddle.choices = addMultipleAnswer();
        const validNumbers = ["1", "2", "3", "4"];
        do {
            const correctAnswer = readline.question("correct answer (1-4): ");
            if (!validNumbers.includes(correctAnswer)) {
                console.log("You must enter a number between 1 to 4");
            }
        } while (!validNumbers.includes(correctAnswer))
    }
    else {
        updatedRiddle.correctAnswer = readline.question("correct Answer: ")
    }
    updatedRiddle.difficulty = readline.question("difficulty (easy, medium, hard): ");
    updatedRiddle.hint = readline.question("Hint (or enter if not): ");
    updatedRiddle.timeLimit = readline.question("Time Limit: ");
    return newRiddle;
}

function addMultipleAnswer() {
    const answers = [];
    for (let i = 0; i < 4; i++) {
        const answer = readline.question(`Enter ${i + 1} answer: `);
        answers.push(answer);
    }
    return answers;
}