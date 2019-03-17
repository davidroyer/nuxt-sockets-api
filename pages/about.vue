<template>
  <div>
    <h2>About1sss</h2>
    <div class="posts">
      <div 
        v-for="(post) in postsFromProvider" 
        :key="post.id" 
        class="post"
      >
        <h2>{{ post.title }}</h2>
      </div>
    </div>    
  </div>
</template>

<script>
import socket from '@/plugins/socket.io.js'

export default {
  asyncData({ $providerData, req }) {
    const renderedFrom = req ? 'Server' : 'Client'
    const postsFromProvider = $providerData
    return {
      renderedFrom,
      postsFromProvider
    }
  },

  beforeMount() {
    socket.on('file-update', data => {
      // eslint-disable-next-line no-console
      console.log('From created: ', data)
      this.postsFromProvider = data
    })
  }
}
</script>

<style scoped>
div {
  background: lightblue;
}
</style>
