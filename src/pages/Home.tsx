import React from 'react';
import Header from '../components/Header';
import Logo from '../assets/logo.png';
import { Content, HomeWrapper } from './Style';
import Article from '../components/Article';
import Info from '../utils/content.json';
import img from '../assets/Change me to Image.png';

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
    <Article
      flag={Info.flag}
      title={Info.title}
      content={Info.content}
      image={img}
    />
  </HomeWrapper>
);

export default Home;
