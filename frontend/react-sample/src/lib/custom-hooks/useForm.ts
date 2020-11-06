import { useState } from "react";
import { Callback } from "../../types";

export interface UseFormOptions {
  initFormState?: object
  onSubmitCallback?: Callback
}

const useForm = ({
  initFormState={},
  onSubmitCallback,
}: UseFormOptions) => {
  const [values, setValues] = useState(initFormState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitCallback && onSubmitCallback();
  };

  return {
    onChange,
    onSubmit,
    values
  };
};

export default useForm;