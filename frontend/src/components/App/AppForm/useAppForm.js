// Imports global

import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

// imports Field
import createNameField from "@/utils/form/createNameField";
import createPassField from "@/utils/form/createPassField";

export default function useAppForm() {
  // Logic

  const router = useRouter();
  const store = useStore();

  // Validation

  const { handleSubmit, isSubmitting, resetForm } = useForm();

  const formError = ref("");

  // Name

  const { name, nameError, nameBlur } = createNameField();

  // Pass

  const { pass, passError, passBlur } = createPassField();

  const onSubmit = handleSubmit((values) => {
    if (isSubmitting) {
      if (values.name !== store.state.user.name) {
        formError.value = "Such a user does not exist";
      } else if (values.pass !== store.state.user.pass) {
        formError.value = "The form data is not entered correctly";
      } else {
        localStorage.userLogin = true;
        router.push("/");
      }

      resetForm();
    }
  });

  // ...

  return {
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
  };
}
