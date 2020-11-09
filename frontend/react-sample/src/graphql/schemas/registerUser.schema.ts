import { gql } from "@apollo/client";

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default REGISTER_USER;