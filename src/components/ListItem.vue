<template>
  <div class="todo-item" v-if="editActive">
    <input
      type="text"
      :id="`item-${index + 1}`"
    >
    <button type="button" class="update" @click="toggleEdit">Update</button>
    <button type="button" class="edit" @click="toggleEdit">Cancel</button>
  </div>
  <div class="todo-item" v-else>
    <input
      type="checkbox"
      :id="`item-${index + 1}`"
      v-model="item.selected"
      @click="select"
    >
    <p>{{ item.text }}</p>
    <button type="button" class="edit" @click="toggleEdit">Edit</button>
  </div>
</template>

<script>
export default {
  props: {
    index: { required: true },
    item: { required: true }
  },
  methods: {
    select(e) {
      this.$emit('onSelect', { checked: e.target.checked, item: this.item });
    },
    toggleEdit() {
      this.editActive = !this.editActive;
    }
  },
  data() {
    return {
      editActive: false
    }
  }
}
</script>

<style scoped>
.todo-item {
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;

  margin: 5px 0;
  padding: 15px;

  border: thin solid black;
}

.todo-item:hover {
  background-color: #eee;
}

p {
  margin: auto 0;
  margin-left: 1%;
}

.update {
  margin-left: 2.5%;
}

.edit {
  margin-left: auto;
}
</style>