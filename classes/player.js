export class Player{
    constructor(name){
        this.name = name;
        this.times = [];
    }
    RecordTime(start, end){
        const time = (end - start) / 1000;
        this.times.push(time);
    }
    
    ShowStatus(){
        const totalTime = this.times.reduce((acc, curr) => acc + curr, 0);
        const avgTime = totalTime / this.times.length;

        console.log(`${this.name}\`s record:`);
        console.log(`Total time: ${totalTime} secound`);
        console.log(`AVG per riddle ${avgTime} secound`);
    }
}