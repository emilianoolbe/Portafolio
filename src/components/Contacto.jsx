import React from 'react'

export const Contacto = () => {
  return (
    <div className='contacto'>
      <section>
        <article>
          <h2>¡Contáctame!</h2>
          <form action="">
            <input type="text" name='nombre' placeholder='Nombre' />
            <input type="text" name='apellido' placeholder='Apellido' />
            <input type="email" name='email' placeholder='E-mail' />
            <input type="text" name='linkedin' placeholder='Linkedin' />
            <textarea name="motivo" id="" cols="30" rows="10" placeholder='Motivos de contacto'></textarea>
            <input type="submit" value='Enviar'/>
          </form>
        </article>
      </section>
    </div>
  )
}
