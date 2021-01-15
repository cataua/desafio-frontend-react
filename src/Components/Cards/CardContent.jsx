import React, { useState, useMemo } from 'react';
import config from '../../config';
import { 
  formatNumber,
  formatCurrency,
} from '../../Helpers/Format';
import {
  CardPlanContent,
} from './Cards.styled';
import { CTA } from '../Buttons';


function CalcPricesDiscount(priceOrder, discount) {
  const newPrice = Number(priceOrder) * Number(discount);
  return Number(priceOrder) - newPrice;
}

function CalcPricesMonthly(priceOrder, months, discount) {
  const newPrice = Number(priceOrder) * Number(discount);
  return Number(newPrice) / Number(months);
}

function formatPlanUrl(plan, cycle, promoCode) {
  const { id } = plan;
  const planAttributes = {
    a: 'add',
    pid: id,
    billingCycle: cycle,
    promocode: promoCode, 
  };
  return `?${new URLSearchParams(planAttributes).toString()}`;
}

const CardContent = (props) => {
  const { promoCode } = config; 
  const cycleSelected = 'triennially';
  const [priceWithDiscount, setPriceWithDiscount] = useState(0.00);
  const [priceMonthly, setPriceMonthly] = useState(0.00);
  const [originalPrice, setOriginalPrice] = useState(0.00);
  const [economy, setEconomy ] = useState(0.00);
  const [planUrl, setPlanUrl] = useState('');
  const { plan, discount } = props;

  useMemo(() => { 
    const { priceOrder, months } = plan?.cycle[cycleSelected];
    setOriginalPrice(priceOrder);
    setPriceWithDiscount(CalcPricesDiscount(priceOrder, discount));
    setPriceMonthly(CalcPricesMonthly(priceOrder, months, discount));
    setPlanUrl(formatPlanUrl(plan, cycleSelected, promoCode));
    setEconomy(originalPrice - priceWithDiscount);
  }, [ plan, discount, promoCode, originalPrice, priceWithDiscount ]);


  return (
    <CardPlanContent>
      <p className="plan-price">
        <span className="plan-old-price">{ formatCurrency(originalPrice) }</span>
        <span className="plan-new-price">
          { formatCurrency(priceWithDiscount) }
        </span><br />
        equivalente a
      </p>
      <p className="plan-price-monthly">
        R$
        <span className="plan-price-monthly-value">{ formatNumber(priceMonthly) }</span>
        /mes*
      </p>
      <CTA variant='contained' color='primary' url={planUrl}>Contrate Agora</CTA>
      <p className="plan-offer">
        1 ano de Domínio Grátis<span className="plan-info-icon"></span><br />
        <span className="plan-economy">
          economize { formatCurrency(economy)} <span className="tag-discount">{discount * 100}% OFF</span>
        </span>
      </p>
    </CardPlanContent>
  );
};

export default CardContent;