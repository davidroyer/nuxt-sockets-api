<template>
  <div>
    <h2>Testing - Computed <code>$vStore.posts</code></h2>
    <h4>I believe <code>socketData</code> is the best way to go as of right now</h4>
    <br>
    <pre>{{ $vStore.posts }}</pre>
  </div>
</template>

<script>
/* eslint-disable no-console */

export default {
  computed: {
    posts() {
      return this.$vStore.posts
      // return this.$cmsApi.getCollection('posts')
      // return this.$root.socketData
    }
  },
  // asyncData({ $cmsApi }) {
  //   // console.log('TCL: asyncData -> cmsApi', $cmsApi)
  //   const cmsPosts = $cmsApi.getCollection()
  //   console.log('asyncData - cmsPosts: ', cmsPosts)

  //   return {
  //     cmsApiPosts: cmsPosts
  //   }
  // },

  created() {},
  mounted() {
    console.log('$vStore', this.$vStore)
  },
  head: {
    title: 'Nuxt.js with Socket.io'
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
}

html,
input {
  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
    Helvetica, Arial, 'Lucida Grande', sans-serif;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
  word-wrap: break-word;
}

/* Pages */

.pages {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}

.page {
  height: 100%;
  position: absolute;
  width: 100%;
}

/* Font */

.messages {
  font-size: 150%;
}

.inputMessage {
  font-size: 100%;
}

.log {
  color: gray;
  font-size: 70%;
  margin: 5px;
  text-align: center;
}

/* Messages */

.chatArea {
  height: 100%;
  padding-bottom: 60px;
}

.messages {
  height: 100%;
  margin: 0;
  overflow-y: scroll;
  padding: 10px 20px 10px 20px;
}

/* Input */

.inputMessage {
  border: 10px solid #3b8070;
  bottom: 0;
  height: 60px;
  left: 0;
  outline: none;
  padding-left: 10px;
  position: absolute;
  right: 0;
  width: 100%;
}
</style>
