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
    <div :inert="modalActive">
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
  computed: {
    isInert() {
      if (this.modalActive) {
        return 'inert';
      }
      return '';
    }
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
    },
    saveList() {
      const parsedList = JSON.stringify(this.list);
      localStorage.setItem('todo_vue_list', parsedList);
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
  },
  mounted() {
    if (localStorage.getItem('todo_vue_list')) {
      try {
        this.list = JSON.parse(localStorage.getItem('todo_vue_list'));
      } catch (e) {
        localStorage.removeItem('todo_vue_list');
      }
    }
  },
  watch: {
    list: function (updatedList, previousList) {
      this.saveList();
    }
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
