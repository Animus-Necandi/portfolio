import React from 'react';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import DirectoryAlpha from './RepertoireAlpha';




function ProfessionalDirectoryAlpha() {

    return (
        <div className="container-fluid page">
            <div className="row">

                <div className="col-2">
                    <AsideLeft />
                </div>

                <div className="col-8">
                    <div className="m-5">

                        <div className="m-5">
                            <h1 className="m-2">Découvrez nos commerçants et nos artisants!</h1>
                            <p className="m-3">Retrouvez l'ensemble des artisants et commerçants partenaires. Ils ont besoins de nous comme nous avons besoin d'eux. Quel meilleur moyen que de les découvrirs à partir d'une page dédiée? Vous pourrez apprécier un moment qu'ils ont bien voulu partager avec nous en retrouvant toutes les informations nécessaires à leur sujet. Et même que certains vous réserverons une surprise commerciale!  </p>
                            <p className="m-3">Au palet d'or est le seul commercant en démonstration pour le moment, merci de votre compréhension.</p>
                        </div>
                        <div className="repertoire">

                            <container-fluid class="d-flex justify-content-center" >
                                <Navbar bg="dark" expand="lg" sticky="top" navbar="dark" className="w-75 menuAnnuaire ">
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="navbarre mr-auto ml-auto">
                                            <NavLink to="/Annuaire" >Répertoire par catégorie</NavLink>
                                            <p className="pAnnuaire">|</p>
                                            <NavLink to="/AnnuaireAlpha">Répertoire Alphabétique</NavLink>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>
                            </container-fluid>
                            <DirectoryAlpha />



                        </div>
                    </div>
                </div>

                <div className="col-2">
                    <AsideRight />
                </div>

            </div>
        </div>
    )


}

export default ProfessionalDirectoryAlpha;