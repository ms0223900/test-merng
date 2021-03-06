/* eslint-disable import/no-extraneous-dependencies */
import gql from 'graphql-tag';
import { SinglePost } from '../../types';

const QUERY_POSTS = gql`
  {
    getPosts {
      id
      createdAt
      username
      content
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        content
      }
    }
  }
`;

export interface QueriedPosts {
  getPosts: SinglePost[];
}

export default QUERY_POSTS;
