import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
} from '@material-ui/core';
import Header  from '../../Components/Header';
import TopBar from '../../Components/TopBar';
import MainBanner from '../../Components/MainBanner';
import Selectors from '../../Components/Selectors';
import Cards from '../../Components/Cards';
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
        <Grid container spacing={3} justify='center'>
            <Selectors plans={hostPlans} />
            <Cards plans={hostPlans} />
        </Grid>
      </Box>
    </>
  )
}

export default Plans;