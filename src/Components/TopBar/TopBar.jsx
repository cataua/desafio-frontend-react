
import React from 'react';
import {
  Container,
} from '@material-ui/core';
import TopBarStyled from './TopBar.style';

const TopBar = (props) => {
  return (
    <TopBarStyled component="div">
      <Container>
        {props.children}
      </Container>
    </TopBarStyled>
  )
}

export default TopBar;