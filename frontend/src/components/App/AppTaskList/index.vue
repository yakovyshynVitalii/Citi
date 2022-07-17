<template>
  <div class="task">
    <div class="task__info-box">
      <div class="task-index">
        <p class="text-2">{{ index }}</p>
      </div>
      <div class="task-content" v-if="!isChange">
        <p class="text-2">{{ text }}</p>
      </div>
      <div class="task-content" v-else>
        <AppInput :type="'text'" v-model="text" />
      </div>
    </div>
    <div class="task__btn-box">
      <AppDefaultBtn v-if="!isChange" :title="'Change'" @action="startChange" />
      <AppDefaultBtn
        v-else
        :title="'Change'"
        :btnColor="'green'"
        @action="endChange"
      />
      <AppDefaultBtn
        :title="'Remove'"
        :btnColor="'red'"
        @action="$emit('remove')"
      />
    </div>
  </div>
</template>

<style>
@import "./style.css";
</style>

<script setup>
// imports global

import { defineProps, defineEmits } from "vue";
import useAppTaskList from "./useAppTaskList.js";

// Imports components

import AppDefaultBtn from "@/components/App/AppDefaultBtn";
import AppInput from "@/components/App/AppInput";

// Props

const props = defineProps({
  index: Number,
  text: String,
});

// Emits

const emit = defineEmits(["remove"]);

// Logic

const {
  // Text change
  isChange,
  startChange,
  endChange,
} = useAppTaskList();
</script>
