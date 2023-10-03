import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { Layout } from './components/Layout'

import { Home } from './Home'
import { Miembros } from './Miembros'
import { Usuarios } from './Usuarios'
import { Clubs } from './Clubs'
import { Articulos } from './Articulos'

export const Dashboard = () => {
  return (
    <Layout>
      <Routes>
        <Route path='inicio' element={<Home />}/>
        <Route path='miembros' element={<Miembros />}/>
        <Route path='usuarios' element={<Usuarios />}/>
        <Route path='clubs' element={<Clubs />}/>
        <Route path='articulos' element={<Articulos />}/>
      </Routes>
    </Layout>
  )
}
