import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Hospital from './Pages/Hospital'
import Login from './Pages/Login'
import './App.css'


function App() {
  
  return (
    <BrowserRouter>
      <Routes>

        <Route 
        path='/' 
        element={
        <Login/>}/>

        <Route 
        path='/:id' 
        element={
        <Hospital/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
