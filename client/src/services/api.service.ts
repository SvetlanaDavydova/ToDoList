export async function postData(url: string = '', data: object = {}) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        
        if (response.status >= 400) {
            throw new Error(await response.text());
        }

        return await response.json(); // parses JSON response into native JavaScript objects
    } catch (e) {
        throw e;
    }
}
