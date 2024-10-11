import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2e2f31;
  color: white;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: none;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #a436f0;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;

const BackLink = styled(Link)`
  color: #a436f0;
  margin-top: 20px;
  text-decoration: none;
`;

function Register() {
  return (
    <RegisterContainer>
      <h2>Register for Eaze</h2>
      <RegisterForm>
        <Input type="text" placeholder="Full Name" required id='name' />
        <Input type="email" placeholder="Email" required id='email'/>
        <Input type="password" placeholder="Password" required id='password'/>
        <Button type="submit">Sign Up</Button>
      </RegisterForm>
      <BackLink to="/LandingPage">Back to Home</BackLink>
    </RegisterContainer>
  );
}

export default Register;
