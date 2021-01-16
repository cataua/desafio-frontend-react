import React from 'react';
import { StoreProvider } from '../../Helpers/Stores';
import { initialState, SelectCycleReducer} from '../../Reducers/SelectCycle.reducer';
import './App.sass';
import Plans from '../../Pages/Plans';

const App = () => {
  return (
    <StoreProvider initialState={initialState} reducer={SelectCycleReducer}>
      <Plans />
    </StoreProvider>
  );
}

export default App;
