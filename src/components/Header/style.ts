import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 5rem;
  width: 100%;

  & > h1 {
    font-weight: 800;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.15px;
  }

  & > div {
    align-items: center;
    display: flex;
    height: 100%;
  }

  & > div > ul {
    display: none;
  }

  & > div > button {
    background-color: #1e1e1e;
    border: none;
    border-radius: 8px;
    color: white;
    font-weight: 800;
    font-size: 1rem;
    height: 2.875rem;
    line-height: 1.5rem;
    letter-spacing: 0.15px;
    margin-left: 16px;
    outline: none;
    text-align: center;
    transition: all 700ms;
    width: 10.56rem;

    &:hover {
      background-color: #373737;
    }

    &:active {
      border: 2px solid black;
    }
  }

  @media (min-width: 767px) {
    & > div > ul {
      display: flex;
      list-style: none;

      & > li {
        color: #435565;
        cursor: pointer;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.5rem;
        margin: 0 16px;
      }

      & > li:hover {
        border-bottom: 3px solid #327af9;
      }
    }
  }
`;
