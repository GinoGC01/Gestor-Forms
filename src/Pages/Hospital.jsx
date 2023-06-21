import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import NavHospitales from '../components/NavHospitales'
import './Hospital.css'

export default function Hospital({isSelected, urlHospital, hospitales, selected}) {

  // hook que retorna los parámetros del url de react-router-dom
  // devuelve un string
  const id = useParams().id

  const [hospitalesNav, setHospitalesNav] = useState(false)


  function handleNav(){
    setHospitalesNav(!hospitalesNav)
  }

   if(id === isSelected){
    return(
    <section className='Hospital'>
      <header className='header__hospital'>
          <img className='animate__animated animate__bounceIn' src="../../images/logo-municipalidad.png" alt="Logo de la municipaldiad de josé C. Paz" />
          <button className='menu__Hospital' onClick={handleNav}>
            {hospitalesNav ? 
            <span className="material-symbols-outlined">close</span> : 
            <span className="material-symbols-outlined">menu</span>}
          </button>
      </header>
      <NavHospitales hospitalesNav={hospitalesNav} hospitales={hospitales} selected={selected} />
      <p>Formulario Seleccionado: <span>{isSelected}</span></p>
      <iframe src={urlHospital} className='form'>Cargando…</iframe>
    </section>)
  }
  else{
    return (
      <div className='Form-NoDisp'>
        <strong className='text__Form-NoDisp'>Formulario no disponible</strong>
        <button className='btn__Form-NoDisp'>
          <Link className='text-btn__Form-NoDisp' to="/">Volver</Link>
        </button>
      </div>
    )

  }


}
