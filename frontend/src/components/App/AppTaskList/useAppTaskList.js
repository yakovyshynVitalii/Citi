// Imports global

import { ref } from "vue";

export default function useAppTaskList() {
  // Text change

  const isChange = ref(false);

  const startChange = () => {
    isChange.value = true;
  };

  const endChange = () => {
    isChange.value = false;
  };

  // ...

  return {
    // Text change
    isChange,
    startChange,
    endChange,
  };
}
