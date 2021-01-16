
export const initialState = {
  cycleSelected: 'triennially',
}

export const selectCycle = (cycle) => ({
  type: 'SELECT_CYCLE',
  cycleSelected: cycle,
});

export const SelectCycleReducer = (state = initialState, action) => {
  if (action.type === 'SELECT_CYCLE') {
    return {
      ...state,
      cycleSelected: action.cycleSelected,
    };
  };
};

