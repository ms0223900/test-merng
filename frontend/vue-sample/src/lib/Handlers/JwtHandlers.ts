import jwtDecode from 'jwt-decode';

const JwtHandlers = {
  jwtTokenKey: 'jwtToken',

  checkTokenIsExpired() {
    const decodedToken = this.getDecodedToken() as any;
    const res = decodedToken.exp * 1000 < Date.now();
    return res;
  },

  getToken() {
    return localStorage.getItem(this.jwtTokenKey) || '';
  },

  removeToken() {
    localStorage.removeItem(this.jwtTokenKey);
  },

  setToken(token: string) {
    localStorage.setItem(this.jwtTokenKey, token);
  },

  getDecodedToken() {
    const token = this.getToken();
    return jwtDecode(token);
  },
};

export default JwtHandlers;
