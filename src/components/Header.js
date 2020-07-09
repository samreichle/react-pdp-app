import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
    <header>
        <h1>Professional Development Planner</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/goals-dashboard" activeClassName="is-active">Goals</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Goal</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>

    </header>
); 

export default Header;