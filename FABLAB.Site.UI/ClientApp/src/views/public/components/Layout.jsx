import React from 'react'
import NavBar from './_NavBar'

const Layout = ({children}) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}

export default Layout