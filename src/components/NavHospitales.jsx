import React from 'react'
import Home from '../Components/Home'
import '../Pages/Hospital.css'

export default function NavHospitales({hospitalesNav, hospitales, selected}) {
    
  return (
    <div className='nav-hospitales'>
    {hospitalesNav && <Home hospitales={hospitales} selected={selected}/> }
    </div>
  )
}
