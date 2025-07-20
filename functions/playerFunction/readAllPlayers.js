import { makeRequest } from "../makeRequest.js";

export async function readAllPlayers() {
    try {
        const data = await makeRequest('/player', 'GET');
        console.table(data);
    } catch (err) {
        console.log("Error: ", err.message);
    }
}