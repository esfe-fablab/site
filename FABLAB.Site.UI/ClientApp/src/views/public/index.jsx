import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
// pages
import { Aprende } from './Aprende'
import { Blog } from './Blog'
import { BlogView } from './Blog/[id]'
import { Inicio } from './Inicio'

import '../../style/public/index.css'

const Public = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/blog/:idBlog' element={<BlogView />}></Route>
        <Route path='/aprende' element={<Aprende />}></Route>
      </Routes>
    </Layout>
  )
}

export default Public