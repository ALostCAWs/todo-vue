import Vue from 'vue';
import App from './App.vue';
import TodoList from './components/TodoList.vue';

new Vue({
  render: (h) => h(TodoList),
}).$mount('#app');