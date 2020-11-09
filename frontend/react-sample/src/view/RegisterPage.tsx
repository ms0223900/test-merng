import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import getRegisterInputListData from '../static/registerInputListData';
import useRegisterPage from './functions/useRegisterPage';

const RegisterPage = () => {
  const registerPageState = useRegisterPage();
  const {
    loading, errors, onSubmit,
  } = registerPageState;

  const inputListData = getRegisterInputListData(registerPageState);

  return (
    <div className="form-container">
      <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
        <h1>Register</h1>
        {inputListData.map((input, i) => (
          <Form.Input
            key={i}
            {...input}
          />
        ))}
        <Button type="submit" primary>
          Register
        </Button>
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;