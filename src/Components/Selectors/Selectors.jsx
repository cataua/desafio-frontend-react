import React, { useState } from 'react';
import {
  Grid,
  Radio,
} from '@material-ui/core';
import {
  TitlePlans,
  GroupPlans,
  Plan
} from './Selectos.style';

const Selectors = (props) => {
  const planCycle = [
    {
      label: '3 anos',
      value: 'triennially'
    },
    {
      label: '1 ano',
      value: 'annually'
    },
    {
      label: '1 mês',
      value: 'monthly'
    },
  ]
  
  const [cycleSelected, setCycleSeletected] = useState(planCycle[0].value);
  const handleChange = (e) => {
    setCycleSeletected(e.target.value);
  }

  return (
    <Grid container spacing={2} justify='center'>
      <Grid item xs={12}>
        <TitlePlans>Quero pagar a cada:</TitlePlans>
      </Grid>
      <Grid container justify='center'>
        <GroupPlans row value={cycleSelected} onChange={handleChange}>
            { planCycle.map((cycle, i) => (
              <Plan
                key={i}
                control={<Radio />}
                label={cycle.label}
                value={cycle.value}
                className={cycleSelected === cycle.value ? 'checked' : ''} />
            ))}
          </GroupPlans>
      </Grid>
    </Grid>
  )
}

export default Selectors;