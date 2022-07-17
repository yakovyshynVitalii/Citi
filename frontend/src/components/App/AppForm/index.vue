<template>
  <form @submit.prevent="onSubmit" class="form">
    <p class="text-2 form-error" v-if="formError">
      <span>
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
      </span>
      {{ formError }}
    </p>
    <AppInput
      :title="'Name'"
      :type="'text'"
      v-model="name"
      :error="nameError"
    />
    <AppInput
      :title="'Password'"
      :type="'password'"
      v-model="pass"
      :error="passError"
    />
    <AppDefaultBtn :title="'LOGIN'" />
    <a href="#" class="forgot-pass">Forgot Password</a>
    <a href="#" class="text-1">Register now</a>
  </form>
</template>

<style>
@import "./style.css";
</style>

<script setup>
// imports global
import useAppFrom from "./useAppForm";

// Imports components
import AppInput from "@/components/App/AppInput";
import AppDefaultBtn from "@/components/App/AppDefaultBtn";

// Logic

const {
  // name
  name,
  nameError,
  nameBlur,

  //pass
  pass,
  passError,
  passBlur,

  // submit
  onSubmit,
  formError,
} = useAppFrom();
</script>
