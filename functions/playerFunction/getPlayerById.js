import { Player } from "../../models/player.js";
import { makeRequest } from "../makeRequest.js";

export async function getPlayerById(id) {
    try {
        const res = await makeRequest(`/player/byid/${id}`, 'GET');
        if (!res.id) {
            console.log(`Player with id: '${id}' not found`);
            return null;
        }
        const player = new Player(res.id, res.name, res.high_score);
        return player;
    } catch (err) {
        console.log("Error: ", err.message)
    }
}