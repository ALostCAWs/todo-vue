<script setup>
import AddItemModal from './components/AddItemModal.vue'
import ToggleModalButton from './components/ToggleModalButton.vue'
import DeleteItemButton from './components/DeleteItemButton.vue'
import TodoList from './components/TodoList.vue'
</script>

<template>
  <div class="todo-container">
    <div v-show="modalActive">
      <AddItemModal
      @onCreate="createItem"
      @onToggle="toggleModal"
      />
    </div>
    <div class="todo-btn">
      <ToggleModalButton
        @onToggle="toggleModal"
      />
      <DeleteItemButton
        :deleteSelectedItems="deleteSelectedItems"
        v-show="itemSelected"
      />
    </div>
    <TodoList
      :list="list"
      @onSelect="toggleSelectItem"
      @onUpdate="updateItem"
    />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    AddItemModal,
    ToggleModalButton,
    DeleteItemButton,
    TodoList
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
    updateItem({ index, text }) {
      this.list[index].text = text;
    },
    toggleSelectItem({ checked, item }) {
      item.selected = checked;
      if (checked) {
        this.itemSelected = true;
      } else {
        this.itemSelected = this.list.filter((item) => { return item.selected }).length > 0;
      }
    },
    deleteSelectedItems() {
      this.list = this.list.filter((item) => { return !item.selected });
      this.itemSelected = false;
    }
  },
  data() {
    return {
      modalActive: false,
      itemSelected: false,
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
  margin-top: 2em;
}
.todo-btn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
