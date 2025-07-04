import { Riddle } from "./riddle.js";
import readline from 'readline-sync';

export class MultipleChoiceRiddle extends Riddle {
    constructor(id, name, taskDescription, correctAnswer, difficulty, choices, hint = "", timeLimit = 5) {
        super(id, name, taskDescription, correctAnswer, difficulty, hint, timeLimit);
        this.choices = choices;
        this.start = null;
        this.end = null;
    }

    ask() {
        console.log(`\nRiddle ${this.id}: ${this.name}`);
        this.start = Date.now();
        let answer;

        do {
            console.log(this.taskDescription);
            console.log('choose one of the options (1-4):');
            for (let i = 0; i < this.choices.length; i++) {
                console.log(`\t${i + 1}: ${this.choices[i]}`);
            }
            
            answer = readline.question();
            if (answer !== this.correctAnswer) {
                console.log("Wrong answer, please try again");
            }
        } while (answer !== this.correctAnswer);

        this.end = Date.now();
        console.log('correct!');

        if ((this.end - this.start) / 1000 > this.timeLimit) {
            console.log("Too slow! 5 seconds penalty applied.");
            this.start -= 5000;
        }
    }
}