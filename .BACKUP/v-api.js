/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import socket from '@/plugins/socket.io'
import Vue from 'vue'
let socketData


const getCollection = (context, contentType) => {
  console.log('TCL: getCollection -> contentType', contentType)
  if (context.isDev) {
    console.log('IN DEV MODE')
  }
  return [
    {
      id: 1,
      title: 'Testing Here'
    }
  ]
  // IF IN DEV MODE
  // ... Use socket data for updates
  // IF GENERATORING FOR PRODUCTION
  // 1. Require the appropriate json file and return the data
}

export default (context, inject) => {
  if (context.isDEV) {
    socket.on('file-update', data => {
      const postTitles = []
      socketData = data
      socketData.forEach(post => {
        postTitles.push(post.title)
      })
      // console.log('From v-api - socketData postTitles: ', postTitles)
    })
  } else {
    socketData = require('@/io/data/posts.json')
  }

  Vue.mixin({
    data: () => ({
      apiPosts: [],
      socketData
    }),

    created() {
      if (context.isDev) {
        console.log('In DEV mode so using sockets for data')
        socket.emit('get-data', function(dataResponse) {
          this.apiPosts = dataResponse
        })

        socket.on('file-update', data => {
          this.apiPosts = data
          this.socketData = data
        })
      } else {
        console.log('Not in DEV mode so requiring the JSON file')
        this.apiPosts = require('@/io/data/posts.json')
        // this.socketData = require('@/io/data/posts.json')
      }
    },

    methods: {
      // getCollection(contentType) {
      //   console.log('TCL: getCollection -> contentType', contentType)
      //   if (context.isDev) {
      //     console.log('IN DEV MODE')
      //   }
      //   return [
      //     {
      //       id: 1,
      //       title: 'Testing Here'
      //     }
      //   ]
      //   // IF IN DEV MODE
      //   // ... Use socket data for updates
      //   // IF GENERATORING FOR PRODUCTION
      //   // 1. Require the appropriate json file and return the data
      // }
    }
  })
  inject('getCollection', getCollection)
  // context.$myMethod = collection => {
  //   socket.emit('get-data', dataResponse => {
  //     console.log('FROM $myMethod - dataResponse: ', dataResponse)
  //     return dataResponse
  //   })
  // }
  // inject('myMethod', collection => {
  //   socket.emit('get-data', dataResponse => {
  //     console.log('FROM $myMethod - dataResponse: ', dataResponse)
  //     return dataResponse
  //   })
  // })

}
