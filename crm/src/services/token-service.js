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
      const token = this.getToken();
      return token !== undefined && token !== null;
    }
}

export default new TokenService();