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
      :toggleModal="toggleModal"
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
      :toggleSelectItem="toggleSelectItem"
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
    },
    createItem: function () {
      console.log('create');
      console.log(this.newItem);
      /*const newItem = {
        text: item.text || '',
        date: item.date || undefined,
        selected: false
      }
      this.list.push(newItem);*/

      // this.toggleModal();
    },
    deleteSelectedItems: function () {
      this.list = this.list.filter((item) => { return !item.selected });
    },
    toggleSelectItem: function () {
      console.log('Selected');
    },
    myMethod: function () {
      console.log('My Method');
      this.myBool = !this.myBool;
      console.log(this.myBool);
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
      ],
      newItem: {
        text: '1',
        date: '2',
        selected: false
      },
      text: '1',
      myBool: false
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
