import { gql } from "@apollo/client";

const DELETE_POST = gql`
  mutation deletePost($postId: String!) {
    deletePost(postId: $postId)
  }
`;

export default DELETE_POST;