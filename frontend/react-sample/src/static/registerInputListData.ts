import { ChangeEvent } from "react";
import { RegisterPageProps } from "../view/types";

export interface SingleFormInputData {
  label: string
  placeholder: string
  name: string
  type: string
  value: string
  error: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
}

const getRegisterInputListData = ({
  values, errors, onChange,
}: RegisterPageProps): SingleFormInputData[] => ([
  {
    label: "Username",
    placeholder: "Username..",
    name: "username",
    type: "text",
    value: values.username,
    error: !!errors.username,
    onChange,
  },
  {
    label: "Password",
    placeholder: "Password..",
    name: "password",
    type: "password",
    value: values.password,
    error: !!errors.password,
    onChange,
  },
  {
    label: "Confirm Password",
    placeholder: "Confirm Password..",
    name: "confirmPassword",
    type: "password",
    value: values.confirmPassword,
    error: !!errors.confirmPassword,
    onChange,
  },
  {
    label: "Email",
    placeholder: "Email..",
    name: "email",
    type: "email",
    value: values.email,
    error: !!errors.email,
    onChange,
  }
]);

export default getRegisterInputListData;