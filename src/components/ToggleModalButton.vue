<template>
  <button type="button" class="toggle-modal" @click="toggleModal">Add</button>
</template>

<script>
export default {
  props: {
    toggleModal: { required: true }
  },
  data() {
    return {
      isDone: this.done
    }
  }
}
</script>