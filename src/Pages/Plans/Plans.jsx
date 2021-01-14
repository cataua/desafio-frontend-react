import React, { useState, useEffect } from 'react';
import {
  Box,
  Container
} from '@material-ui/core';
import Header  from '../../Components/Header';
import TopBar from '../../Components/TopBar';
import MainBanner from '../../Components/MainBanner';
import { ReactComponent as Logo } from '../../Assets/Img/hostgator-logo.svg';
import './Plans.sass';
import ServicePlans from '../../Services';

const Plans = (props) => {
  const [hostPlans, setHostPlans] = useState([]);
  useEffect(() => {
    ServicePlans.get().then((resp) => {
      let products = [];
      Object.keys(resp).forEach((product) => {
        if (['Plano P', 'Plano M' , 'Plano Turbo'].includes(resp[product].name)) {
         products.push(resp[product]);
        } 
      })
      if (products.length > 0) setHostPlans(products);
    });
  }, []);
  return (
    <>
      <Header>
        <TopBar>
          <Logo className="logo" />
        </TopBar>
      </Header>
      <Box component="main" className="App">
        <MainBanner />
        <Container>
          <p>Planos</p>
        </Container>
      </Box>
    </>
  )
}

export default Plans;