import React, { createContext } from 'react'
import useProduct from './API/ProductApi'


// creating context 
export const DataContext = createContext()

// super component
function DataProvider(props) {

    const data = {
       productApi:  useProduct()
    }

    return (
        <DataContext.Provider value={data} >
            {props.children}
        </DataContext.Provider>
    )
}
export default DataProvider