import React, { useState, useContext } from 'react'
import { HospitalesContext } from '../Context/HospitalesContext'
import { Link, useParams } from 'react-router-dom'
import NavHospitales from '../components/NavHospitales'
import './Hospital.css'
import { DatosForm } from '../components/DatosForm'
import HeaderHospital from '../components/HeaderHospital'

export default function Hospital () {
  const [data, setData] = useState(false)
  const [graficosOn, setGraficosOn] = useState(false)

  const handleData = () => {
    setData(!data)
    setGraficosOn(true)
  }

  // hook que retorna los parámetros del url de react-router-dom
  // devuelve un string
  const id = useParams().id

  const {
    Selected,
    urlHospital,
    isSelected,
    hospitales,
    dataHospital,
    hospitalesNav,
    handleNav,
    graficos
  } = useContext(HospitalesContext)

  function GraficosRecorridos () {
    return (
      graficos.map(grafico => {
        return (
          <div key={id} style={{ width: '100%', height: '371px', display: 'block' }}>
            <iframe src={grafico.grafico01 && grafico.grafico01} style={{ width: '100%', height: '371px', display: 'block' }} seamless ></iframe>
          </div>
        )
      })
    )
  }

  if (id === isSelected) {
    return (
      <section className="Hospital">
        <HeaderHospital handleNav={handleNav} hospitalesNav={hospitalesNav}/>
        <NavHospitales hospitalesNav={hospitalesNav} hospitales={hospitales} selected={Selected}/>
        <p>
          {data ? `Estadísticas Seleccionadas: ${isSelected}` : `Formulario Seleccionado: ${isSelected}`}
        </p>
        <button onClick={handleData} className="estadisticas-button">
          {data ? 'ocultar estadísticas' : 'ver estadísticas'}
        </button>
        {data
          ? <>
            {graficosOn && <GraficosRecorridos/>}
            <DatosForm dataHospital={dataHospital}/>
            </>
          : <>
            <iframe src={urlHospital} className="form">
              Cargando…
            </iframe>
            </>
            }
      </section>
    )
  } else {
    return (
      <div className="Form-NoDisp">
        <strong className="text__Form-NoDisp">Formulario no disponible</strong>
          <Link className="text-btn__Form-NoDisp" to="/">
            Volver
          </Link>
      </div>
    )
  }
}
