import React from 'react'
import NavBar from './_NavBar'

const Layout = ({children}) => {
  return (
    <>

      <NavBar />
      {children}
      <h2>Eliseo</h2>
    </>
  )
}

export default Layout