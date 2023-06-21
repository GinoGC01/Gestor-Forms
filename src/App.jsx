import { useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Hospital from './Pages/Hospital'
import Hospitales from './sources/hospitales.json'
import Login from './Pages/Login'
import './App.css'


function App() {

  const [isSelected, setIsSelected] = useState(null)
  const [urlHospital, setUrlHospital] = useState("")

  function Selected (id, urlHospital){
    setIsSelected(id)
    setUrlHospital(urlHospital)
    
  }
  return (
    <BrowserRouter>
      <Routes>

        <Route 
        path='/' 
        element={
        <Login hospitales={Hospitales} 
        selected={Selected}/>}/>

        <Route 
        path='/:id' 
        element={
        <Hospital 
        isSelected={isSelected} 
        urlHospital={urlHospital}
        hospitales={Hospitales} 
        selected={Selected}/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
