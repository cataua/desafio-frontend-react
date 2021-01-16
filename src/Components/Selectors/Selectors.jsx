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
import { useStore } from '../../Helpers/Stores';
import { selectCycle } from '../../Reducers/SelectCycle.reducer';


const Selectors = () => {
  const [state , dispatch] = useStore();
  console.log('state ', state)
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
  
  const [cycleSelected, setCycleSeletected] = useState(state.cycleSelected);
  const handleChange = (e) => {
    e.preventDefault();
    setCycleSeletected(e.target.value);
    dispatch(selectCycle(e.target.value));
  }

  return (
    <Grid container item justify='center'>
      <Grid item xs={12}>
        <TitlePlans>Quero pagar a cada:</TitlePlans>
      </Grid>
      <Grid container item xs={12} justify='center'>
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