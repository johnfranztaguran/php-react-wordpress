import axios from 'axios';

const BaseUrl = 'http://localhost:8080/buysellrace/wp-json';

class WPRequest {

  userRegistration = async (username, email, password) => {
    try {
      await axios.post(`${BaseUrl}wp/v2/users/register`, {
        username,
        email,
        password
      },
      {
        headers: {
          'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODA4MFwvYnV5c2VsbHJhY2UiLCJpYXQiOjE1NzM0NjAwNTIsIm5iZiI6MTU3MzQ2MDA1MiwiZXhwIjoxNTc0MDY0ODUyLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxMTEifX19.9kB_xXi-zjLGRHKYC4wP7n1njLLBB_mKcpwIWd3lGDo`
        }
      }
      );
    } catch (err) {
      console.error('Error: ', err)
    }
  }

}

export default WPRequest;
