import { Callback } from "../types";

export type RegisterInputKeys = 'username' | 'password' | 'confirmPassword' | 'email'

export interface RegisterPageProps {
  loading: boolean
  values: {
    [i in RegisterInputKeys]: string
  }
  errors: {
    [e in RegisterInputKeys]?: string
  }
  onSubmit: Callback
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
}