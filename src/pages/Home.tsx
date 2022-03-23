import React from 'react';
import Header from '../components/Header';
import Logo from '../assets/logo.png';
import { ArtcleContainer, CardContainer, Content, HomeWrapper } from './Style';
import Article from '../components/Article';
import Info from '../utils/content.json';
import img from '../assets/Change me to Image.png';
import CardInfos from '../utils/cardContent';
import Card from '../components/Card/index';

const Home = () => (
  <HomeWrapper>
    <Header />
    <Content>
      <img src={Logo} alt="logo" />
      <h1>Blush & Bloom Blog</h1>
      <span>
        Follow Blush & Bloom blog for product announcements,
        and how to take care of your flowers, and arrangements.
      </span>
    </Content>
    <ArtcleContainer>
      <Article
        flag={Info.flag}
        title={Info.title}
        content={Info.content}
        image={img}
      />
    </ArtcleContainer>
    <CardContainer>
      {
        CardInfos.map((info, index) => (
          <Card
            key={`${info}-${index + 1}`}
            content={info.content}
            flag={info.flag}
            image={info.image}
            title={info.title}
          />
        ))
      }
    </CardContainer>
  </HomeWrapper>
);

export default Home;
