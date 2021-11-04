import React from 'react';
import '../../App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import SidebarDashboard from './SidebarDashboard'; 
import Home from './Home';
import Navbar from './Navbar';
import Reservaciones from './Reservaciones';
import Facturas from './Facturas';
function Dashboard() {
  return (
    <>
    <Navbar/>
    <Router>
        <div id="dashboard" class="container-fluid p-0">
        <div class="row">
        <div class="col-md-2 side">
        <SidebarDashboard />
        </div>
        <div class="col-md-10 p-0 d-inline-block">
        <Switch>
                <Route exact path="/Dashboard" component={(Home)} />
                <Route exact path="/Facturas" component={(Facturas)} />
                <Route exact path="/Reservaciones" component={(Reservaciones)} />

              </Switch>
        </div>
            </div>
          </div>
    </Router>
</>
  );
}

export default Dashboard;
