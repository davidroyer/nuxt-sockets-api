/* eslint-disable no-console */
// import socket from '@/plugins/socket.io.js'

export default (context, inject) => {
  //   const options = JSON.parse('<%= serialize(options) %>')
  const testData = ['a', 'b']

  context.$testData = testData
  inject('testData', testData)
}
