import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout }from '../actions/auth';


export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container"> 
            <div className="header__content"> 
                <h1 className="header__title">Professional Development Planner</h1>
                <button className="button__logout" onClick={startLogout}>Logout</button>
            </div>
        
            <ul className="header__ul">
                <li className="header__li"> <NavLink className="header__nav-link" to="/home" activeClassName="is-active">Home</NavLink> </li>
                <li className="header__li"> <NavLink className="header__nav-link" to="/dashboard" activeClassName="is-active">Goals</NavLink> </li>
                <li className="header__li"> <NavLink className="header__nav-link" to="/form-generator" activeClassName="is-active">Report</NavLink> </li>
            </ul>
    </div>
    </header>
); 

const mapDispatchtoProps= (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
export default connect(undefined, mapDispatchtoProps)(Header);