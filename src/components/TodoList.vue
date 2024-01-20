<script setup>
import ListItem from './ListItem.vue'
</script>

<template>
  <div class="list-container">
    <ListItem
      v-for="(item, index) in list"
      :key="index"
      :index = index
      :item = item
    />
  </div>
</template>

<script>
export default {
  props: {
    list: { required: true }
  },
  data() {
    return {
      isDone: this.done
    }
  }
}
</script>