import React from 'react'
import { NavLink } from 'react-router-dom'

const normal = "flex items-center px-6 py-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"

const active = "flex items-center px-6 py-4 text-gray-500 bg-gray-700 bg-opacity-25 text-white"

export const NLink = ({text, path, children}) => {
  return (
    <NavLink className={({isActive})=> (isActive? active : normal)} to={path}>
      { children }
      <span className="mx-3">{text}</span>
    </NavLink>
  )
}
