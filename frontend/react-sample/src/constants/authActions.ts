import { User } from "./context";

export enum AuthActionTypes {
  'LOG_IN',
  'LOG_OUT'
}

export interface LoginAction {
  type: AuthActionTypes.LOG_IN
  payload: { user: User }
}
export interface LogoutAction {
  type: AuthActionTypes.LOG_OUT
}

const login = (payload: { user: User }): LoginAction => ({
  type: AuthActionTypes.LOG_IN,
  payload,
});
const logout = (): LogoutAction => ({
  type: AuthActionTypes.LOG_OUT,
});

const authActions = {
  login,
  logout,
};
export default authActions;

export type AuthActions = 
  LoginAction |
  LogoutAction