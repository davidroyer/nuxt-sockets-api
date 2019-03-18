<template>
  <div>
    <h2>Testing - <code>$vStore.posts</code></h2>
    <pre>{{ $vStore.posts }}</pre>
    <div class="posts">
      <div 
        v-for="(post) in $vStore.posts" 
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

export default {}
</script>

<style scoped>
div {
  background: lightblue;
}
</style>
