/* eslint-disable @typescript-eslint/no-redeclare */
import { useCallback, useState } from "react";
import { Callback } from "../../types";

export interface UseFormOptions<FormState extends { [x: string]: any }> {
  initFormState: FormState
  onSubmitCallback?: Callback
}
export interface UseFormResult<FormState extends { [x: string]: any }> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any,
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => any,
  values: FormState,
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

  const handleSetValue = useCallback((name: keyof FormState) => (value: string) => {
    setValues(_values => ({ ..._values, [name]: value }));
  }, []);

  return {
    onChange,
    onSubmit,
    handleSetValue,
    values,
  };
};

export default useForm;