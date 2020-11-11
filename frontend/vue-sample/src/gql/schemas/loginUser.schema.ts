/* eslint-disable import/no-extraneous-dependencies */
import gql from 'graphql-tag';
import { User } from '../../constants/context';

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
  login: User;
}

export default LOGIN_USER;
