import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
import DeleteButtonContainer from '../../containers/common/DeleteButtonContainer';
import LikeButtonContainer from '../../containers/common/LikeButtonContainer';
import DeleteButton from './DeleteButton';
import LikeButton from './LikeButton';
import MyPopupWrapper from './MyPopupWrapper';
import { PostCardItemProps } from './types';

const PostCardItem = ({
  user,
  post
}: PostCardItemProps) => {
  const { 
    content, createdAt, id, username, likeCount, commentCount, likes 
  } = post;
  const createdAtTime = moment(createdAt).fromNow(true);
  const isThisUser = user && user.username === username;

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {createdAtTime}
        </Card.Meta>
        <Card.Description>{content}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <LikeButtonContainer user={user} post={post} />
        <MyPopupWrapper content="Comment on post">
          <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
            <Button color="blue" basic>
              <Icon name="comments" />
            </Button>
            <Label basic color="blue" pointing="left">
              {commentCount}
            </Label>
          </Button>
        </MyPopupWrapper>
        {isThisUser && (
          <DeleteButtonContainer postId={id} />
        )}
      </Card.Content>
    </Card>
  );
};

export default PostCardItem;