import React from 'react'
import '../Pages/Hospital.css'

export function DatosForm ({ dataHospital }) {
  return (
    <div className='form-data'>
      <p>{dataHospital ? 'DATOS DEL FORMULARIO' : 'Datos no disponibles'}</p>
      <small>{dataHospital && 'Los datos se actualizan cada 5 minutos'}</small>
        {dataHospital && (
          <iframe
            src={dataHospital}
            className='table-data'
          ></iframe>
        )}
    </div>
  )
}
