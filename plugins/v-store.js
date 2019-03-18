/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import socket from '@/plugins/socket.io'
import Vue from 'vue'

const vStore = Vue.observable({
  posts: [],
  projects: []
})

if (process.env.DEV_MODE) {
  socket.on('file-update', data => {
    vStore.posts = data
  })
} else {
  vStore.posts = require('@/io/data/posts.json')
  console.log('Generating static site so requiring JSON files')
}

export default (context, inject) => {
  context.$vStore = vStore
  inject('vStore', vStore)
}
