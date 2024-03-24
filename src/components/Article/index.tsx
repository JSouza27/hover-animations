import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import IArticle from '../../interfaces/IArticle';
import * as S from './style';

export default function Article(props: IArticle) {
  const { flag, title, content, image } = props;

  return (
    <S.ArticleWrapper>
      <S.BgArticle>
        <img src={image} alt="article" />
      </S.BgArticle>
      <S.ContentArticle>
        <S.Flag>{flag}</S.Flag>
        <S.Title>{title}</S.Title>
        <S.Text>{content}</S.Text>
        <button type="button">
          <span>Read more</span>
          <HiArrowNarrowRight />
        </button>
      </S.ContentArticle>
    </S.ArticleWrapper>
  );
}
