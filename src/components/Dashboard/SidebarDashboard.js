import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './SidebarStyle.css';


function Sidebar() {
    return (
        <div className="sidebar col-md-2">
            <div className="active">
                <Link to={'/Dashboard'}>
                    <span className="material-icons mr-3">home</span>
                    Inicio
                </Link>
            </div>
            <div className="non-active">
                <Link to={'/Reservaciones'}>
                    <span className="material-icons mr-3">today</span> Reservaciones
                </Link>
            </div>
            <span className="non-active">
                <Link to={'/Facturas'}>
                    <span className="material-icons mr-3" >receipt_long</span>Facturas
                </Link>
            </span>
            
        </div>

    );
}

export default Sidebar;