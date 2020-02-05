<template>
  <div class="posts-page">
    <post-list
      :posts="loadedPosts"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: 'log',
  computed: {
    ...mapState(['loadedPosts'])
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
