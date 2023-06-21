import React from 'react'
import {Link} from 'react-router-dom'

export default function Home({hospitales, selected}) {
    
  return (
    <nav className='Home'>
        <ul className='ul__Home'>
            {hospitales.map(hospital => {
                return(
                <li className='li__Home' key={hospital.id}>
                    <button className='btn-hospitales__Home' id={hospital.id} onClick={()=>{selected(hospital.id, hospital.url)}}>
                        <Link className='text-btn__Home' to={`/${hospital.id}`} >{`${hospital.nameVisible}`}</Link>
                    </button>
                </li>
                )
            })}
        </ul>
    </nav>

  )
}
