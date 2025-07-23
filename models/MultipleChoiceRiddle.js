import { Riddle } from "./riddle.js";
import readline from 'readline-sync';

export class MultipleChoiceRiddle extends Riddle {
    constructor(id, name, taskDescription, correctAnswer, difficulty, choices, hint = "", timeLimit = 5) {
        super(id, name, taskDescription, correctAnswer, difficulty, hint, timeLimit);
        this.choices = choices;
        this.start = null;
        this.end = null;
    }

    async ask() {
        console.log(`\nRiddle ${this.id}: ${this.name}`);
        this.start = Date.now();
        let answer;

        do {
            console.log(this.taskDescription);
            await new Promise(resolve => setTimeout(resolve, 300))
            console.log(`choose one of the options (1-${this.choices.length}):`);
            for (let i = 0; i < this.choices.length; i++) {
                console.log(`\t${i + 1}: ${this.choices[i]}`);
            }

            answer = readline.question('\t');
            if (answer !== this.correctAnswer) {
                console.log("Wrong Answer, 1 secound penalty applied");
                this.start -= 1000;
            }
        } while (answer !== this.correctAnswer);

        this.end = Date.now();
        console.log('correct!');

        if ((this.end - this.start) / 1000 > this.timeLimit) {
            console.log("Too slow! 2 seconds penalty applied");
            this.start -= 2000;
        }
    }
}