import { makeRequest } from "../makeRequest.js";

export async function updateOrInsertHighScore(newHighScore, idForUpdate) {
    const body = { high_score: newHighScore };
    const res = await makeRequest(`/player/${idForUpdate}`, 'PUT', body);
    if (res) console.log("new high score update successfully");
}