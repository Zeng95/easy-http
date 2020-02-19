const http = new EasyHTTP()

// Create Data
const data = {
  name: 'Leo Zeng'
}

// Get Posts
http.get('http://5e4cdfb69b6805001438f033.mockapi.io/posts', (err, posts) => {
  if (!err) {
    // 如果没有 err 就显示 posts
    console.log(JSON.parse(post))
  } else {
    // 如果有 err 就显示 err
    console.log(err)
  }
})

// Get A Post
http.get('http://5e4cdfb69b6805001438f033.mockapi.io/posts/1', (err, post) => {
  if (!err) {
    // 如果没有 err 就显示 posts
    console.log(JSON.parse(post))
  } else {
    // 如果有 err 就显示 err
    console.log(err)
  }
})

// Create A Post
http.post('http://5e4cdfb69b6805001438f033.mockapi.io/posts', data, (err, post) => {
  if (!err) {
    // 如果没有 err 就显示 posts
    console.log(JSON.parse(post))
  } else {
    // 如果有 err 就显示 err
    console.log(err)
  }
})

// Update A Post
http.put('http://5e4cdfb69b6805001438f033.mockapi.io/posts/1', data, (err, post) => {
  if (!err) {
    // 如果没有 err 就显示 posts
    console.log(JSON.parse(post))
  } else {
    // 如果有 err 就显示 err
    console.log(err)
  }
})

// Delete a post
http.delete('http://5e4cdfb69b6805001438f033.mockapi.io/posts/16', (err, msg) => {
  if (!err) {
    // 如果没有 err 就显示 posts
    console.log(msg)
  } else {
    // 如果有 err 就显示 err
    console.log(err)
  }
})