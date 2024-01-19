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
  data() {
    return {
      list: [
        { text: "item 1", date: undefined },
        { text: "item 2", date: undefined },
        { text: "item 3", date: undefined },
        { text: "item 4", date: undefined },
        { text: "item 5", date: undefined }
      ]
    }
  }
}
</script>