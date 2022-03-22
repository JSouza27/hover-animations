import styled from 'styled-components';

const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 5rem;
  position: fixed;
  top: 0;
  width: 80%;

  & > h1 {
    font-weight: 800;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.15px;
  }

  & > div {
    display: flex;
  }

  & > div > ul {
    display: none;
  }

  & > div > button {
    background-color: #1E1E1E;
    border: none;
    border-radius: 8px;
    color: white;
    font-weight: 800;
    font-size: 1rem;
    height: 2.875rem;
    line-height: 1.5rem;
    letter-spacing: 0.15px;
    outline: none;
    text-align: center;
    width: 10.56rem;
  }

  & > button:hover {
    background-color: #373737;
  }

  & > button:active {
    border: 2px solid black;
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
        margin: 0 32px;
      }

      & > li:hover {
        border-bottom: 3px solid #327AF9;
      }
    }
  }
`;

export {
  HeaderWrapper,
};
