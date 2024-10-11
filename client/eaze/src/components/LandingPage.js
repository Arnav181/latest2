import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LandingContainer = styled.div`
  background-color: #2e2f31;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background-color: #a436f0;
  align-items: center;
  padding-right:15px ;
    padding-left: 15px;
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const NavButtons = styled.div`
  & > a {
    background-color: #2e2f31;
    padding: 10px ;
    border-radius: 5px;
    
    color: white;
    text-decoration: none;
    margin-left: 15px;
  }
`;

const Content = styled.div`
  text-align: center;
  padding: 50px;
`;

const Footer = styled.footer`
  background-color: #2e2f31;
  padding: 20px;
  text-align: center;
  color: white;
`;

function LandingPage() {
  return (
    <LandingContainer>
      <Navbar>
        <Logo>Eaze</Logo>
        <NavButtons>
          <Link to="/Login">Login</Link>
          <Link to="/Register">Sign Up</Link>
        </NavButtons>
      </Navbar>
      <Content>
        <h1>Welcome to Eaze</h1>
        <p>Your one-stop solution for managing learning efficiently.</p>
        <p>Sign up today and join a vibrant learning community!</p>
      </Content>
      <Footer>&copy; 2024 Eaze. All rights reserved.</Footer>
    </LandingContainer>
  );
}

export default LandingPage;
