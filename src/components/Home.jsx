import React from 'react'
import {Link} from 'react-router-dom'

export default function Home({hospitales, selected}) {

function shareFomr(object){
    if(navigator.share){
      navigator
      .share(object)
      .then(()=>console.log(object))
      .catch(error => console.log('Error sharing', error))
     }else{
      console.log('no soportado')
    }
  }

  
    
  return (
    <nav className='Home'>
        <ul className='ul__Home'>
            {hospitales.map(hospital => {

                const HOSPITAL = {
                    title:hospital.name,
                    url:hospital.url
                }

                return(
                <li className='li__Home' key={hospital.id}>
                    <button className='btn-hospitales__Home' id={hospital.id} onClick={()=>{selected(hospital.id, hospital.url)}}>
                        <Link className='text-btn__Home' to={`/${hospital.id}`} >{`${hospital.nameVisible}`}</Link>
                    </button>
                    <button className='share__Home' onClick={()=>shareFomr(HOSPITAL)}>
                        <i className="fa-solid fa-share"/>
                    </button>
                </li>
                )
            })}
        </ul>
    </nav>

  )
}
