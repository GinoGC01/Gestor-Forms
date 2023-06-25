import React from 'react'
import FormList from './FormList'
import '../Pages/Hospital.css'

export default function NavHospitales({hospitalesNav, hospitales, selected}) {
    
  return (
    <div className='nav-hospitales'>
      {hospitalesNav && <FormList hospitales={hospitales} selected={selected}/> }
    </div>
  )
}
