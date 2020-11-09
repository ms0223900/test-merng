import { useMutation } from "@apollo/client";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { LoginAction } from "../../constants/authActions";
import { AuthContext } from "../../constants/context";
import LOGIN_USER, { MutatedLoginUser } from "../../graphql/schemas/loginUser.schema";
import useForm from "../../lib/custom-hooks/useForm";

const initFormState = {
  username: '',
  password: '',
};

export const updateLogin = (login: (payload: LoginAction['payload']) => any, history: any) => (_: any, result: any) => {
  login({ user: result.data.login });
  history.push('/');
};

export const useLoginPage = () => {
  const history = useHistory();
  const [errors, setErrors] = useState<{ username?: string, password?: string }>({});

  const ctx = useContext(AuthContext);
  const {
    values,
    onChange,
  } = useForm({
    initFormState,
  });

  const [loginUser, { loading }] = useMutation<MutatedLoginUser>(LOGIN_USER, {
    update: updateLogin(ctx.login, history),
    onError(err) {
      err.graphQLErrors[0].extensions && 
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function handleSubmit() {
    loginUser();
  }

  return ({
    loading,
    values,
    errors,
    onChange,
    onSubmit: handleSubmit,
  });
};