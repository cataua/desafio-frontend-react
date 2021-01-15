import React from 'react';
import { CardFooterStyled } from './Cards.styled';

const CardFooter = (props) => {
  return (
    <CardFooterStyled>
      {props.children}
    </CardFooterStyled>
  )
};

export default CardFooter;