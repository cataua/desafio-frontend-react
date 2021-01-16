import styled from 'styled-components';
import {
  Card,
  Grid,
  Link,
} from '@material-ui/core';

const CardPlan = styled(Card)`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DFECFF;
  border-radius: 4px;
  opacity: 1;
`;

const GridCardPlan = styled(Grid)`
  &.MuiGrid-root {
    margin-top: 57px;
    & .MuiPaper-root {
      &.recommended {
        border-top-width: 6px;
        border-top-color: red;
        &::before,
        &::after {
          display: block;
          content: '';
          background: var(--second-color);
          width: 100%;
        }
        &::before
          height: 6px;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          margin-top: -6px;
        }
        &::after {
          height: 3px;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
        }
      }
    }
    & .MuiGrid-item {
      &.mt-4 {
        margin-top: 18px;
      }
      &.mb-4 {
        margin-bottom: 18px;
      }
    }
  }
`;

const CardPlanHeader = styled('div')`
  display: block;
  padding-top: 27px;
  box-shadow: none;
  text-align: center;
  border-bottom: 1px solid var(--main-light-color);
  & figure, img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }
  & .card-plan-header-title {
    text-align: center;
    font-size: 1.625rem;
    font-weight: 800;
    color: var(--main-dark-color);
    opacity: 1;
  }
  `

const CardPlanContent = styled('div')`
  padding-bottom: 30px;
  border-bottom: 1px solid var(--main-light-color);
  & .plan-price {
    text-align: center;
    font-size: 0.8124rem;
    line-height: 1.188rem;
    color: var(--dark);
    & .plan-old-price {
      text-decoration: line-through;
      font-weight: normal;
      margin-right: 0.2em;
    }
    & .plan-new-price {
      font-weight: 800;
      margin-left: 0.2em;
    }
  }
  & .plan-price-monthly {
    text-align: center;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: var(--main-dark-color);
    & .plan-price-monthly-value {
      font-size: 2.188rem;
      line-height: 1.5rem;
      font-weight: 800;
      margin-left: 6px;
    }
  }
  & .plan-offer {
    margin-top: 1.625rem;
    text-align: center;
    font-fize: 0.9375rem;
    line-height: 1.25rem;
    font-weight: 800;
    letter-spacing: 0px;
    color: var(--dark);
    & .plan-info-icon {
      display: inline-block;
      content: '';
      margin-left: 2px;
      width: 15px;
      height: 15px;
      vertical-align: middle;
      background-image: url('assets/img/exclamation-point.svg');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
    }
    & .plan-economy {
      display: block;
      margin-top: 10px;
      font-size: 0.875rem;
      color: var(--main-color);
      font-weight: normal;
      & .tag-discount {
        background-color: var(--highlight-color);
        font-weight: 800;
        color: var(--white);
        border-radius: 224px;
        padding: 3px 8px;
      }
    }
  }
`

const CardFooterStyled = styled('footer')`
  margin-top: 32px;
  margin-bottom: 35px;
  margin-left: 26px;
  padding: 0;
  font-size: 0.9rem;
  line-height: 2rem;
  & p {
    display: inline-block;
    clear: both;
    text-align: left;
    margin-block-start: 0;
    margin-block-end: 0;
  }
`

const CardLink = styled(Link)`
&.MuiTypography-root {
  font-size: .75rem;
  line-height: 0.75rem;
  &.MuiTypography-colorPrimary {
    color: var(--main-color);
  }
}
`

const CardsStyled = {
  CardPlan,
  GridCardPlan,
  CardPlanHeader,
  CardPlanContent,
  CardFooterStyled,
  CardLink,
};

export default CardsStyled;

export {
  CardPlan,
  GridCardPlan,
  CardPlanHeader,
  CardPlanContent,
  CardFooterStyled,
  CardLink,
}