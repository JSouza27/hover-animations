import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import IArticle from '../../interfaces/IArticle';
import { ArticleWrapper, BgArticle, ContentArticle, Flag, Text, Title } from './style';


const Article = (props: IArticle) => {
  const { flag, title, content, image } = props;

  return (
    <ArticleWrapper>
      <BgArticle>
        <img src={image} alt="article" />
      </BgArticle>
      <ContentArticle>
        <Flag>{flag}</Flag>
        <Title>{title}</Title>
        <Text>{content}</Text>
        <button type="button">
          <span>Read more</span>
          <HiArrowNarrowRight />
        </button>
      </ContentArticle>
    </ArticleWrapper>
  );
};

export default Article;
