<script setup>
import ListItem from './ListItem.vue'
</script>

<template>
  <div class="list-container">
    <ListItem
      v-for="(item, index) in list"
      :key="index"
      :index="index"
      :item="item"
      @clicked="toggleSelectItem"
    />
  </div>
</template>

<script>
export default {
  props: {
    list: { required: true },
    toggleSelectItem: { required: true }
  },
  methods: {
    onChk(e) {
      this.$emit('clicked', true);
    }
  },
  data() {
    return {
      isDone: this.done
    }
  }
}
</script>