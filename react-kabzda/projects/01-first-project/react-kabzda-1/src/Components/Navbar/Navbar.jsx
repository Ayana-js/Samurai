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
    <NavLink to="/dialogs" className={s.item}> Messages </NavLink>
    </div>
    <div className={s.item}> 
    <NavLink to="/music" className={s.item}> Music </NavLink>    
    </div>
    <div className={s.item}> 
    <NavLink to="/settings" className={s.item}> Settings </NavLink>    
    </div>
    <div className={s.item}> 
    <NavLink to="/dialogs" className={s.item}> Messages </NavLink>    
    </div>
  </nav>
}

export default Navbar;