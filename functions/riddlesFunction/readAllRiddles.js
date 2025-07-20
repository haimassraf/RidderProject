import { makeRequest } from "../makeRequest.js";

export async function readAllRiddles() {
    const riddles = await makeRequest('/riddle', 'GET');

    if (!Array.isArray(riddles) || riddles.length === 0) {
        console.log("No riddles found.");
        return;
    }

    const tableData = riddles.map((riddle) => ({
        ID: riddle._id || '',
        Name: riddle.name || '',
        Description: riddle.taskDescription || '',
        Difficulty: riddle.difficulty || '',
        Answer: riddle.correctAnswer || '',
        Choices: Array.isArray(riddle.choices) ? riddle.choices.join(', ') : '',
        Hint: riddle.hint || '',
        Time: riddle.timeLimit !== undefined ? `${riddle.timeLimit}s` : ''
    }));

    console.log("\n=== All Riddles ===\n");
    console.table(tableData);
}
