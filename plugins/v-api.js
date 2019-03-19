/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import socket from '@/plugins/socket.io'
import Vue from 'vue'

let socketData
let cmsApiPosts

if (process.env.DEV_MODE) {
  console.log('From v-api.js - In DEV_MODE & Sockets')

  socket.on('file-update', data => {
    socketData = data
    cmsApiPosts = data
  })
} else {
  socketData = require('@/io/data/posts.json')
}

const getCollection = (context, contentType) => {
  console.log('TCL: getCollection -> contentType', contentType)
  if (context.isDev) {
    console.log('IN DEV MODE')
  }
  return []
  // IF IN DEV MODE
  // ... Use socket data for updates
  // IF GENERATORING FOR PRODUCTION
  // 1. Require the appropriate json file and return the data
}

export default (context, inject) => {
  const cmsApiStore = new Vue({
    data() {
      return {
        cmsApiPosts
      }
    },

    created() {
<<<<<<< HEAD
      if (context.isDev && !this.$parent) {
        console.log('In DEV mode in root instance so using sockets for data')
        socket.on('file-update', data => {
          this.apiPosts = data
          this.socketData = data
        })
      }

      if (!context.isDev && !this.$parent) {
        console.log('Not in DEV mode so requiring the JSON file')
        this.apiPosts = require('@/io/data/posts.json')
        // this.socketData = require('@/io/data/posts.json')
      }
=======
      socket.on('file-update', data => {
        console.log('TCL: created -> data', data)
        this.cmsApiPosts = data
      })
>>>>>>> 23125077f5760120902ac02ec3f611218dc89028
    },

    methods: {
      getCollection(contentType, slug) {
        console.log(
          'TCL: getCollection -> contentType, slug',
          contentType,
          slug
        )
        return this.cmsApiPosts
      }
    }
  })
  // Vue.mixin({
  //   data: () => ({
  //     apiPosts: [],
  //     socketData
  //   }),

  //   created() {
  //     if (context.isDev) {
  //       // console.log('In DEV mode so using sockets for data')
  //       // socket.emit('get-data', function(dataResponse) {
  //       //   this.apiPosts = dataResponse
  //       // })
  //       // socket.on('file-update', data => {
  //       //   this.apiPosts = data
  //       //   this.socketData = data
  //       // })
  //     } else {
  //       console.log('Not in DEV mode so requiring the JSON file')
  //       this.apiPosts = require('@/io/data/posts.json')
  //       // this.socketData = require('@/io/data/posts.json')
  //     }
  //   }
  // })

  inject('getCollection', getCollection)
  context.$cmsApi = cmsApiStore
  inject('cmsApi', cmsApiStore)
}
