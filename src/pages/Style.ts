import styled from 'styled-components';

const HomeWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 85%;

  @media (min-width: 1024px) {
    width: 75%;
  }

  @media (min-width: 1200px) {
    max-width: 1161px;
    width: 85%;
  }
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

const ArtcleContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  @media (min-width: 767px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export {
  HomeWrapper,
  Content,
  CardContainer,
  ArtcleContainer,
};
