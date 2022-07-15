<template>
  <TheHeader />
  <div class="login">
    <mainBlock />
    <contentBlock />
  </div>
  <TheFooter />
</template>

<script setup>
// Import components
import TheHeader from "@/components/The/TheHeader";
import TheFooter from "@/components/The/TheFooter";

import mainBlock from "@/components/page/LoginPage/mainBlock";
import contentBlock from "@/components/page/LoginPage/contentBlock";
</script>
