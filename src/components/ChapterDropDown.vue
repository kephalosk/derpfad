<template>
  <div>
    <select :value="selected" id="options" @change="handleChange">
      <slot></slot>
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['optionSelected']);
const props = defineProps({
  selected: {
    required: true,
    type: String
  },
  defaultValue: {
    required: true,
    type: String
  },
});

const handleChange = (event: MouseEvent) => {
  const target = event.target as HTMLSelectElement;
  const selectedOption = (target && target.value) ? target.value : props.defaultValue;
  emit('optionSelected', selectedOption);
};
</script>

<style scoped>
div {
  position: relative;
  display: inline-block;
}

select {
  appearance: none;
  background: linear-gradient(to bottom right, #31ffff, #ffffff);
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 15px 0px;
  padding: 15px 30px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #24BABA; /* Dark blue text */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  width: 100%;
  outline: none;
}

select:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

select:focus {
  box-shadow: 0 0 0 3px rgba(49, 216, 230, 0.5);
}

select::after {
  content: '';
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000066; /* Dark blue arrow */
  pointer-events: none;
}

div::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 15px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000066; /* Dark blue arrow */
  pointer-events: none;
  transform: translateY(-50%);
}
</style>
