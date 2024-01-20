<template>
  <div class="label-textbox-container">
    <p>Label</p>
    <input type="text">
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDone: this.done
    }
  },
  props: {
    label: { required: true }
  }
}
</script>

<style>
.label-textbox-container {
  display: flex;
  flex-direction: row;

  border: thin solid black;
}
</style>