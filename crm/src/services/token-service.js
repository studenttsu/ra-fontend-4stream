import jwtDecode from 'jwt-decode';
const TOKEN_KEY = 'jwtToken';

class TokenService {
    setToken(token) {
      localStorage.setItem(TOKEN_KEY, token);
    }
  
    getToken() {
      return localStorage.getItem(TOKEN_KEY);
    }
  
    removeToken() {
      localStorage.removeItem(TOKEN_KEY);
    }
  
    isTokenValid() {
      const tokenValid = (token = {}) => {
        const now = Date.now() / 1000;
        return token.exp > now;
      };
  
      const token = this.getToken();
      return token ? tokenValid(jwtDecode(token)) : false;
    }
}

export default new TokenService();