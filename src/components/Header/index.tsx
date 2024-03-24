import React from 'react';
import * as S from './style';

export default function Header() {
  return (
    <S.HeaderWrapper>
      <h1>Blush & Bloom</h1>
      <div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Careers</li>
        </ul>
        <button type="button">Create Account</button>
      </div>
    </S.HeaderWrapper>
  );
}
