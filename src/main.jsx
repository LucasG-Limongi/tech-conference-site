import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import SiteLayout from './layouts/SiteLayout.jsx'
import CenteredLayout from './layouts/CenteredLayout.jsx'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Register from "./pages/Register"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Speaker from './pages/Speaker.jsx'
import Schedule from './pages/Schedule.jsx'
import Speakers from './pages/Speakers.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/palestrantes">
            <Route index element={<Speakers />} />
            <Route path=":slug" element={<Speaker />} />
          </Route>
          <Route path="/programacao/:dia?" element={<Schedule />} />
        </Route>

        <Route element={<CenteredLayout />}>
          <Route path="/cadastro" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
