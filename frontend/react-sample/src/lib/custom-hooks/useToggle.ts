import { useState } from "react";
import { Callback } from "../../types";

export interface UseToggleStates {
  toggle: boolean
  setToggle: (t: boolean) => any
  handleCloseToggle: Callback
  handleToggle: Callback
}

const useToggle = (initToggle: boolean=false): UseToggleStates => {
  const [toggle, setToggle] = useState(initToggle);

  const handleToggle = () => {
    setToggle(t => !t);
  };

  const handleCloseToggle = () => {
    toggle && setToggle(false);
  };
  
  return { toggle, setToggle, handleToggle, handleCloseToggle };
};

export default useToggle;