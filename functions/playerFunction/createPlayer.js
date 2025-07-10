import { Player } from "../../models/player.js";
import { makeRequest } from "../makeRequest.js"

export async function createPlayer(newName) {
    const body = { name: newName }
    const res = await makeRequest('/player', 'POST', body)
    const newPlayer = new Player(res.id, res.name)
    return newPlayer;
}