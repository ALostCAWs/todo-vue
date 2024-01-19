<script setup>
import TodoList from './components/TodoList.vue'
</script>

<template>
  <TodoList />
</template>

<script>
export default {
  data() {
    return {
      isDone: this.done
    }
  }
}
</script>
