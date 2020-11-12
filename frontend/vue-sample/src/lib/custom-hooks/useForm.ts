/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from 'vue';
import { Callback } from '@/types';

export interface UseFormOptions<FormState extends { [x: string]: any }> {
  initFormState: FormState;
  onSubmitCallback?: Callback;
}
export interface UseFormResult<FormState extends { [x: string]: any }> {
  onChange: (event: any) => any;
  onSubmit: (event: any) => any;
  values: FormState;
}

function useForm<FormState extends { [x: string]: any }>({
  initFormState,
  onSubmitCallback,
}: UseFormOptions<FormState>) {
  const formValues = ref(initFormState);

  const onChange = (event: any) => {
    formValues.value = { ...formValues.value, [event.target.name]: event.target.value };
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    if (onSubmitCallback) onSubmitCallback();
  };

  const handleSetValue = (name: keyof FormState) => (value: string) => {
    formValues.value = { ...formValues.value, [name]: value };
  };

  return {
    onChange,
    onSubmit,
    handleSetValue,
    formValues,
  };
}

export default useForm;
