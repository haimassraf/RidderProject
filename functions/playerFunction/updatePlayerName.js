import readline from 'readline-sync';
import { makeRequest } from '../makeRequest.js';

export async function updatePlayerName() {
    try {
        const idForUpdate = parseInt(readline.question("Enter the obj id for update: "));
        const newName = readline.question("Enter your updated name: ");
        const body = { name: newName };
        const res = await makeRequest(`/player/${idForUpdate}`, 'PUT', body);
        if (res) console.log(res);
    } catch (err) {
        console.log("Error with update player: ", err.message)
    }
}