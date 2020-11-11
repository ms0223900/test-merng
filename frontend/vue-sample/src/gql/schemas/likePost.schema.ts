import { gql } from "graphql-tag";
import { ID } from "../../types";

const LIKE_POST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes {
        id
        username
      }
      likeCount
    }
  }
`;

export interface MutatedLikePost {
  likePost: {
    id: ID
    likes: {
      id: ID
      username: string
    }
    likeCount: number
  }
}

export default LIKE_POST;