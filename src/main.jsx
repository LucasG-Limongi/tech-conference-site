import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Register from "./pages/Register"
import Login from "./pages/Login"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contato' element={<Contact />} />
        <Route path='/cadastro' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
