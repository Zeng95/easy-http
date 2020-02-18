const http = new EasyHTTP()

// Get Posts
http.get('https://jsonplaceholder.typicode.com/users1', (err, posts) => {
  if (err) {
    console.log(err)
  } else {
    console.log(posts)
  }
})
