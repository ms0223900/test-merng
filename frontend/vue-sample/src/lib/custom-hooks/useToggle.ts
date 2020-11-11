import { ref, watch, watchEffect } from 'vue';

const useToggle = (initToggle = false) => {
  const toggleVal = ref(initToggle);

  const handleToggle = () => {
    toggleVal.value = !toggleVal.value;
  };

  const setToggle = (toggle: boolean) => {
    toggleVal.value = toggle;
  };

  watch(toggleVal, () => {
    console.log(toggleVal.value);
  });

  return ({
    toggle: toggleVal,
    setToggle,
    handleToggle,
  });
};

export default useToggle;
