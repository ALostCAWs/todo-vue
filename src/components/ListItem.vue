<template>
  <div class="todo-item">
    <input type="checkbox" :id="`item-${index + 1}`">
    <p>{{ item.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    index: { required: true },
    item: { required: true }
  },
  data() {
    return {
      isDone: this.done
    }
  }
}
</script>

<style>
.todo-item {
  display: flex;
  flex-direction: row;

  margin: 5px;
  padding: 5px;

  border: thin solid black;
}
</style>