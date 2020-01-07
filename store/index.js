import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts (state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
        return new Promise((resolve, reject) => {
          vuexContext.commit('setPosts', [
            {
              id: '1',
              title: 'Opas',
              previewText: 'Super amazing',
              thumbnail: 'http://prod-upp-image-read.ft.com/7c363102-ce47-11e9-b018-ca4456540ea6'
            },
            {
              id: '2',
              title: 'Opas',
              previewText: 'Super amazing',
              thumbnail: 'http://prod-upp-image-read.ft.com/7c363102-ce47-11e9-b018-ca4456540ea6'
            }
          ])
          resolve()
        })
      },
      setPosts (vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts (state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
