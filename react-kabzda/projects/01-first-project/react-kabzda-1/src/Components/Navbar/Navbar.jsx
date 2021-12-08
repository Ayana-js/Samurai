import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
    return <nav className={s.nav}>
    <div className={s.item}> 
     <NavLink to="/profile" className={s.item} activeClassName={s.activeLink}> Profile </NavLink>
    </div>
    <div className={s.item}> 
    <NavLink to="/dialogs" className={s.item} activeClassName={s.activeLink}> Messages </NavLink>
    </div>
    <div className={s.item}> 
    <NavLink to="/users" className={s.item} activeClassName={s.activeLink}> Users </NavLink>
    </div>
    <div className={s.item}> 
    <NavLink to="/music" className={s.item} activeClassName={s.activeLink}> Music </NavLink>    
    </div>
    <div className={s.item}> 
    <NavLink to="/settings" className={s.item} activeClassName={s.activeLink}> Settings </NavLink>    
    </div>
    <div className={s.item}> 
    <NavLink to="/login" className={s.item} activeClassName={s.activeLink}> Login </NavLink>    
    </div>
  </nav>
}

export default Navbar;