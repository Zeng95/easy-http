function EasyHTTP() {
  // 1. Create a new XMLHttpRequest object
  this.http = new XMLHttpRequest()
}

// Make an HTTP GET Request
EasyHTTP.prototype.get = function (url, callback) {
  const { http } = this

  // 2. Configure it: GET-request for the URL
  http.open('GET', url)

  // 3. Send the request over the network
  http.send()

  // 4. This will be called after the response is received
  http.onload = () => {
    if (http.status === 200) {
      callback(null, http.responseText)
    } else {
      callback(`Error: ${http.status}`)
    }
  }

  http.onerror = () => {
    alert('Request failed')
  }

  // return undefined
}

// Make an HTTP POST Request
EasyHTTP.prototype.post = function (url, data, callback) {
  const { http } = this

  // 2. Configure it: POST-request for the URL
  http.open('POST', url)
  http.setRequestHeader('Content-type', 'application/json; charset=utf-8')

  // 3. Send the request over the network  
  http.send(JSON.stringify(data))

  // 4. This will be called after the response is received
  http.onload = () => {
    if (http.status === 201) {
      callback(null, http.responseText)
    } else {
      callback(`Error: ${http.status}`)
    }
  }

  http.onerror = () => {
    alert('Request failed')
  }
}

// Make an HTTP PUT Request
EasyHTTP.prototype.put = function (url, data, callback) {
  const { http } = this

  // 2. Configure it: POST-request for the URL
  http.open('PUT', url)
  http.setRequestHeader('Content-type', 'application/json; charset=utf-8')

  // 3. Send the request over the network  
  http.send(JSON.stringify(data))

  // 4. This will be called after the response is received
  http.onload = () => {
    console.log(http)
    if (http.status === 200) {
      callback(null, http.responseText)
    } else {
      callback(`Error: ${http.status}`)
    }
  }

  http.onerror = () => {
    alert('Request failed')
  }
}

// Make an HTTP DELETE Request
EasyHTTP.prototype.delete = function (url, callback) {
  const { http } = this

  // 2. Configure it: GET-request for the URL
  http.open('DELETE', url)

  // 3. Send the request over the network  
  http.send()

  // 4. This will be called after the response is received
  http.onload = () => {
    if (http.status === 200) {
      callback(null, 'Post is deleted successfully')
    } else {
      callback(`Error: ${http.status}`)
    }
  }

  http.onerror = () => {
    alert('Request failed')
  }
}


