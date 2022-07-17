import { useField } from "vee-validate";
import * as yup from "yup";

export default function createPassField() {
  const {
    value: pass,
    errorMessage: passError,
    handleBlur: passBlur,
  } = useField(
    "pass",
    yup
      .string()
      .trim()
      .min(5, "Minimum 5 symbol")
      .required(`The field is mandatory`)
  );

  //...

  return {
    pass,
    passError,
    passBlur,
  };
}
