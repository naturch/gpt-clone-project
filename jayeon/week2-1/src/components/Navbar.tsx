import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #f5f7fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--main-color);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: var(--font-color);
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    color: var(--main-color);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
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
