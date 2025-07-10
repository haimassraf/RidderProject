import { makeRequest } from "../makeRequest.js";

export async function updateHighScore(newHighScore, idForUpdate) {
    const body = { highScore: newHighScore };
    const res = await makeRequest(`/player/${idForUpdate}`, 'PUT', body);
    console.log(res);
}