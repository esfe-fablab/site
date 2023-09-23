import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { Inicio } from './pages'

import '../../style/public/index.css'

const Public = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
      </Routes>
    </Layout>
  )
}

export default Public