import styled from 'styled-components';
import {
  RadioGroup,
  FormControlLabel
} from '@material-ui/core';

const TitlePlans = styled('p')`
  text-align: center;
  font-size: 0.875em;
  color: var(--main-dark-color);
  margin-top: 2rem;
  margin-bottom: 7px;
`

const GroupPlans = styled(RadioGroup)`
  &.MuiFormGroup-root {
    max-width: 325px;
    background: var(--white);
    border: 1px solid var(--main-color);
    border-radius: 29px;
    box-shadow: 0px 2px 4px var(--main-color);
    justify-content: space-between;
  }
`

const Plan = styled(FormControlLabel)`
  &.MuiFormControlLabel-root {
    font-weight: 800;
    padding: 2px 10px;
    margin: 0;
    border-width: 0px;
    & .MuiRadio-root {
      color: var(--main-color);
      &.Mui-checked {
        color: var(--white);
      }
    }
  }
  &.checked {
    background-color: var(--main-color);
    color: var(--white);
    border-radius: 29px;
  }
`

const SelectorsStyled = {
  TitlePlans,
  GroupPlans,
  Plan,
}

export default SelectorsStyled;

export { 
  TitlePlans,
  GroupPlans,
  Plan,
 }