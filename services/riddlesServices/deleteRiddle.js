import { deleteById } from "../../DAL/riddleController.js";
import readline from 'readline-sync';

export function deleteRiddle() {
    let idForDelete;
    let userChoice;
    do {
        userChoice = readline.question("Enter the object id for delete: ")
        idForDelete = parseInt(userChoice);
        if (isNaN(idForDelete)) { console.log("The id is number") };
    } while (isNaN(idForDelete));

    deleteById(idForDelete);
}