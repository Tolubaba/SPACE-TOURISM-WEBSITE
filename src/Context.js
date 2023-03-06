import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'


const AppContext=React.createContext();

const AppProvider= ({children}) => {

    const [issideopen,setissideopen]=useState(false)

    const opensidebar=()=>{
        setissideopen(true)
    }

    const closesidebar=()=>{
        setissideopen(false)
    }
  return (
    <AppContext.Provider value={{ issideopen,opensidebar,closesidebar}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}