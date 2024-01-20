<template>
  <button type="button" @click="onClickButton">My Comp</button>
</template>

<script>
export default {
  methods: {
    onClickButton(e) {
      this.$emit('clicked', 'myVal');
    }
  }
}
</script>