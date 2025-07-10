import { updateHighScore } from "../functions/playerFunction/updateHighScore.js";

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

    ShowStatus() {
        const totalTime = this.times.reduce((acc, curr) => acc + curr, 0);
        const avgTime = totalTime / this.times.length;

        console.log(`${this.name}\`s record:`);
        console.log(`\tTotal time: ${totalTime.toFixed(2)} secound`);
        console.log(`\tAVG per riddle ${avgTime.toFixed(2)} secound`);
    }

    async IsUpdateHighScore() {
        const totalTime = this.times.reduce((acc, curr) => acc + curr, 0).toFixed(2);
        if (totalTime < this.highScore) {
            console.log(`New high score: ${totalTime}!`);
            updateHighScore(totalTime, this.id);
        } else {
            console.log(`Yout current high score is ${this.highScore}`);
        }
    }
}