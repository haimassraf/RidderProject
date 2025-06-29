import readline from 'readline-sync';

export class Riddle {
    constructor(id, name, taskDescription, correctAnswer, difficulty, hint = "", timeLimit = 5) {
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
        this.difficulty = difficulty;
        this.hint = hint;
        this.timeLimit = timeLimit;
        this.start = null;
        this.end = null;
    }

    ask() {
        console.log(`Riddle ${this.id}: ${this.name}`);
        let answer;
        do {
            answer = readline.question(`${this.taskDescription} (You can enter 'hint' but its coust 10 secounds): `).toLowerCase();
            if (answer === "hint") {
                if (this.hint) {
                    console.log(`Hint: ${this.hint}`);
                    this.start -= 10000;
                }
                else {
                    console.log("hint dosen`t avalible");
                }
            }
            else if (answer !== this.correctAnswer) {
                console.log("Wrong answer, please try again");
            }
        } while (answer !== this.correctAnswer);
        console.log('correct!');
        if (this.ene - this.start > this.timeLimit) {
            console.log("Too slow! 5 seconds penalty applied.");
            this.start -= 5000;
        }
    }
}