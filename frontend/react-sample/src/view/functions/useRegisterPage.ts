import { useMutation } from "@apollo/client";
import { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../constants/context";
import REGISTER_USER from "../../graphql/schemas/registerUser.schema";
import useForm from "../../lib/custom-hooks/useForm";
import { RegisterPageProps } from "../types";
import { updateLogin } from "./useLoginPage";

const initFormState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const useRegisterPage = () => {
  const history = useHistory();
  const ctx = useContext(AuthContext);
  const [errors, setErrors] = useState<RegisterPageProps['errors']>({});

  const { onChange, values } = useForm({
    initFormState,
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    variables: values,
    update: updateLogin(ctx.login, history),
    onError(err) {
      err.graphQLErrors[0].extensions &&
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    }
  });

  const handleSubmit = useCallback(() => {
    if(values.password !== values.confirmPassword) {
      setErrors(e => ({...e, confirmPassword: 'Password is not same', }));
    } else {
      addUser();
    }
  }, [addUser, values.confirmPassword, values.password]);

  return ({
    loading,
    values,
    errors,
    onSubmit: handleSubmit,
    onChange,
  });
};

export default useRegisterPage;