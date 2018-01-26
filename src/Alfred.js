class Alfred {
    constructor(base_url) {
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
            body: body,
            headers: headers,
        })
            .catch(error => alert('Error during an Alfred HTTP request: ' + error))
            .then(response => response.json())
            .catch(error => alert('Error when deserializing the Alfred HTTP response as JSON: ' + error))
        // @todo Handle error responses.
    }
}

export default Alfred