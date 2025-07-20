import { Player } from "../../models/player.js";
import { makeRequest } from "../makeRequest.js";
import readline from 'readline-sync';

export async function createPlayer(newName = null) {
    if (!newName){
        newName = readline.question("Enter a User Name: ");
    }
    const body = { name: newName }
    const res = await makeRequest('/player', 'POST', body)
    const newPlayer = new Player(res.id, res.name)
    return newPlayer;
}