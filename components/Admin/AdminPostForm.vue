<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <form @submit.prevent="onSave">
        <app-control-input
          v-model="editedPost.author"
        >
          Author Name
        </app-control-input>
        <app-control-input
          v-model="editedPost.title"
        >
          Title
        </app-control-input>
        <app-control-input
          v-model="editedPost.thumbnailLink"
        >
          Thumbnail Link
        </app-control-input>
        <app-control-input
          v-model="editedPost.content"
          control-type="textarea"
        >
          Content
        </app-control-input>
        <app-button
          type="submit"
        >
          Save
        </app-button>
        <app-button
          @click="onCancel"
          type="button"
          style="margin-left: 10px"
          btn-style="cancel"
        >
          Cancel
        </app-button>
      </form>
    </section>
  </div>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'

export default {
  components: {
    AppButton,
    AppControlInput
  },
  props: {
    post: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data () {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
          author: '',
          title: '',
          thumbnailLink: '',
          content: ''
        }
    }
  },
  methods: {
    onSave () {

    },
    onCancel () {
      this.$router.push('/admin')
    }
  }
}
</script>
