/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import socket from '@/plugins/socket.io.js'
const promiseData = () =>
  new Promise(resolve => {
    socket.emit('get-data', function(dataResponse) {
      console.log('FROM DATA-PROVIDER: ', dataResponse)
      return resolve(dataResponse)
    })
  })

const promiseUpdatedData = () =>
  new Promise(resolve => {
    socket.emit('get-data', function(dataResponse) {
      console.log('FROM DATA-PROVIDER: ', dataResponse)
      return resolve(dataResponse)
    })
  })
export default async (context, inject) => {
  //   const options = JSON.parse('<%= serialize(options) %>')
  const testData = ['a', 'b']
  let dataTest
  let data = []
  data = await promiseData()

  const posts = [
    {
      userId: 2,
      id: 1,
      title:
        'suddssdsadsssndsaddt aut facere repellat prosvident occaecati excepturi optio NEW',
      body:
        'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    }
  ]

  if (process.client) {
    console.log('from providesr - is client')
  }
  if (context.isHMR) {
    console.log('TCL: context.isHMR', context.isHMR)
    data = posts
  }
  context.$providerData = data
  inject('providerData', data)

  // promiseData().then(data => {
  //   context.$providerData = data
  //   inject('providerData', data)
  // })

  context.$testData = testData
  inject('testData', testData)
}
