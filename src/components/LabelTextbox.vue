<template>
  <div class="label-textbox-container">
    <p>{{label}}</p>
    <input type="text">
  </div>
</template>

<script>
export default {
  props: {
    label: { required: true }
  }
}
</script>

<style>
.label-textbox-container {
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  align-items: center;

  margin-top: 3%;
  margin-left: 1%;

  width: 35%;
  height: 15%;
}
</style>