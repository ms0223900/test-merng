import React from 'react';
import moment from 'moment';
import { Button, Card, Icon, Label } from 'semantic-ui-react';
import LikeButtonContainer from '../../../containers/common/LikeButtonContainer';
import MyPopupWrapper from '../MyPopupWrapper';
import DeleteButtonContainer from '../../../containers/common/DeleteButtonContainer';
import { PostContentProps } from './types';

const PostContent = ({
  isThisUser, user, post, onDeleteCallback
}: PostContentProps) => {
  const {
    id: postId,
    username,
    createdAt,
    content,
    commentCount,
  } = post;

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{username}</Card.Header>
        <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
        <Card.Description>{content}</Card.Description>
      </Card.Content>
      <hr />
      <Card.Content extra>
        <LikeButtonContainer user={user} post={post} />
        <MyPopupWrapper content="Comment on post">
          <Button
            as="div"
            labelPosition="right"
            onClick={() => console.log('Comment on post')}
          >
            <Button basic color="blue">
              <Icon name="comments" />
            </Button>
            <Label basic color="blue" pointing="left">
              {commentCount}
            </Label>
          </Button>
        </MyPopupWrapper>
        {isThisUser && (
          <DeleteButtonContainer 
            postId={postId} 
            onDeleteCallback={onDeleteCallback} 
          />
        )}
      </Card.Content>
    </Card>
  );
};

export default PostContent;