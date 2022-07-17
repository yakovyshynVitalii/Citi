<template>
  <component :is="layout"></component>
</template>

<script setup>
// import global
import { useRoute } from "vue-router";
import { computed } from "vue";
import useLogin from "@/utils/useLogin.js";

// Import components

import MainLayout from "@/layout/MainLayout";
import LoginLayout from "@/layout/LoginLayout";

// Logic

if (!localStorage.userLogin) {
  useLogin();
}

const route = useRoute();

const layout = computed(() => {
  if (route.meta.layout === "main") {
    return MainLayout;
  }
  if (route.meta.layout === "login") {
    return LoginLayout;
  }
});
</script>
