import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import LoginStyle from './loginStyle';
// import './login.css'
import 'antd/dist/antd.css';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return ( 
      <LoginStyle>
        <div className='form-container'>
          <div className='label-wrapper'>
            <label className='login-label'>LOG IN</label>
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              <a href="#" className='forgot-text'>Forgot Password?</a>
            </Form.Item>
          </Form>
        </div>
      </LoginStyle>
     );
  }
}
 
export default Form.create()(Login);