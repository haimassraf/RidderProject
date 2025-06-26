class Player{
    constructor(name){
        this.name = name;
        this.times = [];
    }
    RecordTime(start, end){
        return start - end;
    }
    ShowStatus(){
        const totalTime = this.times.reduce((acc, curr) => acc + curr, 0);
        const avgTime = totalTime / this.times.length;
        
        console.log(`Total time: ${totalTime} secound`);
        console.log(`AVG per riddle ${avgTime} secound`);
    }
}