import React, { useContext } from 'react'
import Hospitales from '../components/Hospitales'
import LoginTemplate from '../components/LoginTemplate'
import {UserDataContext} from '../Context/UserDataContext'
import './Login.css'

export default function Login({hospitales, selected}) {

const {Access} = useContext(UserDataContext)

  return (
    <>
        {Access ? 
        <Hospitales hospitales={hospitales} selected={selected}/> : 
        <LoginTemplate/>}
    </>
  )
}
