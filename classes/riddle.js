import readline from 'readline-sync';

export class Riddle {
    constructor(id, name, taskDescription, correctAnswer, difficulty, hint = "", timeLimit = 7) {
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
        console.log(`\nRiddle ${this.id}: ${this.name}`);
        this.start = Date.now();
        let isHint = false;
        let answer;

        do {
            let question = this.taskDescription;
            question += !isHint ? " (You can enter 'hint' but its coust 10 secounds) " : " ";
            answer = readline.question(question).toLowerCase();
            if (answer === "hint") {
                if (!isHint) {
                    if (this.hint) {
                        isHint = true;
                        console.log(`Hint: ${this.hint}`);
                        this.start -= 10000;
                    }
                    else {
                        console.log("hint dosen`t avalible");
                    }
                }
                else {
                    console.log("You already use the hint.");
                }
            }
            else if (answer !== this.correctAnswer) {
                console.log("Wrong answer, please try again");
            }
        } while (answer !== this.correctAnswer);

        this.end = Date.now();
        console.log('correct!');

        if (!isHint && (this.end - this.start) / 1000 > this.timeLimit) {
            console.log("Too slow! 5 seconds penalty applied.");
            this.start -= 5000;
        }
    }
}