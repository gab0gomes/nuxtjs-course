<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form
        :post="loadedPost"
      />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  layout: 'admin',

  components: {
    AdminPostForm
  },
  data () {
    return {
      loadedPost: {
        author: 'Gabriel Gomes',
        title: 'My new post',
        content: 'Super amazing!',
        thumbnailLink: 'http://prod-upp-image-read.ft.com/7c363102-ce47-11e9-b018-ca4456540ea6'
      }
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
