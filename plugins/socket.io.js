import io from 'socket.io-client'
// eslint-disable-next-line import/no-mutable-exports
let socket = {}
if (process.env.DEV_MODE) {
  socket = io(process.env.WS_URL)

  // eslint-disable-next-line no-console
  console.log('In DEV_MODE so requiring socket.io in plugins')
} else {
  socket = {}
}
export default socket
