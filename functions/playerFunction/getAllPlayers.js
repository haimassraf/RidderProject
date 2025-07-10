import { Player } from "../../models/player.js";
import { makeRequest } from "../makeRequest.js";

export async function getAllPlayers() {
    try {
        const players = [];
        const data = await makeRequest('/player', 'GET');
        for (const obj of data) {
            const newPlayer = new Player(obj.id, obj.name, obj.highScore);
            players.push(newPlayer);
        }
        return players;
    } catch (err) {
        console.log("Error: ", err.message);
    }
}