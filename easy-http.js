function EasyHTTP() {
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
EasyHTTP.prototype.post = (url) => {
  this.http.open('POST', url)
}

// Make an HTTP PUT Request
EasyHTTP.prototype.put = (url) => {
  this.http.open('PUT', url)
}

// Make an HTTP DELETE Request
EasyHTTP.prototype.delete = (url) => {
  this.http.open('DELETE', url)
}


