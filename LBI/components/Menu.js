import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../pictures/logotest17.png';





function Menu() {
    return (
        <container-fluid >
            <Navbar bg="dark" expand="lg" sticky="top" navbar="dark" >
                <Navbar.Brand href="/Accueil"><img src={logo} alt="" width="35px" height="35px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                        <NavLink to="/Accueil" >Home</NavLink>
                        <NavLink to="/Annuaire">Annuaire</NavLink>
                        <div id="AnnuaireMenu"></div>
                        <NavLink to="/Sorties">Sorties</NavLink>
                        <NavLink to="/MonBlog">Mon Blog</NavLink>
                        <NavLink to="/Coupons_reduction">Coupons de réduction</NavLink>
                        <NavLink to="/Sortons_ensemble">Sortons Ensemble!</NavLink>
                        <NavLink to="/Offres_d_emplois"> Offres d'emplois </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </container-fluid>

    )
}

export default Menu;
