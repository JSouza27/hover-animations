import styled from 'styled-components';

export const CardWrapper = styled.div`
  align-items: center;
  border: 1px solid #eeecec;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  flex: 1 1 31.125rem;
  max-height: 31.125rem;
  overflow: hidden;
  width: 100%;

  &:hover {
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  }

  &:hover img {
    transform: scale(1.2);
  }

  @media (min-width: 767px) {
    flex: 1 1 22.125rem;
  }
`;

export const BgCard = styled.div`
  background-size: cover;
  height: 11.25rem;
  overflow: hidden;
  width: 100%;

  & > img {
    height: 100%;
    transition: all 1.1s;
    width: 100%;
  }
`;

export const ContentCard = styled.div`
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
`;

export const FlagCard = styled.div`
  color: #919191;
  font-size: 0.75rem;
  line-height: 21px;
  letter-spacing: 0.15px;
`;

export const TitleCard = styled.h2`
  color: black;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0.15px;
  margin-top: 0;
  margin-bottom: 8px;
`;

export const TextCard = styled.div`
  color: #909090;
  font-size: 1rem;
  line-height: 21px;
  letter-spacing: 0.15px;
`;
