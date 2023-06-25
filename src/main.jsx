import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {UserDataContextProvider} from './Context/UserDataContext'
import {HospitalesContextProvider} from './Context/HospitalesContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserDataContextProvider>
      <HospitalesContextProvider>
        <App />
      </HospitalesContextProvider>
    </UserDataContextProvider>
  </React.StrictMode>,
)
