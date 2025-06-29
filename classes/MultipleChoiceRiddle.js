import { Riddle } from "./riddle.js";
import readline from 'readline-sync';

export class MultipleChoiceRiddle extends Riddle {
    constructor(id, name, taskDescription, correctAnswer, choices) {
        super(id, name, taskDescription, correctAnswer);
        this.choices = choices;
    }
    ask() {
        console.log(`Riddle ${this.id}: ${this.name}`);

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
        console.log('correct!');
    }
}