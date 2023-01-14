import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className='nav'>
        <ul>
            <li>
              <NavLink to='/'>Inicio</NavLink>
            </li>
            <li>
              <NavLink to='/portafolio'>Portafolio</NavLink>
            </li>
            <li>
              <NavLink to='/servicios'>Servicios</NavLink>
            </li>
            <li>
              <NavLink to='/curriculum'>Curriculum</NavLink>
            </li>
            <li>
              <NavLink to='/contacto'>Contacto</NavLink>
            </li>
        </ul>
    </nav>
  )
}
