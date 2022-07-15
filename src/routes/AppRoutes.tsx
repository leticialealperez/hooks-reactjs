import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutDefault from '../config/layout/Default'

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
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
