import { makeRequest } from "../makeRequest.js";

export async function updateOrInsertHighScore(newHighScore, idForUpdate) {
    const body = { highScore: newHighScore };
    const res = await makeRequest(`/player/${idForUpdate}`, 'PUT', body);
    console.log(res);
}