import { clearToken } from "./authToken.js";
import { makeRequest } from "../makeRequest.js";

export async function logout() {
    try {
        const msg = await makeRequest('/auth/logout', 'GET');
        clearToken();
        console.log(msg);
    } catch (err) { console.log("Error: ", err.message) }
}