<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">
        {{ loadedPost.title }}
      </h1>
      <div class="post-details">
        <div class="post-detail">
          Last updated on {{ loadedPost.updatedDate }}
        </div>
        <div class="post-detail">
          Written by {{ loadedPost.author }}
        </div>
      </div>
      <p class="post-content">
        {{ loadedPost.content }}
      </p>
    </section>
    <section class="post-feedback">
      <p>
        Let me now what you think about the post, send a email to <a href="mailto://teste@teste.com">teste@teste.com</a>.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData (context, callback) {
    callback(null, {
      loadedPost: {
        id: '1',
        title: `Opas (ID: ${context.route.params.id})`,
        previewText: 'Super amazing',
        author: 'Gabriel',
        updatedDate: new Date(),
        content: 'testing',
        thumbnail: 'http://prod-upp-image-read.ft.com/7c363102-ce47-11e9-b018-ca4456540ea6'
      }
    })
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
