import styled from 'styled-components';

const ArticleWrapper = styled.div`
  align-items: center;
  border: 1px solid #EEECEC;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  min-height: 18rem;
  margin-bottom: 30px;
  overflow: hidden;
  width: 100%;

  &:hover {
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.10);
  }

  &:hover img {
    transform: scale(1.2);
  }

  @media (min-width: 767px) {
    align-items: center;
    flex-direction: row;
    height: 18.125rem;
  }
`;

const BgArticle = styled.div`
  min-width: 27rem;
  max-width: 41.875rem;
  overflow: hidden;
  width: 100%;
  
  & > img {
    height: 100%;
    transition: all 1.1s;
    width: 100%;
  }

  @media (min-width: 767px) {
    height: 18.125rem;
  }
`;

const ContentArticle = styled.div`
  margin: 24px 16px 24px 25px;

  & > button {
    align-items: center;
    background-color: transparent;
    border: none;
    color: black;
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    font-weight: 800;
    line-height: 21px;
    letter-spacing: 0.15px;
    outline: none;
    margin-top: 32px;

    & > span {
      margin-right: 8px;
    }
  }

  @media (min-width: 767px) {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin: 35px 24px 35px 30px;
  }
`;

const Flag = styled.span`
  color: #919191;
  font-size: 0.75rem;
  line-height: 21px;
  letter-spacing: 0.15px;
`;

const Title = styled.h2`
  color: black;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0.15px;
  margin-top: 0;
  margin-bottom: 8px;
`;

const Text = styled.span`
  color: #909090;
  font-size: 1rem;
  line-height: 21px;
  letter-spacing: 0.15px;
`;

export {
  ArticleWrapper,
  Flag,
  Title,
  Text,
  BgArticle,
  ContentArticle,
};
