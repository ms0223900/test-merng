import React, { useCallback, useReducer } from 'react';
import { createContext, ReactNode } from "react";
import JwtHandlers from "../lib/Handlers/JwtHandlers";
import authActions, { AuthActions, AuthActionTypes, LoginAction } from "./authActions";

export interface User {
  username: string
  email: string
  jwtToken: string
}
export interface AuthState {
  user: User | null
}

export const getInitUser = () => {
  const checkTokenIsExpired = JwtHandlers.checkTokenIsExpired();

  if(checkTokenIsExpired) {
    JwtHandlers.removeToken();
    return null;
  } else {
    return JwtHandlers.getDecodedToken() as User;
  }
};

const initState = {
  user: getInitUser(),
};

const authReducers = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOG_IN:
      return ({
        ...state,
        user: action.payload.user,
      }); 

    case AuthActionTypes.LOG_OUT:
      return ({
        ...state,
        user: null,
      });
      
    default:
      return state;
  }
};

export const AuthContext = createContext({
  user: null as AuthState['user'],
  login: (payload: LoginAction['payload']) => {},
  logout: () => {},
});

const AuthWrapper = (props: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducers, initState);

  const handleLogin = useCallback((payload: LoginAction['payload']) => {
    JwtHandlers.setToken(payload.user.jwtToken);
    const action = authActions.login(payload);
    dispatch(action);
  }, []);

  const handleLogout = useCallback(() => {
    const action = authActions.logout();
    dispatch(action);
  }, []);

  return (
    <AuthContext.Provider value={{
      user: state.user,
      login: handleLogin,
      logout: handleLogout,
    }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthWrapper;