import React, {useState, useContext} from 'react'
import {HospitalesContext} from '../Context/HospitalesContext'
import {Link, useParams} from 'react-router-dom'
import NavHospitales from '../components/NavHospitales'
import './Hospital.css'
import {DatosForm} from '../components/DatosForm'
import HeaderHospital from '../components/HeaderHospital'

function GraficosRecorridos({graficos}) {
  return graficos?.map((grafico) => {
    return (
      <li key={grafico.id}>
        <strong className='grafico-title'>{grafico.title}</strong>
        <iframe
          src={grafico.grafico}
          className='grafico-conteiner'
          style={{
            width: '345px',
            height: '285px',
            display: 'block',
            margin: '20px auto',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, .5)',
            backdropFilter: 'blur(15px)'
          }}
          seamless
        ></iframe>
      </li>
    )
  })
}

function Estadísticas({dataHospital, graficosOn, graficos, handleGraficos}) {
  return (
    <section id='estadisticas'>
      {graficos && (
        <button onClick={handleGraficos} className='estadisticas-button'>
          {graficosOn ? 'Ocultar gráficos' : 'Ver gráficos'}
        </button>
      )}
      <section id='graficos'>
        <ul className='graficos-container'>
          {graficosOn && <GraficosRecorridos graficos={graficos} />}
        </ul>
      </section>
      <DatosForm dataHospital={dataHospital} />
    </section>
  )
}

export default function Hospital() {
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
      <section className='Hospital'>
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
        <h3 className='subtitle-hospital'>
          {data && graficos && 'Los datos se actualizan cada 5 minutos'}
        </h3>
        <button onClick={handleData} className='estadisticas-button'>
          {data ? 'ver formulario' : 'ver estadísticas'}
        </button>
        {data ? (
          <Estadísticas
            dataHospital={dataHospital}
            graficosOn={graficosOn}
            graficos={graficos}
            handleGraficos={handleGraficos}
          />
        ) : (
          <>
            <iframe src={urlHospital} className='form'>
              Cargando…
            </iframe>
          </>
        )}
      </section>
    )
  } else {
    return (
      <div className='Form-NoDisp'>
        <strong className='text__Form-NoDisp'>Formulario no disponible</strong>
        <Link className='text-btn__Form-NoDisp' to='/'>
          Volver
        </Link>
      </div>
    )
  }
}
