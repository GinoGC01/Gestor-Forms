import React, { createContext, useEffect, useState } from 'react'
import Hospitales from '../sources/hospitales.json'



export const HospitalesContext = createContext()

export function HospitalesContextProvider({children}) {
    const [isSelected, setIsSelected] = useState(null)
    const [urlHospital, setUrlHospital] = useState("")
    const [hospitales, setHospitales] = useState([])

    useEffect(()=>{
      setHospitales(Hospitales)
    },[])

    function Selected (id, urlHospital){
      setIsSelected(id)
      setUrlHospital(urlHospital)
    }
    
  return (
    <HospitalesContext.Provider value={
        {
            hospitales,
            isSelected,
            urlHospital,
            Selected
        }
    }>{children}</HospitalesContext.Provider>
  )
}
