import styled from 'styled-components';

const SignupStyle = styled.div`
  .login-form {
  max-width: 300px;
  margin-left: 10px;
  }
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
    background-color: #313332;
    color: #e3e327;
    border-color: #e3e327;
    border-radius: 1;
    &:hover {
      background-color: #42423d;
      color: #e3e327;
      border-color: #e3e327;
    }
  }

  .login-label {
    color: white;
    font-size: 25px;
  }
  .label-wrapper {
    margin-bottom: 15px;
  }
  .forgot-text {
    font-size: 12px;
    color: #85857f;
  }

  .ant-btn {
    border-radius: 20px;
  }

  .form-container {
    width: 355px;
    min-height: 325px;
    height: auto;
    border-radius: 5px;
    margin: 2% auto;
    box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
    padding: 2%;
    background-color: #181a19;
  }
  /* .ant-btn-primary:hover, .ant-btn-primary:focus {
    color: #fff;
    background-color: none;
    border-color: none;
  } */
`;

export default SignupStyle;