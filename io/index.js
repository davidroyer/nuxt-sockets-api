import http from 'http'
import socketIO from 'socket.io'
import js from 'jsonfile'
import fs from 'fs'
const jsonFile = './io/data/posts.json'

export default function() {
  const server = http.createServer(this.nuxt.renderer.app)
  const io = socketIO(server)

  // overwrite nuxt.server.listen()
  this.nuxt.server.listen = (port, host) =>
    new Promise(resolve =>
      server.listen(port || 3000, host || 'localhost', resolve)
    )
  // close this server on 'close' event
  this.nuxt.hook('close', () => new Promise(server.close))

  // Add socket.io events
  const messages = []
  const posts = [
    {
      userId: 2,
      id: 1,
      title:
        'suddssdsadsssndsaddt aut facere repellat provident occaecati excepturi optio NEW',
      body:
        'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    }
  ]
  io.on('connection', socket => {
    socket.on('last-messages', function(fn) {
      fn(messages.slice(-2))
    })

    socket.on('get-data', function(fn) {
      fn(posts)
    })

    socket.on('send-message', function(message) {
      messages.push(message)
      socket.broadcast.emit('new-message', message)
    })

    js.readFile(jsonFile)
      .then(data => {
        console.dir('ATTEMPTING TO SEND INITIAL DATA')
        socket.emit('file-update', data)
      })
      .catch(error => console.error(error))

    fs.watch(jsonFile, (event, filename) => {
      js.readFile(jsonFile)
        .then(data => {
          console.dir(data)
          socket.emit('file-update', data)
        })
        .catch(error => console.error(error))
    })
  })
}
