import readline from 'readline-sync';

export function addMultipleAnswer() {
    const answers = [];
    for (let i = 1; i < 5; i++) {
        const answer = requiredQuestion(`Enter ${i} answer: `);
        answers.push(answer);
    }
    return answers;
}

export function requiredQuestion(question, isDifficulty = false, isMultiple = false, timeLimit = false) {
    let res;
    do {
        res = readline.question(`\n${question}`);

        if (!isDifficulty && !isMultiple && !timeLimit) {
            if (!res) {
                console.log("You must enter this line");
            }
        } else if (isDifficulty) {
            const levels = ["easy", "medium", "hard"];
            if (!levels.includes(res.toLowerCase())) {
                console.log("Difficulty must be one of: easy, medium, hard");
                res = "";
            }
        }
        else if (isMultiple) {
            const num = parseInt(res);
            if (isNaN(num) || num < 1 || num > 4) {
                console.log("Answer must be a number between 1 to 4.");
                res = "";
            }
        }
        else if (timeLimit) {
            const num = parseInt(res);
            if (isNaN(num) || num < 1 || num > 60) {
                console.log("You must enter a positive number that lower than 60");
                res = "";
            }
            else {
                res = num;
            }
        }
    } while (!res)
    return res;
}