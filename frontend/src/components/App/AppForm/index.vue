<template>
  <form @submit.prevent="" class="form">
    <AppInput :title="'Name'" :type="'text'" />
    <AppInput :title="'Password'" :type="'password'" />
    <AppDefaultBtn :title="'LOGIN'" />
    <a href="#" class="forgot-pass">Forgot Password</a>
    <a href="#" class="text-1">Register now</a>
  </form>
</template>

<style>
@import "./style.css";
</style>

<script setup>
import AppInput from "@/components/App/AppInput";
import AppDefaultBtn from "@/components/App/AppDefaultBtn";
</script>
