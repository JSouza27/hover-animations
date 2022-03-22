import styled from 'styled-components';

const HomeWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 85%;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  margin-bottom: 32px;
  max-width: 30em;
  width: 100%;

  & > img {
    width: 7.25rem;
  }

  & > h1 {
    font-weight: 800;
    font-size: 2rem;
    line-height: 36px;
    letter-spacing: 0.15px;
    margin: 8px 0;
    text-align: center;
  }

  & > span {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 21px;
    letter-spacing: 0.15px;
    text-align: center;
  }
`;

export {
  HomeWrapper,
  Content,
};
