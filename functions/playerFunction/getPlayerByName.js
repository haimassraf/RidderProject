import { Player } from "../../models/player.js";
import { makeRequest } from "../makeRequest.js";

export async function getPlayerByName(name) {
    try {
        const res = await makeRequest(`/player/${name}`, 'GET');
        if (!res.id) {
            console.log(`Player '${name}' not found`);
            return null;
        }
        const player = new Player(res.id, res.name, res.high_score);
        return player;
    } catch (err) {
        console.log("Error: ", err.message)
    }
}