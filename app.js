const http = new EasyHTTP()

// Get Posts
http.get('https://jsonplaceholder.typicode.com/users', (posts) => {
  console.log(posts)
})
