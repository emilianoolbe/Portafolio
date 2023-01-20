import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';

export const Detalle = () => {

  const [proyecto, setProyecto] = useState([]);
  const params = useParams();

  useEffect(() => {
    let proyecto = trabajos.filter(element => element.id === params.id)
    setProyecto(proyecto[0]) //Paso array por que tengo un proyecto
  }, []);


  return (
    <div className='detalle'>
      <h1>Proyecto: {proyecto.nombre} </h1>

      <div className='mask-detalle'>
          <img src={`/images/${proyecto.id}.png`} alt="" />
      </div>
      
      <hr />

      <div className='informacion-detalle'>
          <p>{proyecto.tecnologias}</p>
          <p><p>{proyecto.descripcion}</p></p>
          <a href='#/' target='_blank'>Ir al proyecto</a>
      </div>
    </div>
  )
}
