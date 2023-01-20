import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

export const ListadoTrabajos = ({limite}) => {
  return (
    <div className='portafolio'>
      <h1></h1>
      <section className='trabajos-section'>
        {
          trabajos.slice(0, limite).reverse().map((trabajo, i) => {
            return (
              <article key={i} className='portafolio-trabajo'>
                <div className='mask'>
                  <img src={`/images/${trabajo.id}.png`} alt="" />
                </div>
                <h3><Link to={`/detalle/${trabajo.id}`}  >{trabajo.nombre}</Link></h3> <span>{trabajo.Categoria}</span>
                <h3>Tecnologias: {trabajo.tecnologias}</h3>
              
              </article>
            )
          })
        }

      </section>
    </div>
  )
}
