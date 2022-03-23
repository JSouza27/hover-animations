import styled from 'styled-components';

const FooterWrapper = styled.div`

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-bottom: 74px;
  width: 100%;

  & > h1 {
    color: black;
    font-weight: 800;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.15px;
  }

  & > div > ul {
    margin: 0;
    padding: 0;

    & > li {
      color: black;
      font-weight: 800;
      font-size: 0.875rem;
      line-height: 21px;
      letter-spacing: 0.15px;
      margin-bottom: 15px;
      list-style: none;
      text-align: center;
    }
  }

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: flex-start;
    height: 8.25rem;

    & > h1 {
      margin-right: 8.3125rem;
    }

    & > div > ul {
      display: flex;

      & > li {
        margin-right: 35px;
      }
    }
  }
`;

export { FooterWrapper };
