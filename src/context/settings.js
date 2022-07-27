import React, { useState } from 'react';

// 1. Create context object
export const SettingsContext = React.createContext();

// 2. Create a provider component
function SettingsProvider ({children}){

  // step 3: 
  const [completed, setcompleted] = useState(false);
  const [pageItems, setPageItems] = useState(3);
  const [sort, setSort] = useState('difficulty');

  const addCompletedItem = (item) => {
    // use this to change state
  }

  return(
    <SettingsContext.Provider value={{completed, pageItems, sort, addCompletedItem}}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;