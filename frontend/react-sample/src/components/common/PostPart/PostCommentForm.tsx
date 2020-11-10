import React from 'react';
import { Card, Form } from 'semantic-ui-react';
import { PostCommentFormProps } from './types';

const PostCommentForm = ({
  commentInputRef, commentValue, onChange, onSubmit
}: PostCommentFormProps) => {
  const isCommentEmpty = commentValue.trim() === '';
  
  return (
    <Card fluid>
      <Card.Content>
        <h5>{'Post a comment'}</h5>
        <Form>
          <div className="ui action input fluid">
            <input
              type="text"
              placeholder="Comment.."
              name="comment"
              value={commentValue}
              onChange={onChange}
              ref={commentInputRef}
            />
            <button
              type="submit"
              className="ui button teal"
              disabled={isCommentEmpty}
              onClick={onSubmit}
            >
              {'Submit'}
            </button>
          </div>
        </Form>
      </Card.Content>
    </Card>
  );
};

export default PostCommentForm;