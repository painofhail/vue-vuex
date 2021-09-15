<template>
  <div id="app">
    
    <PostForm />

    <h1>{{ postsCount }} постов</h1>

    <div class="post" v-for="post in notEmptyPosts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>     

  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import PostForm from './components/PostForm.vue';

  export default {
  components: { PostForm },
    name: 'App',
    // computed: {
    //   allPosts () {
    //     return this.$store.getters.allPosts;
    //   }
    // },    
    // ИЛИ
    computed: {
      ...mapGetters(['allPosts', 'notEmptyPosts', 'postsCount'])     
    }, 
    methods: {
      ...mapActions(['fetchPosts'])
    },
    // async mounted () {
    //   this.$store.dispatch('fetchPosts');
    // }
    // ИЛИ
    async mounted () {
      this.fetchPosts(10);
    }
  }
  </script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 60px auto;
    width: 400px;
  }

  .post {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
</style>
