import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutDefault from '../config/layout/Default'
import ExemploPage from '../pages/ExemploPage'

import Home from '../pages/home/Home'
import refriHome from '../pages/refriHome/refriHome'

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault component={Home} />} />
        <Route
          path="/refri"
          element={<LayoutDefault component={refriHome} />}
        />
        <Route
          path="/users"
          element={<LayoutDefault component={ExemploPage} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
