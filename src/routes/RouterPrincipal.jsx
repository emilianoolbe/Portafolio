import React from 'react'
import {Routes, Route, NavLink, BrowserRouter} from 'react-router-dom';
import {Inicio} from '../components/Inicio';
import {Portafolio} from '../components/Portafolio';
import {Servicios} from '../components/Servicios';
import {Contacto}  from "../components/Contacto";
import { Header } from '../components/layout/Header';
import { Nav } from '../components/layout/Nav';
import { Footer } from '../components/layout/Footer';

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>

    {/* HEADER Y NAV */}
        <Header />
        <Nav />     

    {/* CONTENIDO PRINCIPAL */}
      <section className='contenido'>
        <Routes>
            <Route path='/' element={<Inicio /> } ></Route>
            <Route path='/portafolio'  element={<Portafolio /> } ></Route>
            <Route path='/servicios'  element={<Servicios /> } ></Route>
            <Route path='/contacto'  element={<Contacto /> } ></Route>
        </Routes>
      </section>
    {/* FOOTER */}
        <Footer />

    </BrowserRouter>
  )
}
