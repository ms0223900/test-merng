/* eslint-disable import/no-extraneous-dependencies */
import gql from 'graphql-tag';
import { ID, SingleComment } from '../../types';

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      id
      comments {
        id
        username
        createdAt
        content
      }
      commentCount
    }
  }
`;

export interface MutatedDeleteComment {
  deleteComment: {
    id: ID;
    comments: SingleComment[];
    commentCount: number;
  };
}

export default DELETE_COMMENT_MUTATION;
