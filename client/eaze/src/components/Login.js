import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2e2f31;
  color: white;
`;

const LoginForm = styled.form`
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

function Login() {
  return (
    <LoginContainer>
      <h2>Login to Eaze</h2>
      <LoginForm>
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Button type="submit">Login</Button>
      </LoginForm>
      <BackLink to="/LandingPage">Back to Home</BackLink>
    </LoginContainer>
  );
}

export default Login;

