import { Player } from "../../models/player.js";
import { makeRequest } from "../makeRequest.js"

export async function createPlayer(newName) {
    try {
        const body = { name: newName }
        const res = await makeRequest('/player', 'POST', body)
        console.log(res)
        const newPlayer = new Player(res.id, res.name)
        return newPlayer;
    } catch (err) {
        console.log("Error: ", err.message)
    }
}