export default {
  actions: {
    // Первый параметр - контекст, можно использовать ES6 синтаксис и передавать методы
    // commit - для обноления стейта через вызов мутации
    // getters - для вызова геттера
    // dispatch - для вызова другого экшена

    // Остальные параметры - пользовательские
    async fetchPosts ({ commit, dispatch }, limit = 3) {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
      const posts = await res.json();

      // обновления стейта через мутацию
      commit('updatePosts', posts);

      // вызов другого экшена
      dispatch('sayHello');
    },
    sayHello ({ getters }) {
      // вызов геттера внутри экшена
      console.log('Hello!', getters.postsCount);
    }
  },
  mutations: {
    // первый параметр - всегда state
    updatePosts (state, posts) {
      state.posts = posts;
    },
    createPost (state, newPost) {
      state.posts.unshift(newPost); // добавили пост в начало
    }
  },
  state: {
    posts: []
  },
  getters: {
    // первый параметр - всегда state
    allPosts (state) {
      return state.posts
    },
    notEmptyPosts (state) {
      return state.posts.filter(post => post.title && post.body)
    },
    postsCount (state, getters) {
      return getters.notEmptyPosts.length;
    },    
  }
}