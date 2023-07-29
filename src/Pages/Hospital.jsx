import React, { useState, useContext } from 'react'
import { HospitalesContext } from '../Context/HospitalesContext'
import { Link, useParams } from 'react-router-dom'
import NavHospitales from '../components/NavHospitales'
import './Hospital.css'
import { DatosForm } from '../components/DatosForm'
import HeaderHospital from '../components/HeaderHospital'

function GraficosRecorridos ({ graficos }) {
  return graficos.map((grafico) => {
    return (
      <li key={grafico.id}>
        <iframe
          src={grafico.grafico}
          style={{
            width: '325px',
            height: '450px',
            display: 'block',
            margin: 'auto'
          }}
          seamless
        ></iframe>
      </li>
    )
  })
}

function Estadísticas ({ dataHospital, graficosOn, graficos }) {
  return (
    <section id="estadisticas">
      <h3 className='title-graficos__estadisticas'>Gráficos</h3>
    <section id="graficos">
      <ul>{graficosOn && <GraficosRecorridos graficos={graficos} />}</ul>
    </section>
    <DatosForm dataHospital={dataHospital} />
  </section>
  )
}

export default function Hospital () {
  const [data, setData] = useState(false)
  const [graficosOn, setGraficosOn] = useState(false)

  const handleData = () => {
    setData(!data)
    setGraficosOn(false)
  }

  const handleGraficos = () => {
    setGraficosOn(!graficosOn)
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

  if (id === isSelected) {
    return (
      <section className="Hospital">
        <HeaderHospital handleNav={handleNav} hospitalesNav={hospitalesNav} />
        <NavHospitales
          hospitalesNav={hospitalesNav}
          hospitales={hospitales}
          selected={Selected}
        />
        <p>
          {data
            ? `Estadísticas Seleccionadas: ${isSelected}`
            : `Formulario Seleccionado: ${isSelected}`}
        </p>
        <h3 className='subtitle-hospital'>{data && 'Los datos se actualizan cada 5 minutos'}</h3>
        <button onClick={handleData} className="estadisticas-button">
          {data ? 'ocultar estadísticas' : 'ver estadísticas'}
        </button>
        {data && (
          <button onClick={handleGraficos} className="estadisticas-button">
            Generar gráficos
          </button>
        )}
        {data
          ? (
            <Estadísticas dataHospital={dataHospital} graficosOn={graficosOn} graficos={graficos}/>
            )
          : (
          <>
            <iframe src={urlHospital} className="form">
              Cargando…
            </iframe>
          </>
            )}
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
