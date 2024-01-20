<script setup>
import AddItemModal from './components/AddItemModal.vue'
import ToggleModalButton from './components/ToggleModalButton.vue'
import DeleteItemButton from './components/DeleteItemButton.vue'
import TodoList from './components/TodoList.vue'
</script>

<template>
  <div class="todo-container">
    <div v-if="modalActive">
      <AddItemModal
      @onCreate="createItem"
      @onToggle="toggleModal"
      />
    </div>
    <ToggleModalButton
      @onToggle="toggleModal"
    />
    <DeleteItemButton
      :deleteSelectedItems="deleteSelectedItems"
    />
    <TodoList
      :list="list"
      @onSelect="toggleSelectItem"
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
    toggleModal() {
      this.modalActive = !this.modalActive;
    },
    createItem(item) {
      const newItem = {
        text: item.text || '',
        date: item.date || '',
        selected: false
      }
      this.list.push(newItem);

      this.toggleModal();
    },
    updateItem() {
      console.log('update');
    },
    toggleSelectItem({ checked, item }) {
      item.selected = checked;
    },
    deleteSelectedItems() {
      this.list = this.list.filter((item) => { return !item.selected });
    }
  },
  data() {
    return {
      modalActive: false,
      list: [
        { text: "item 1", date: undefined, selected: false },
        { text: "item 2", date: undefined, selected: false },
        { text: "item 3", date: undefined, selected: false },
        { text: "item 4", date: undefined, selected: false },
        { text: "item 5", date: undefined, selected: false }
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
