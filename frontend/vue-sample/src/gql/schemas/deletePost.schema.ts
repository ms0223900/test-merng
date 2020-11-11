/* eslint-disable import/no-extraneous-dependencies */
import gql from 'graphql-tag';

const DELETE_POST = gql`
  mutation deletePost($postId: String!) {
    deletePost(postId: $postId)
  }
`;

export default DELETE_POST;
