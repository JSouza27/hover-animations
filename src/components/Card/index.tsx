import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import IArticle from '../../interfaces/IArticle';
import * as S from './style';

export default function Card(props: IArticle) {
  const { content, flag, image, title } = props;

  return (
    <S.CardWrapper>
      <S.BgCard>
        <img src={image} alt="card" />
      </S.BgCard>
      <S.ContentCard>
        <S.FlagCard>{flag}</S.FlagCard>
        <S.TitleCard>{title}</S.TitleCard>
        <S.TextCard>{content}</S.TextCard>
        <button type="button">
          <span>Read more</span>
          <HiArrowNarrowRight />
        </button>
      </S.ContentCard>
    </S.CardWrapper>
  );
}
