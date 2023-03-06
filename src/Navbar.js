import React from 'react'
import { BrowserRouter, Route, Routes, Link, Outlet,NavLink } from "react-router-dom";
import { useGlobalContext } from './Context';

const Navbar = () => {
  const {issideopen , closesidebar,opensidebar}=useGlobalContext()
  return (
    <>
      <header className='header'>
        <nav>
          <img className='logo' src='starter-code\assets\shared\logo.svg'  />
          <ul className='navul'>


            <li> <NavLink to='/'> Home</NavLink></li>
            <li><NavLink to='/destination'> Destination</NavLink> </li>
            <li> <NavLink to='/crew'> Crew </NavLink></li> 
            <li> <NavLink to='/technology'> Technology </NavLink></li>



          </ul>

          <img src='starter-code\assets\shared\icon-hamburger.svg' onClick={opensidebar}  className='hamburger' />
        </nav>

      </header>
    </>

  )
}

export default Navbar