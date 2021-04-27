import React from 'react';
import Evenement from './Evenement';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';




const Outings = (props) => {

    return (

        <div className="container-fluid page">
            <div className="row">

                <div className="col-2">
                    <AsideLeft />
                </div>


                <div className="container mt-5 page  d-flex flex-column align-items-center">

                    <h1>Sorties et évènements</h1>

                    <h2><Link to='/Sortons_ensemble'>Organisez vos sorties avec les autres membres!</Link></h2>

                    <div className="w-100">
                        <container-fluid class=" d-flex justify-content-center" >
                            <Navbar className="sortiesMenu w-100 " bg="dark" expand="lg" sticky="top" navbar="dark"  >
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="sortiesMenu navbarre mr-auto ml-auto d-flex flex-row align-items-center justify-content-center">
                                        <NavLink className="sorties" to="/Accueil" >Aujourd'hui </NavLink>
                                        <p className="pAnnuaire">|</p>
                                        <NavLink className="sorties" to="/Accueil" >Ce Week-End </NavLink>
                                        <p className="pAnnuaire">|</p>
                                        <NavLink className="sorties" to="/Accueil">Ce mois ci</NavLink>

                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </container-fluid>
                    </div>
                    <div >
                        <Evenement />

                    </div>



                </div>
                <div className="col-2">
                    <AsideRight />
                </div>

            </div>



        </div>
    )
}

export default Outings;