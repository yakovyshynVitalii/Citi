<template>
  <button
    class="btn text-2"
    :class="{ '-green': btnColor === 'green', '-red': btnColor === 'red' }"
    @click="$emit('action')"
  >
    {{ title }}
  </button>
</template>

<style>
@import "./style.css";
</style>

<script setup>
// Imports

import { defineProps, defineEmits } from "vue";

// Props

const props = defineProps({
  title: String,
  btnColor: String,
});

// Emits

const emit = defineEmits(["action"]);
</script>