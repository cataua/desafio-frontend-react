import React from 'react';
import {
  CardPlanHeader
} from './Cards.styled';

const CardHeader = (props) => {
  const { title, index} = props
  return (
    <CardPlanHeader>
      <figure>
        <img src={`assets/img/server-level-${Number(index)+1}.svg`} alt={title} />
      </figure>
      <p className='card-plan-header-title'>
        {title}
      </p>
    </CardPlanHeader>
  );
}

export default CardHeader;