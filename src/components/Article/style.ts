import styled from 'styled-components';

const ArticleWrapper = styled.div`
  border: 1px solid #EEECEC;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 18rem;
  width: 100%;

  & > img {
    max-width: 41.875rem;
    width: 100%;
  }

  & > div {
    margin: 15px 4px 15px 10px;

    & > button {
      align-items: center;
      background-color: transparent;
      border: none;
      color: black;
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
  }

  @media (min-width: 767px) {
    align-items: center;
    flex-direction: row;
    max-height: 18.125rem;

    & > div {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      margin: 35px 24px 35px 30px;
    }
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
};
