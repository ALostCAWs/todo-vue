<script setup>
import LabelTextbox from './LabelTextbox.vue'
import ToggleModalButton from './ToggleModalButton.vue'
</script>

<template>
  <div class="modal-mask" @click.self="toggle">
    <div class="add-modal modal">
      <div class="modal-inputs">
        <LabelTextbox
          :label="`Item:`"
          @onUpdate="setText"
        />
        <LabelTextbox
          :label="`Date:`"
          @onUpdate="setDate"
        />
      </div>
      <ToggleModalButton
        @onToggle="create"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setText(text) {
      this.text = text;
    },
    setDate(date) {
      this.date = date;
    },
    refreshData() {
      this.setText('');
      this.setDate('');
    },
    create() {
      this.$emit('onCreate', { text: this.text });
      this.refreshData();
    },
    toggle() {
      this.$emit('onToggle');
    }
  },
  data() {
    return {
      text: '',
      date: ''
    }
  }
}
</script>

<style>
.modal-mask {
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 8000;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: #dddddd5a;
}
.modal {
  display: flex;
  flex-direction: column;
  z-index: 9000;

  width: 50%;
  height: 50%;

  margin: auto;

  background-color: #fff;
}
.modal-inputs {
  width: 100%;
  height: 70%;
}
</style>

<style scoped>
.toggle-modal {
  align-self: flex-end;

  width: 5.25%;
  height: 10%;

  margin: 20px auto;
}
</style>