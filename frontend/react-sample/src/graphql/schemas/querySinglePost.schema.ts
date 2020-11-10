import { gql } from "@apollo/client";
import { SinglePost } from "../../types";

const QUERY_SINGLE_POST = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      id
      content
      createdAt
      username
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

export interface QueriedSinglePost {
  getPost: SinglePost
}

export default QUERY_SINGLE_POST;