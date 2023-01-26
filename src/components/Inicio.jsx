import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='inicio'>
      <h1>
        Bienvenido, mi nombre es Emiliano Olivera y soy desarrollador web fullstack. Te ayudo a crear un sitio web a la medida de tus necesidades y así poder catapultar tu negocio en internet. <Link to='/contacto'>Contactame</Link>  
      </h1>

        <h2>Tecnologías con las que trabajo</h2>
      <section className='tecnologias'>
        
        <article>
            <img src="/images/M.png" alt="MongooDb" />
            <img src="/images/E.png" alt="ExpressJs" />
            <img src="/images/R.png" alt="ReactJs" />
            <img src="/images/N.png" alt="NodeJs" />
        </article>

        <article>
            <img src="/images/SEQUELIZE.png" alt="Sequelize" />
            <img src="/images/SQ.png" alt="SQL" />
            <img src="/images/POSTMAN.png" alt="postman" />
            <img src="/images/JWT.png" alt="jwt" />
        </article>
        <article>
            <img src="/images/EJS.png" alt="Ejs" />
            <img src="/images/html5.png" alt="html" />
            <img src="/images/JS2.png" alt="Js" />
            <img src="/images/CSS.png" alt="CSS" />
            <img src="/images/Bootstrap.png" alt="CSS" />

        </article>

      </section>

      <h2>Algunos de mis proyectos</h2>
    
    <section>

        <ListadoTrabajos limite='2'/>
    </section>

  

    </div>
  )
}
