import { User } from '@/types';
import JwtHandlers from '../Handlers/JwtHandlers';

const getInitUser = () => {
  if (!JwtHandlers.getToken()) {
    return null;
  }
  const checkTokenIsExpired = JwtHandlers.checkTokenIsExpired();
  if (checkTokenIsExpired) {
    JwtHandlers.removeToken();
    return null;
  }
  return JwtHandlers.getDecodedToken() as User;
};

export default getInitUser;
