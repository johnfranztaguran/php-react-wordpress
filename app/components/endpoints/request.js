import Cookies from 'universal-cookie';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const cookies = new Cookies();

class Auth {
  get token() {
    const jwt = cookies.get('ortoken', { path: '/' });
    if (jwt && jwtDecode(jwt).exp > (Date.now() / 1000)) {
      return jwt;
    }

    jwt && cookies.remove('ortoken', { path: '/' });
    return undefined;
  };

  get currentUser  () {
    const jwt = cookies.get('ortoken', { path: '/' });
    if (jwt) {
      const { exp, iat, ...user } = jwtDecode(jwt);
      if (exp > (Date.now() / 1000)) {
        return user;
      }
      cookies.remove('ortoken', { path: '/' });
      return undefined;
    }
    return undefined;
  };
}

export default Auth;