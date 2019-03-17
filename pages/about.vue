<template>
  <div>
    <h2>About1sss</h2>
    <pre>{{ $root.apiPosts }}</pre>
    <div class="posts">
      <div 
        v-for="(post) in $root.apiPosts" 
        :key="post.id" 
        class="post"
      >
        <h2>{{ post.title }}</h2>
      </div>
    </div>    
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

// import socket from '@/plugins/socket.io.js'
// import { VApi } from '@/plugins/v-api.js'
export default {
  // asyncData({ $providerData, req }) {
  //   const renderedFrom = req ? 'Server' : 'Client'
  //   const postsFromProvider = $providerData
  //   return {
  //     renderedFrom,
  //     postsFromProvider
  //   }
  // },
  // data: () => ({
  //   apiPosts: []
  // }),
  beforeMount() {}
}
</script>

<style scoped>
div {
  background: lightblue;
}
</style>
