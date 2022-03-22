import React from 'react';
import { HeaderWrapper } from './style';

const Header = () => (
  <HeaderWrapper>
    <h1>Blush & Bloom</h1>
    <div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Careers</li>
      </ul>
      <button type="button">Create Account</button>
    </div>
  </HeaderWrapper>
);

export default Header;
