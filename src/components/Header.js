import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout }from '../actions/auth';


export const Header = ({ startLogout }) => (
    <header>
        <h1>Professional Development Planner</h1>
        <NavLink to="/home" activeClassName="is-active">Home</NavLink>
        <NavLink to="/dashboard" activeClassName="is-active">Goals</NavLink>
        <NavLink to="/form-generator" activeClassName="is-active">FormGenerator</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
); 

const mapDispatchtoProps= (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
export default connect(undefined, mapDispatchtoProps)(Header);