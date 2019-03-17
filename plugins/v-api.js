/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import socket from '@/plugins/socket.io'
import Vue from 'vue'
let socketData

socket.on('file-update', data => {
  const postTitles = []
  socketData = data
  socketData.forEach(post => {
    postTitles.push(post.title)
  })
  console.log('From v-api - socketData postTitles: ', postTitles)
})

// Vue.prototype.$myInjectedFunction = string =>
//   console.log('This is an example', string)

Vue.mixin({
  data: () => ({
    apiPosts: [],
    socketData
  }),

  created() {
    socket.emit('get-data', function(dataResponse) {
      this.apiPosts = dataResponse
    })

    socket.on('file-update', data => {
      this.apiPosts = data
    })
  }
})

// 4. add an instance method
Vue.prototype.$myMethod = function(methodOptions) {
  // some logic ...
}
