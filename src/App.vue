<script setup>
import { ref } from 'vue'
import AddItemModal from './components/AddItemModal.vue'
import ToggleModalButton from './components/ToggleModalButton.vue'
import TodoList from './components/TodoList.vue'
</script>

<template>
  <div class="todo-container">
    <div v-if="modalActive">
      <AddItemModal
        :modalActive="modalActive"
        :toggleModal="toggleModal"
      />
    </div>
    <ToggleModalButton
      :toggleModal="toggleModal"
    />
    <TodoList
      :list="list"
    />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    AddItemModal
  },
  methods: {
    toggleModal: function () {
      this.modalActive = !this.modalActive;
    }
  },
  data() {
    return {
      modalActive: false,
      list: [
        { text: "item 1", date: undefined },
        { text: "item 2", date: undefined },
        { text: "item 3", date: undefined },
        { text: "item 4", date: undefined },
        { text: "item 5", date: undefined }
      ]
    };
  }
}
</script>

<style>
.todo-container {
  width: 35%;
  margin: auto;
}
</style>
