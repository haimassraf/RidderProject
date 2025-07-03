import { promises as fs } from 'node:fs';

export async function create(newData) {
    try {
        const file = await fs.readFile("riddles.json", "utf8");
        const data = JSON.parse(file);

        if (data.length === 0) {
            newData["id"] = 1;
        } else {
            const allId = data.map(el => el["id"]);
            const highestId = Math.max(...allId);
            newData["id"] = highestId + 1;
        }
        data.push(newData);
        await fs.writeFile("riddles.json", JSON.stringify(data));
        console.log(`new data: ${newData}\ninsert succesfully.`);
    } catch (err) {
        console.log("Error:", err);
    }
}

export async function read() {
    try {
        const file = await fs.readFile("riddles.json", "utf8");
        const data = JSON.parse(file);
        console.log("All data:");
        console.log(data);
    } catch (err) {
        console.log("Error:", err);
    }
}

export async function getAllObjects() {
    try {
        const file = await fs.readFile("riddles.json", "utf8");
        return JSON.parse(file);
    } catch (err) {
        console.log("Error: ", err);
    }
}

export async function updateById(id, newData) {
    try {
        const data = await getAllObjects();
        const i = data.findIndex(obj => obj.id === id);

        if (i === -1) {
            throw new Error(`Id ${id} not found`);
        }

        data[i].name = newData.name ? newData.name : data[i].name;
        data[i].taskDescription = newData.taskDescription ? newData.taskDescription : data[i].taskDescription;
        data[i].correctAnswer = newData.correctAnswer ? newData.correctAnswer : data[i].correctAnswer;
        data[i].difficulty = newData.difficulty ? newData.difficulty : data[i].difficulty;
        data[i].choices = newData.choices ? newData.choices : data[i].choices;
        data[i].hint = newData.hint ? newData.hint : data[i].hint;
        data[i].timeLimit = newData.timeLimit ? newData.timeLimit : data[i].timeLimit;

        await fs.writeFile("riddles.json", JSON.stringify(data));
        console.log(`Object with id ${id} updated successfully.`);
    } catch (err) {
        console.log("Error: ", err);
    }
}

export async function deleteById(id) {
    try {
        const data = await getAllObjects();
        const i = data.findIndex(obj => obj.id === id);

        if (i === -1) {
            throw new Error(`Id ${id} not found`);
        }

        data.splice(i, 1);
        await fs.writeFile("riddles.json", JSON.stringify(data));
        console.log(`Object with id ${id} removed successfully.`);
    } catch (err) {
        console.log("Error: ", err.message);
    }
}