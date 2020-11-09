import { gql } from "@apollo/client";
import { User } from "../../constants/context";

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export interface MutatedLoginUser {
  login: User
}

export default LOGIN_USER;