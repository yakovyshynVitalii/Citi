<template>
  <div class="main-block">
    <div class="main-block__top">
      <div class="container">
        <img src="@/assets/img/logo-white.svg" alt="logo" />
      </div>
    </div>
    <div class="main-block__bottom">
      <div class="container">
        <div class="main-block__list-wrapper">
          <AppAddTask />
          <transition-group name="title">
            <div v-if="!taskList.length" class="title-box">
              <h2 class="title-1">Thank you {{ store.state.user.name }}!</h2>
              <p class="text-1">Add your first task</p>
            </div>

            <div v-else class="tasks-box">
              <h2 class="title-2">Your Tasks</h2>
              <div v-if="taskList.length">
                <transition-group name="list">
                  <AppTaskList
                    v-for="(task, index) in taskList"
                    :key="index"
                    :index="index + 1"
                    :text="task"
                    @remove="taskList.splice(index, 1)"
                  />
                </transition-group>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "./style.css";
</style>

<script setup>
// Imports global

import { computed, ref } from "vue";
import { useStore } from "vuex";

// Imports components

import AppAddTask from "@/components/App/AppAddTask";
import AppTaskList from "@/components/App/AppTaskList";

// Logic

const store = useStore();
const taskList = computed(() => store.state.user.todoList);
</script>
