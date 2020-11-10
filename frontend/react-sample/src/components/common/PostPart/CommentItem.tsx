import React from 'react';
import moment from 'moment';
import { Card } from 'semantic-ui-react';
import DeleteButtonContainer from '../../../containers/common/DeleteButtonContainer';
import { CommentItemProps } from './types';

const CommentItem = ({
  isThisUserComment, postId, comment,
}: CommentItemProps) => {
  
  return (
    <Card fluid key={comment.id}>
      <Card.Content>
        {isThisUserComment && (
          <DeleteButtonContainer postId={postId} commentId={comment.id} />
        )}
        <Card.Header>{comment.username}</Card.Header>
        <Card.Meta>{moment(comment.createdAt).fromNow()}</Card.Meta>
        <Card.Description>{comment.content}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CommentItem;