import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { HospitalesContext } from '../Context/HospitalesContext'

export default function FormList () {
  const { Selected, hospitales, setHospitalesNav, setDataHospital, setGraficos } = useContext(HospitalesContext)

  function shareFomr (object) {
    if (navigator.share) {
      navigator
        .share(object)
        .then(() => console.log(object))
        .catch(error => console.log('Error sharing', error))
    } else {
      console.log('no soportado')
    }
  }

  const handleSelectedAndStateFormList = (hospital) => {
    Selected(hospital.id, hospital.url)
    setDataHospital(hospital.urlData)
    setHospitalesNav(false)
    setGraficos(hospital.Graficos)
  }

  return (
    <nav className='Home animate__animated animate__zoomIn animate__faster'>
        <ul className='ul__Home'>
            {hospitales.map(hospital => {
              const HOSPITAL = {
                title: hospital.name,
                url: hospital.url
              }
              return (
                <li className='li__Home' key={hospital.id}>
                    <button className='btn-hospitales__Home' id={hospital.id} onClick={() => { handleSelectedAndStateFormList(hospital) }}>
                        <Link className='text-btn__Home' to={`/${hospital.id}`} >{`${hospital.nameVisible}`}</Link>
                    </button>
                    <button className='share__Home' onClick={() => shareFomr(HOSPITAL)}>
                        <i className="fa-solid fa-share"/>
                    </button>
                </li>
              )
            })}
        </ul>
    </nav>

  )
}
