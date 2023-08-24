import { useState } from 'react'
import './App.css'
import SeuNome from './components/SeuNome'

function App() {

  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      {nome}
    </div>
  )
}

{/* Esse é o component App que funciona com o componente SeuNome*/}

export default App

