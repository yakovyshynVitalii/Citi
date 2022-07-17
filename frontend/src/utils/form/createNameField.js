import { useField } from "vee-validate";
import * as yup from "yup";

export default function createNameField() {
  const {
    value: name,
    errorMessage: nameError,
    handleBlur: nameBlur,
  } = useField(
    "name",
    yup
      .string()
      .trim()
      .min(3, "Minimum 3 symbol")
      .required(`The field is mandatory`)
  );

  //...

  return {
    name,
    nameError,
    nameBlur,
  };
}
