import { Riddle } from "./riddle";

class MultipleChoiceRiddle extends Riddle {
    constructor(id, name, taskDescription, correctAnswer, choices) {
        super(id, name, taskDescription, correctAnswer);
        this.choices = choices;
    }
    ask() {
        console.log(`Riddle ${this.id}: ${this.name}`);
        let answer;
        do {
            answer = readline.question(`${this.taskDescription} `).toLowerCase();
            if (answer !== this.correctAnswer) {
                console.log("Wrong answer, please try again");
            }
        } while (answer !== this.correctAnswer);
        console.log('correct!');
    }
}