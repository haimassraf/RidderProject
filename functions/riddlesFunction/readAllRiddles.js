import { makeRequest } from "../makeRequest.js";

export async function readAllRiddles() {
    const res = await makeRequest('/riddle', 'GET');
    console.log(res);
}