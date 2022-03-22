import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { ArticleWrapper, Flag, Text, Title } from './style';

interface IArticle {
  flag: string;
  title: string;
  content: string;
  image: string;
}

const Article = (props: IArticle) => {
  const { flag, title, content, image } = props;

  return (
    <ArticleWrapper>
      <img src={image} alt="article" />
      <div>
        <Flag>{flag}</Flag>
        <Title>{title}</Title>
        <Text>{content}</Text>
        <button type="button">
          <span>Read more</span>
          <HiArrowNarrowRight />
        </button>
      </div>
    </ArticleWrapper>
  );
};

export default Article;
