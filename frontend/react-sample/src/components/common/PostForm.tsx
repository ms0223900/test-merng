import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { PostFormProps } from './types';

const ErrorMessage = ({
  message
}: { message: string}) => (
  <div className="ui error message" style={{ marginBottom: 20 }}>
    <ul className="list">
      <li>{message}</li>
    </ul>
  </div>
);

const PostForm = ({
  error,
  inputValue,
  onChange,
  onSubmit,
}: PostFormProps) => {
  return (
    <>
      <Form onSubmit={onSubmit}>
        <h2>Create a post:</h2>
        <Form.Field>
          <Form.Input
            placeholder="Hi World!"
            name="body"
            onChange={onChange}
            value={inputValue}
            error={error ? true : false}
          />
          <Button type="submit" color="teal">
            Submit
          </Button>
        </Form.Field>
      </Form>
      {error && (
        <ErrorMessage 
          message={error.graphQLErrors[0].message} 
        />
      )}
    </>
  );
};

export default PostForm;