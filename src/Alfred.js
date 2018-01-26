class Alfred {
    constructor(base_url, port) {
        this.baseUrl = base_url
    }

    fetch(url, method, body = null, headers = {}) {
        if (body) {
            body = JSON.stringify(body)
            headers['Content-Type'] = 'application/json';
        }
        headers['Accept'] = 'application/json';
        return fetch(this.baseUrl + url, {
            method: method,
            body: body ? JSON.stringify(body) : null,
            headers: headers,
        })
            // Handle network errors.
            .catch(error => alert(error))
            // Extract the response payload.
            .then(response => response.json())
            // Handle JSON deserialization errors.
            .catch(error => alert(error))
        // @todo Handle error responses.
    }
}

export default Alfred