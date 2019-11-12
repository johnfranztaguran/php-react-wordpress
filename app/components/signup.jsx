import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import SignupStyle from './style-components/signupStyle';
import WPRequest from './endpoints/request';

const wp_req = new WPRequest();

class SignUp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      useremail: '',
      password: '',
      confirmpassword: ''
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { useremail, username, password, confirmpassword } = this.state;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if (username && useremail && password === confirmpassword) {
          this.handleRegistrationRequest();
        }
      }
    });
  };

  handleRegistrationRequest = async () => {
    const { useremail, username, password } = this.state;
    try {
      await wp_req.userRegistration(username, useremail, password);
    } catch (err) {
      console.log('Error: ', err);
    }
  }

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { username, useremail, password, confirmpassword } = this.state;
    return ( 
      <SignupStyle>
        <div className='form-container'>
          <div className='label-wrapper'>
            <label className='login-label'>SIGN UPs</label>
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="User Name"
                  type='text'
                  name='username'
                  onChange={this.onChange}
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('useremail', {
                rules: [{ required: true, message: 'Please input your user email!' }],
                initialValue: useremail
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="User Email"
                  type='text'
                  name='useremail'
                  onChange={this.onChange}
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
                initialValue: password
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                  name='password'
                  onChange={this.onChange}
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('confirmpassword', {
                rules: [{ required: true, message: 'Please input your Password!' }],
                initialValue: confirmpassword
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Confirm Password"
                  name='confirmpassword'
                  onChange={this.onChange}
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                disabled={!username || !useremail || !password || !confirmpassword || password !== confirmpassword}
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </SignupStyle>
     );
  }
}
 
export default Form.create()(SignUp);