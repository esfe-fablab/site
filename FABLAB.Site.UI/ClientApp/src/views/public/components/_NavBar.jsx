/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom'
import React from 'react'
import './_navbar.css'

export default function _NavBar() {
  return (
    <div>
      <div className="bg-modal"></div>
      <header id="header-1">
      </header>
      <nav className="navbar">
        <img src="/img/logo/esfe-logo.png" alt="logo-esfe" />
        <ul>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/aprende">Aprende</NavLink>
          <a className="butn" href="#">Login</a>
          <a className="butn butn-i" href="#">Register</a>
        </ul>

        <label className="hamburger">
          <div id="bar4" className="bars"></div>
          <div id="bar5" className="bars"></div>
          <div id="bar6" className="bars"></div>
        </label>
      </nav>
    </div>
  )
}
