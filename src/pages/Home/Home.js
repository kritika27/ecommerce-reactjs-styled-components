import React from 'react'
import { Homepage,Pic,Content,Header,SmallText,Head,Button } from '../../styles/Home.styled';

const Home = () => {
  return (
    <Homepage>
      <Content>
        <Head>
        <Header>Ready for new stuff</Header>
        <SmallText>Buy new stock at reasonable cost</SmallText>
        <Button>Get Started</Button>
        </Head>
      </Content>
      
      
<Pic></Pic>

    </Homepage>
  )
}

export default Home