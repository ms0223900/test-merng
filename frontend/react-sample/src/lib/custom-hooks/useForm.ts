/* eslint-disable @typescript-eslint/no-redeclare */
import { useState } from "react";
import { Callback } from "../../types";

export interface UseFormOptions<FormState extends { [x: string]: any }> {
  initFormState: FormState
  onSubmitCallback?: Callback
}

function useForm<FormState extends { [x: string]: any }>({
  initFormState,
  onSubmitCallback,
}: UseFormOptions<FormState>) {
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