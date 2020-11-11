/* eslint-disable import/no-extraneous-dependencies */
import gql from 'graphql-tag';
import { SinglePost } from '../../types';

const CREATE_POST = gql`
  mutation createPost($content: String!) {
    createPost(content: $content) {
      id
      content
      createdAt
      username
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        id
        content
        username
        createdAt
      }
      commentCount
    }
  }
`;

export interface MutatedCreatePost {
  createPost: SinglePost;
}

export default CREATE_POST;
