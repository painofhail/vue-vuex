# vue-vuex

Идея проекта в том, чтобы научиться базовым вещам о Vuex. Представляет собой страницу с набором постов, подгружаемых асинхронно с JSON Placeholder.

Концепция работы с Vuex: action -> mutation -> state -> getters

Основные особенности: 
1. Для работы с постами используется Vuex, который через экшен fetchPosts подгружает посты
2. Экшен вызывает мутацию для обновления стейта posts
    1. Дополнительно происходит проверка, что пост не пустой, в геттере notEmptyPosts
    2. В главном компоненте происходит лишь вызов геттера notEmptyPosts для получения списка непустых постов
3. Также возможно добавить свой пост через форму сверху, для этого используется мутация createPost

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
