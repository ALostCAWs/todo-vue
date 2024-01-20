<template>
  <div class="todo-item">
    <input
      type="checkbox"
      :id="`item-${index + 1}`"
      @click="onChk"
    >
    <p>{{ item.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    index: { required: true },
    item: { required: true }
  },
  methods: {
    onChk(e) {
      this.$emit('clicked', true);
    }
  }
}
</script>

<style>
.todo-item {
  display: flex;
  flex-direction: row;

  margin: 5px 0;
  padding: 5px;

  border: thin solid black;
}

.todo-item:hover {
  background-color: #eee;
}
</style>