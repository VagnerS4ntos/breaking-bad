import React from 'react';
export const GlobalContext = React.createContext();
export const GlobalStorage = ({ children }) => {
  const [allData, setAllData] = React.useState([]);
  const [filterData, setFilterData] = React.useState('');
  return (
    <GlobalContext.Provider
      value={{ allData, setAllData, filterData, setFilterData }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
