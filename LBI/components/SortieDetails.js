import React from 'react';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';
import evenements from '../data/evenement.js';
import { useParams, Link } from "react-router-dom";



const SortieDetails = () => {


    let { id } = useParams();


    const info = evenements[id - 1];



    return (

        < div className="sortieDetail container-fluid page" >
            <div className="row">

                <div className="col-2">
                    <AsideLeft />
                </div>

                <div className="sortiesCard col-8 mt-5">
                    <div className="m-5">
                        <div className="mb-2">
                            <Link className="btn-retour" to="/Sorties">Retour</Link>
                        </div>
                        <div className="d-flex justify-content-between">
                            <img className="sortiesImg mt-1" src={process.env.PUBLIC_URL + '/evenements/' + info.img} alt="" width="500px" height="380px" />
                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <h1> {info.titre}</h1>
                                <h2>{info.date}</h2>
                                <h3> {info.lieu}</h3>
                                <p><a href="/Sortons_ensemble">Créer/Rejoignez une sortie pour cet évènement!</a></p>
                                <p className="w-75 text-justify">Détails sortie: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptate nam odit corrupti? Nemo similique quas veritatis, sapiente placeat dolore asperiores in ad repellendus labore, repellat autem non sint quae!  </p>
                            </div>
                        </div>
                        <div className="d-flex ">
                            <div className="d-flex flex-column m-5 ">
                                <p>{info.h1}</p>
                                <p>{info.h2}</p>

                            </div>
                            <div className="d-flex flex-column m-5 ">

                                <p>{info.tarif}</p>
                                <p> Lien évenement</p>
                            </div>
                            <div className="d-flex flex-column m-5 ">
                                <p>Accès via Google Map </p>
                                <img className="mt-1" src={process.env.PUBLIC_URL + '/evenements/' + info.carte} alt="" height="200px" width="400px" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-2">
                    <AsideRight />
                </div>

            </div>



        </div >

    )
}


export default SortieDetails;