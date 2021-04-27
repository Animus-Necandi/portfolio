
import React from 'react'
// import PopEvenement from './popEvenement';
import evenements from '../data/evenement.js';
// import SortieDetails from './SortieDetails';
import { Link } from 'react-router-dom';


function Evenement() {

    const event = evenements.map(({ id, img, titre, date, lieu, categorie }, i) => {

        return (
            <div className="evenement d-flex flex-column align-items-center m-3 " key={i - 0} id={id - 1}>
                <div>
                    <img className="mt-1" src={process.env.PUBLIC_URL + '/evenements/' + img} alt="" width="192px" height="192px" />
                </div>
                <div className=" d-flex flex-column align-items-center m-3 ">
                    <h1> {titre}</h1>
                    <h2>{date}</h2>
                    <h3> {lieu}</h3>
                    <h4>{categorie}</h4>
                </div>
                <div className="d-flex flex-column align-items-center m-3 ">
                    <Link className="btn-evenement text-center" to={`SortieDetails/${id}`}>+ d'infos</Link>
                </div>
                {/* <PopEvenement id={id} eventId={id} /> */}

            </div>
        )

    });

    return (
        <div className="mt-5 page  d-flex flex-wrap justify-content-center align-items-center">
            {event}
        </div>
    )
}

export default Evenement;




