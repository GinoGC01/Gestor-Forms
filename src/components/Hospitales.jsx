import React from 'react'
import FormList from './FormList'
import './Hospitales.css'
import 'animate.css';

export default function Hospitales({hospitales, selected}) {
  return (
    <div className='Hospitales'>
      <div className='titulo__Hospitales'>
        <h1>Formularios</h1>
        <img src="../../images/logo-municipalidad.png" alt="Logo de la municipalidad de José C. Paz" className='animate__animated animate__flip' />
      </div>
      <p>Seleccione el hospital al que corresponda el formulario a completar</p>

      <div className='lista__Hospitales'>
        <p>Lista de formularios disponibles</p>
        <FormList hospitales={hospitales} selected={selected}/>
      </div>
    </div>
  )
}
