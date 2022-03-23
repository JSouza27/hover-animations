import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import IArticle from '../../interfaces/IArticle';
import { CardWrapper, FlagCard, BgCard, TextCard, TitleCard, ContentCard } from './style';

const Card = (props: IArticle) => {
  const { content, flag, image, title } = props;
  return (
    <CardWrapper>
      <BgCard>
        <img src={image} alt="card" />
      </BgCard>
      <ContentCard>
        <FlagCard>{flag}</FlagCard>
        <TitleCard>{title}</TitleCard>
        <TextCard>{content}</TextCard>
        <button type="button">
          <span>Read more</span>
          <HiArrowNarrowRight />
        </button>
      </ContentCard>
    </CardWrapper>
  );
};

export default Card;
