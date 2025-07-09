export async function makeRequest(url, method, body = null) {
    try {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        const res = await fetch(`https://riddleprojectserver.onrender.com${url}`, options);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        return await res.json();
    } catch (err) {
        console.error('Request error:', err.message);
        return null;
    }
}
