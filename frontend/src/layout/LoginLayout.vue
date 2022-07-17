<template>
  <TheHeader />
  <main>
    <router-view />
  </main>
  <TheFooter />
</template>

<script setup>
// Import components

import TheHeader from "@/components/The/TheHeader";
import TheFooter from "@/components/The/TheFooter";
</script>
