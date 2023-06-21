import React, { useEffect, useState } from 'react'
import FormLogin from '../components/FormLogin'
import Home from '../Components/Home'
import Users from '../sources/USERS.json'
import Hospitales from './Hospitales'
import './Login.css'

export default function Login({hospitales, selected}) {

    const [User, setUser] = useState(null)
    const [Password, usePassword] = useState(null)
    const [Access, setAccess] = useState(false)
    const [passVisible, setPassVisible] = useState(false)
    const [USERS, SETUSERS] = useState([])
    const [session, setSession] = useState(null)

    useEffect(()=>{
        SETUSERS(Users) 
    },[])

    useEffect(()=>{
        const sesion = JSON.parse(sessionStorage.getItem('access'))
        setSession(sesion)
    },[Access])

    useEffect(()=>{
        LoginDataSession()
    })
// valor de los inputs
    function userData(e){
        setUser(e.target.value)
    }

    function passData(e){
        usePassword(e.target.value)
    }

// validation session

    function LoginData(){

        // Objeto.prop que coincide con state User && Pass
        const accessAprove = USERS.find(user => (user.name === User && user.password === Password))

        if((accessAprove != undefined)){
            setAccess(true)
            const accseesAproved = true
            sessionStorage.setItem('access', JSON.stringify(accseesAproved))
        }
        else{
            setAccess(false)
            alert('credenciales incorrectas, por favor corrobore los datos antes de ingresar, gracias.')
        }
    }

    function LoginDataSession(){
        if(session){
            setAccess(true)
            const accseesAproved = true
            sessionStorage.setItem('access', JSON.stringify(accseesAproved))
        }
    }

// handle functions

    function hlandleLogin(e){
        e.preventDefault()
        LoginData()
    }

    function handlePassVisible(e){
        e.preventDefault()
        setPassVisible(!passVisible)
    }

  return (
    <>
        {Access ? 
        <Hospitales hospitales={hospitales} selected={selected}/> : 
        <section className='Login'>
            <div className='account__Login'>
                <span className="logo-municipalidad__Login animate__animated animate__zoomInDown">
                    <img className='' src="../../images/logo-municipalidad.png" alt="Logo municipaldiad de José C. Paz" />
                </span>
                <h2>Encuestas</h2>
                <p>Municipalidad de José C. Paz</p>
                <p>Secretaria de Salud</p>
                <FormLogin 
                loginData={hlandleLogin} 
                userData={userData} 
                passData={passData}
                passVisible={passVisible}
                passVisibleF={handlePassVisible}
                />
            <h1 className='animate__animated animate__fadeIn'> Login</h1>
            </div>
        </section>
        }
    </>
  )
}
