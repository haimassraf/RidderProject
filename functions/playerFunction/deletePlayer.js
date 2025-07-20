import readline from 'readline-sync';
import { makeRequest } from '../makeRequest.js';

export async function deletePlayer() {
    try {
        const idForDelete = readline.question("Enter the player id for delete: ");
        const res = await makeRequest(`/player/${idForDelete}`, 'DELETE');
        console.log(res);
    } catch (err) {
        console.log("Error with delete player: ", err.message);
    }

}