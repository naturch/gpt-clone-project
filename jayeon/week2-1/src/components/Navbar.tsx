import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #f0f4f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: #6c63ff;
`;

const Menu = styled.div`
  display: flex;
  gap: 24px;
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    color: #6c63ff;
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Logo>🐶Dog Story</Logo>
      <Menu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/my-pup">My Pup</MenuItem>
        <MenuItem to="/community">Community</MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;
