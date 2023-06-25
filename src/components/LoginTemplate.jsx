import React from 'react'
import FormLogin from './FormLogin'

export default function LoginTemplate() {
  return (
        <section className='Login'>
            <div className='account__Login'>
                <span className="logo-municipalidad__Login animate__animated animate__zoomInDown">
                    <img className='' src="../../images/logo-municipalidad.png" alt="Logo municipaldiad de José C. Paz" />
                </span>
                <h2>Encuestas</h2>
                <p>Municipalidad de José C. Paz</p>
                <p>Secretaria de Salud</p>
                <FormLogin />
            <h1 className='animate__animated animate__fadeIn'> Login</h1>
            </div>
        </section>      
  )
}
