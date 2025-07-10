import { makeRequest } from "../makeRequest.js"

export async function createPlayer(newName) {
    const body = { name: newName }
    const res = await makeRequest('/player', 'POST', body)
    console.log(res);
}