import React from 'react'
import {Link} from 'react-router-dom';

export const Error404 = () => {
  return (
    <div className='error404'>
        <h1>Error 404</h1>
        <h3>La página a la que quiere acceder no existe</h3>
        <Link to='/'>Inicio</Link>
    </div>
  )
}
