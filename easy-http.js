function EasyHTTP() {
  this.http = new XMLHttpRequest()
}

// Make an HTTP GET Request
EasyHTTP.prototype.get = function (url, callback) {
  const { http } = this

  http.open('GET', url)
  http.send()
  http.onload = () => {
    callback(http.responseText)
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


