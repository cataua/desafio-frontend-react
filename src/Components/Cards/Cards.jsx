import React from 'react';
import config from '../../config';
import {
  Grid,
} from '@material-ui/core'
import {
  CardPlan,
  GridCardPlan,
  CardLink,
} from './Cards.styled';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';



const Cards = (props) => {
  const discount = config.discount;
  const totalSites = ({ totalSites }) => {
    if (totalSites === '1') {
      return (
        <>
          Para 1 Site
        </>      
      );
    }
    return (
      <>
        Sites ilimitados
      </>
    );
  };

  return (
    <GridCardPlan container item spacing={1 } xs={8} justify='center'>
        { props.plans.map((plan, i) => (
          <Grid item xs={4} key={`plan-${i}`}>
            <CardPlan variant='outlined' className={plan.name === 'Plano M' ? 'recommended' : ''}>
              <CardHeader index={i} title={plan.name} />
              <CardContent plan={plan} discount={discount} />
              <CardFooter>
                <p className='text-underline dotted'>
                  { totalSites(config.plansInfos[plan.name]) }
                </p>
                <p>
                  <strong>{ config.plansInfos[plan.name].diskSpace } Gb</strong> de Armazenamento
                </p>
                <p className='text-underline dotted'>
                  Contas de E-mail <strong>{ config.plansInfos[plan.name].emailAccounts }</strong>
                </p>
                <p>
                  Criador de Sites <strong>{ config.plansInfos[plan.name].emailAccounts }</strong>
                </p>
                <p>
                  Certificado SSL <strong>{ config.plansInfos[plan.name].emailAccounts }</strong> (https)
                </p>
              </CardFooter>
            </CardPlan>
          </Grid>
          )) }
      <Grid item xs={12} className="text-right mt-4 mb-4">
        <CardLink href="#" color="primary">*Confira as condições da promoção</CardLink>
      </Grid>
    </GridCardPlan>
  )
}

export default Cards;