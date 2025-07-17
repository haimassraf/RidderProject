import readline from 'readline-sync';
import { makeRequest } from '../makeRequest.js';

export async function deleteRiddle() {
    const idForDelete = readline.question("Enter the object id for update: ")
    const res = await makeRequest(`/riddle/${idForDelete}`, 'DELETE');
    console.log(res)
}