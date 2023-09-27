import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { Inicio, Blog, BlogView, Aprende} from './pages'

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