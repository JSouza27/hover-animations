import React from 'react';
import Header from '../components/Header';
import Logo from '../assets/logo.png';
import * as S from './Style';
import Article from '../components/Article';
import Info from '../utils/content.json';
import img from '../assets/Change me to Image.png';
import CardInfos from '../utils/cardContent';
import Card from '../components/Card/index';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <S.HomeWrapper>
      <Header />
      <S.Content>
        <img src={Logo} alt="logo" />
        <h1>Blush & Bloom Blog</h1>
        <span>
          Follow Blush & Bloom blog for product announcements, and how to take
          care of your flowers, and arrangements.
        </span>
      </S.Content>
      <S.ArtcleContainer>
        <Article
          flag={Info.flag}
          title={Info.title}
          content={Info.content}
          image={img}
        />
      </S.ArtcleContainer>
      <S.CardContainer>
        {CardInfos.map((info, index) => (
          <Card
            key={`${info}-${index + 1}`}
            content={info.content}
            flag={info.flag}
            image={info.image}
            title={info.title}
          />
        ))}
      </S.CardContainer>
      <Footer />
    </S.HomeWrapper>
  );
}
