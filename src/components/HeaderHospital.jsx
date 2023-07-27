import React from 'react'

export default function HeaderHospital ({ handleNav, hospitalesNav }) {
  return (
    <header className="header__hospital">
          <img
            className="animate__animated animate__bounceIn"
            src="../../images/logo-municipalidad.png"
            alt="Logo de la municipaldiad de josé C. Paz"
          />
          <button className="menu__Hospital" onClick={handleNav}>
            <span
              className={`material-symbols-outlined animate__animated ${
                hospitalesNav
                  ? 'animate__bounceInDown animate__faster'
                  : 'animate__bounceInRight animate__faster'
              } `}
            >
              {hospitalesNav ? 'close' : 'menu'}
            </span>
          </button>
        </header>
  )
}
