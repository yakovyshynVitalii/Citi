<template>
  <div class="input-block">
    <label class="text-2" :for="inputId">{{ title }}</label>
    <input
      :class="{
        '-error': error,
      }"
      :id="inputId"
      :type="type"
      :value="modelValue"
      @input="change($event)"
    />
    <p class="text-2 error-message" v-if="error">
      <svg
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 1.29622L9.70378 0L5.49999 4.20377L1.29622 0L0 1.29622L4.20377 5.49999L0 9.70378L1.29622 11L5.49999 6.79623L9.70375 11L11 9.70378L6.79623 5.49999L11 1.29622Z"
          fill="#D60000"
        />
      </svg>
      {{ error }}
    </p>
  </div>
</template>

<style>
@import "./style.css";
</style>

<script setup>
// Imports

import { defineProps, defineEmits } from "vue";

// Props

const props = defineProps({
  modelValue: String,
  type: {
    type: String,
    required: true,
    validator(value) {
      // The value must match one of these strings
      return ["text", "password"].includes(value);
    },
  },
  error: String,
  title: String,
});

// Emits

const emits = defineEmits(["update:modelValue"]);

// Logic

const inputId = `input-${Math.random()}`;

const change = (e) => {
  emits("update:modelValue", e.target.value);
};
</script>
