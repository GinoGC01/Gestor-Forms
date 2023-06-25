import React, { createContext, useEffect, useState } from 'react'
import Users from '../sources/USERS.json'

export const UserDataContext = createContext()

export function UserDataContextProvider(props) {
    
const [User, setUser] = useState(null)
const [Password, usePassword] = useState(null)
const [Access, setAccess] = useState(false)
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


  return (
    <UserDataContext.Provider value={
        {
            Access,
            userData,
            passData,
            hlandleLogin
        }
    }>
        {props.children}
    </UserDataContext.Provider>
  )
}
