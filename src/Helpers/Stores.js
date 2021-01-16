import React, { createContext, useReducer, useContext } from 'react';

const Store = createContext();
Store.displayName = 'HostGatorHost';

export const useStore = () => useContext(Store);

export const StoreProvider = ({children, initialState, reducer}) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={[globalState, dispatch]}>
      {children}
    </Store.Provider>
  );
};