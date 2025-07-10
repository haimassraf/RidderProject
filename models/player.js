import { updateOrInsertHighScore } from "../functions/playerFunction/updateOrInsertHighScore.js";

export class Player {
    constructor(id, name, highScore = undefined) {
        this.id = id;
        this.name = name;
        this.highScore = highScore;
        this.times = [];
    }
    RecordTime(start, end) {
        const time = (end - start) / 1000;
        this.times.push(time);
    }

    async HighScoreRendel() {
        const totalTime = this.times.reduce((acc, curr) => acc + curr, 0).toFixed(2);
        if (this.highScore && totalTime < this.highScore) {
            console.log(`*** New high score: ${totalTime} secound! ***`);
            updateOrInsertHighScore(totalTime, this.id);
        } else if (this.highScore) {
            console.log(`Yout current high score is ${this.highScore} secound`);
        } else {
            updateOrInsertHighScore(totalTime, this.id)
        }
    }

    ShowStatus() {
        const totalTime = this.times.reduce((acc, curr) => acc + curr, 0);
        const avgTime = totalTime / this.times.length;

        console.log(`${this.name}\`s record:`);
        console.log(`\tTotal time: ${totalTime.toFixed(2)} secound`);
        console.log(`\tAVG per riddle ${avgTime.toFixed(2)} secound`);
    }
}