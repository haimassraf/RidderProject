import { Player } from "../../models/player.js";
import { makeRequest } from "../makeRequest.js";

export async function getPlayerByName(name) {
    try {
        const res = makeRequest(`/player/${name}`, 'GET');
        const player = new Player(res.id, res.name, res.highScore);
        return player;
    } catch (err) {
        console.log("Error: ", err.message)
    }
}