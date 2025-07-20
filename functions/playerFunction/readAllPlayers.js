import { makeRequest } from "../makeRequest.js";

export async function readAllPlayers() {
    try {
        const data = await makeRequest('/player', 'GET');
        console.log(data);
    } catch (err) {
        console.log("Error: ", err.message);
    }
}