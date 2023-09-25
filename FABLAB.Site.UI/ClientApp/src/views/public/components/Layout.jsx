import React from 'react'
import NavBar from './_NavBar'

const Layout = ({children}) => {
  return (
    <>

      <NavBar />
      {children}
    </>
  )
}

export default Layout