import React, { useMemo } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import CommentItem from './CommentItem';
import PostCommentForm from './PostCommentForm';
import PostContent from './PostContent';
import { PostPartProps } from './types';

const AvatarImage = () => (
  <Image
    src="https://react.semantic-ui.com/images/avatar/large/molly.png"
    size="small"
    float="right"
  />
);

const PostItem = (props: PostPartProps) => {
  const {
    user, post: { id: postId, comments, username: postUsername },
  } = props;

  const isThisUser = useMemo(() => (
    !!(user && user.username === postUsername)
  ), [postUsername, user]);

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={2}>
          <AvatarImage />
        </Grid.Column>
        <Grid.Column width={10}>
          <PostContent {...props} isThisUser={isThisUser} onDeleteCallback={props.onDeleteCallback} />
          {user && (
            <PostCommentForm {...props} />
          )}
          {comments.map((c, i) => {
            const isThisUserComment = !!(user && user.username === c.username);
            return (
              <CommentItem 
                key={i}
                isThisUserComment={isThisUserComment}
                postId={postId}
                comment={c}
              />
            );
          })}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default PostItem;