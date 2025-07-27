import { clearToken } from "./authToken.js";
import { makeRequest } from "../makeRequest.js";

export async function logout() {
    try {
        const res = await makeRequest('/auth/logout', 'GET');
        clearToken();
        if (res) console.log(res);
    } catch (err) { console.log("Error: ", err.message) }
}