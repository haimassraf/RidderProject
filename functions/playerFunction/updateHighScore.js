import { makeRequest } from "../makeRequest.js";

export async function updateHighScore(newHighScore, idForUpdate) {
    const body = { highScore: newHighScore };
    console.log("body: ", body);
    const res = await makeRequest(`/player/${idForUpdate}`, 'PUT', body);
    console.log(res);
}