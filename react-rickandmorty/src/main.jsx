import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'

import Home from "./pages/Home"
import About from "./pages/About"
import Characters from './pages/Characters'
Cards
import NotFound from "./components/Notfound"
import Cards from './pages/Cards'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='characters' element={<Characters />} />
          <Route path='cards' element={<Cards />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)