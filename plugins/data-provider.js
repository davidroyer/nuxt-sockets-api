import socket from '@/plugins/socket.io.js'

export default (context, inject) => {
  //   const options = JSON.parse('<%= serialize(options) %>')
  let posts = []
  socket.on('file-update', data => {
    console.log('From data-provider: ', data)
    posts = [...data]
  })
  context.$posts = posts
  inject('posts', posts)
}
