export async function makeRequest(url, method = 'GET', body = null) {
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
        await new Promise(resolve => setTimeout(resolve, 1000))
        const res = await fetch(`http://localhost:3000${url}`, options);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
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
