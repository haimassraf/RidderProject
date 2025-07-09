import { makeRequest } from "../makeRequest.js";

export async function readAllRiddles() {
    const res = await makeRequest('/riddles', 'GET');
    console.log(res);
}