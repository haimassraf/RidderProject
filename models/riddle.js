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

    async ask() {
        console.log(`\nRiddle ${this.id}: ${this.name}`);
        this.start = Date.now();
        let usedHint = false;
        let answer;

        do {
            let question = `\t${this.taskDescription}`;
            question += !usedHint ? " (You can enter 'hint' but its coust 10 secounds)\n\t" : "\n\t";
            await new Promise(resolve => setTimeout(resolve, 300))
            answer = readline.question(question).toLowerCase();
            if (answer === "hint") {
                if (!usedHint) {
                    if (this.hint) {
                        usedHint = true;
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
                console.log("Wrong Answer, 1 secound penalty applied");
                this.start -= 1000;
            }
        } while (answer !== this.correctAnswer);

        this.end = Date.now();
        console.log('Correct Answer');

        if (!usedHint && (this.end - this.start) / 1000 > this.timeLimit) {
            console.log("Too slow! 2 seconds penalty applied.");
            this.start -= 2000;
        }
    }
}