import { gql } from "@apollo/client";
import { ID, SingleComment } from "../../types";

const CREATE_COMMENT = gql`
  mutation($postId: String!, $content: String!) {
    createComment(postId: $postId, content: $content) {
      id
      comments {
        id
        content
        createdAt
        username
      }
      commentCount
    }
  }
`;

export interface MutatedCreateComment {
  createComment: {
    id: ID
    comments: SingleComment
    commentCount: number
  }
}

export default CREATE_COMMENT;