import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/empresa'
import Contato from './pages/contato'
import Navbar from './components/NavBar'
import Footer from './components/layoult/Footer'



function App() {


  return (
    <Router>
      
    <Navbar />

      <Routes>

        <Route exact path="/" element={<Home />}></Route>

        <Route path="/empresa" element={<Empresa />}></Route>

        <Route path="/contato" element={<Contato />}></Route>

      </Routes>

<Footer />

    </Router>
  )
}

{/* Esse é o component App que funciona com os componentes Footer, Navbar e componentes do pages*/}

export default App

