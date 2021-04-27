import React from 'react';
import sorties from '../data/sorties';
import { NavLink } from 'react-router-dom';



const SEListe = sorties.map(({ date, heure, organisateur, titre, lien }, i) => {

    let inscriptionLink = `/${lien}`;

    return (



        <tbody key={i}>
            <tr className="border">
                <td className="p-1">{date}</td>
                <td>{heure}</td>
                <td>{organisateur}</td>
                <td className="linkSortie" ><NavLink to={inscriptionLink}>{titre}</NavLink></td>
            </tr>
            <hr className="bg-white m-1 p-0"></hr>
        </tbody>




    )
})



export default SEListe;

