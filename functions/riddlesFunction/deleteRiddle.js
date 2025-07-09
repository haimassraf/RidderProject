import readline from 'readline-sync';
import { makeRequest } from '../makeRequest.js';

export async function deleteRiddle() {
    let idForDelete;
    let userChoice;
    do {
        userChoice = readline.question("Enter the object id for delete: ")
        idForDelete = parseInt(userChoice);
        if (isNaN(idForDelete)) { console.log("The id is number") };
    } while (isNaN(idForDelete));
    const res = await makeRequest(`/riddle/${idForDelete}`, 'DELETE');
    console.log(res)
}