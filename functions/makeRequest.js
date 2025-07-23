import { clearToken, getToken, setToken } from "./auth/authToken.js";

export async function makeRequest(url, method = 'GET', body = null) {
    try {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const token = getToken();
        if (token) { options.headers['Authorization'] = `Bearer ${token}` };

        if (body) {
            options.body = JSON.stringify(body);
        }
        await new Promise(resolve => setTimeout(resolve, 1000))

        const res = await fetch(`http://localhost:3000${url}`, options);

        if(res.status === 401){
            console.log('Token expired of invalid. Please login again.')
            clearToken();
            return null;
        }
        if (!res.ok) {
            const errText = await res.text();
            throw new Error(errText);
        }

        const contentType = res.headers.get('Content-Type');

        if (contentType && contentType.includes('application/json')) {
            return await res.json();
        } else {
            return await res.text();
        }

    } catch (err) {
        console.error('Error in make request:', err.message);
        return null;
    }
}
