<template>
  <div class="add-task-block">
    <div class="add-task-block__input-box">
      <AppInput
        :type="'text'"
        :title="'Your task'"
        v-model="newTask"
        @keydown.enter="addNewTask"
      />
    </div>
    <div class="add-task-block__btn-box">
      <AppDefaultBtn :title="'Add new task'" @action="addNewTask" />
    </div>
  </div>
</template>

<style>
@import "./style.css";
</style>

<script setup>
// Imports global

import { ref } from "vue";
import { useStore } from "vuex";

// Import components
import AppInput from "@/components/App/AppInput";
import AppDefaultBtn from "@/components/App/AppDefaultBtn";

// Logic

const store = useStore();
const newTask = ref("");

const addNewTask = () => {
  if (newTask.value !== "") {
    store.state.user.todoList.push(newTask.value);
    newTask.value = "";
  }
};
</script>
