import readline from 'readline-sync';

export class Riddle {
    constructor(id, name, taskDescription, correctAnswer, difficulty, timeLimit) {
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
        this.difficulty = difficulty;
        this.timeLimit = timeLimit;
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