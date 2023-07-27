import React, { createContext, useEffect, useState } from 'react'
import Hospitales from '../sources/hospitales.json'

export const HospitalesContext = createContext()

export function HospitalesContextProvider ({ children }) {
  const [isSelected, setIsSelected] = useState(null)
  const [urlHospital, setUrlHospital] = useState('')
  const [hospitales, setHospitales] = useState([])
  const [dataHospital, setDataHospital] = useState('')
  const [graficos, setGraficos] = useState([])
  const [hospitalesNav, setHospitalesNav] = useState(false)

  useEffect(() => {
    setHospitales(Hospitales)
  }, [])

  function Selected (id, urlHospital, urlGrafico) {
    setIsSelected(id)
    setUrlHospital(urlHospital)
    setGraficos(urlGrafico)
  }

  function handleNav () {
    setHospitalesNav(!hospitalesNav)
  }

  return (
    <HospitalesContext.Provider value={
        {
          hospitales,
          isSelected,
          urlHospital,
          dataHospital,
          setDataHospital,
          hospitalesNav,
          setHospitalesNav,
          handleNav,
          graficos,
          setGraficos,
          Selected
        }
    }>{children}</HospitalesContext.Provider>
  )
}
