<template>
  <div v-if="editActive" :id="`item-${index + 1}`" class="todo-item selected">
    <input
      type="text"
      :id="`update-item-${index + 1}`"
      v-model="updatedItem"
    >
    <button type="button" class="update" @click="update">Update</button>
    <button type="button" class="edit" @click="toggleEdit">Cancel</button>
  </div>
  <div v-else :id="`item-${index + 1}`" class="todo-item" :class="{ selected: item.selected }">
    <input
      type="checkbox"
      :id="`select-item-${index + 1}`"
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
    },
    setUpdatedText(text) {
      this.updatedItem = text
    },
    update() {
      this.$emit('onUpdate', { index: this.index, text: this.updatedItem });
      this.toggleEdit();
    }
  },
  data() {
    return {
      editActive: false,
      updatedItem: this.item.text
    }
  }
}
</script>

<style scoped>
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