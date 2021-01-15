import {
  Button,
} from '@material-ui/core';
import styled from 'styled-components';


const CTAButton = styled(Button)`
&.MuiButtonBase-root {
  margin: 0 auto;
  border-radius: 26px;
  padding: 12px 24px;
  width: 80%;
  &.MuiButton-containedPrimary {
    background-color: var(--main-color);
  }
}
`

const buttons = {
  CTAButton,
};

export default buttons;

export {
  CTAButton,
};