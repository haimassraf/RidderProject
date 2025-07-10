import { makeRequest } from "../makeRequest.js"

export async function createPlayer(newName) {
    try {
        const body = { name: newName }
        const res = await makeRequest('/player', 'POST', body)
        console.log(res);
    } catch (err) {
        console.log("Error: ", err.message)
    }
}