import React from 'react';
import PropTypes from 'prop-types';
// import ContactForm from '../components/contactForm';
import Login from '../components/login';
import Signup from '../components/signup';

export const Shortcode = ({ wpObject }) => {
  return (
    <div>
      {/* <h1>{wpObject.title}</h1> */}
      {/* <ContactForm wpObject={this.props.wpObject} /> */}
      <Login />
    </div>
  );
}

export const SCSignUp = () => {
  return (
    <Signup />
  )
}

Shortcode.propTypes = {
  wpObject: PropTypes.object
};