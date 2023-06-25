import React, { useContext, useState } from 'react'
import BtnShowPass from './ButtonSwPass'
import {UserDataContext} from '../Context/UserDataContext'
import '../Pages/Login.css'

export default function FormLogin() {

  const [passVisible, setPassVisible] = useState(false)

  function handlePassVisible(e){
    e.preventDefault()
    setPassVisible(!passVisible)
  }

  const {passData, userData, hlandleLogin} = useContext(UserDataContext)

  return (
    <section className='Login-form'>
      <form className='form__Login-form'>
          <div className="id-name__Login-form">
              <label htmlFor="user">
              <span className="material-symbols-outlined person">person</span>
              </label>
              <input type="text" name="user" id="user" onChange={userData}/>
          </div>
          <div className="pass-name__Login-form">
              <label htmlFor="password">
              <span className="material-symbols-outlined lock">lock</span>
              </label>
              <input type={passVisible ? "text" : "password"} name="password" id="password" onChange={passData} />
              <BtnShowPass passVisible={passVisible} passVisibleF={handlePassVisible}/>
          </div>
          <button type='submit' onClick={hlandleLogin} className='Login-submit'>Entrar</button>
      </form>
    </section>

  )
}
