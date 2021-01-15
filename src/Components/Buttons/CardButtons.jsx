import React from 'react';
import {
  Grid
} from '@material-ui/core';
import { CTAButton } from './CardButton.style';

const CTA = (props) => {
  return (
    <Grid container justify='center'>
      <CTAButton variant={props.variant} color={props.color} href={props.url}>
        {props.children}
      </CTAButton>
    </Grid>
  );
};

export default CTA;