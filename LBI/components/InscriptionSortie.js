import React from 'react';
import AlertDismissibleExample from './Alert';
import { useHistory } from "react-router-dom";

const InscriptionSortie = () => {

    let history = useHistory();
    setTimeout(() => {
        history.push('/Sortons_ensemble')
    }, 3000);


    return (
        <div className="container mt-5 page">

            <AlertDismissibleExample />
            <h1>Page pour s'inscrire à la sortie ciblée.</h1>
            <div><p>Info sortie ( Intitulé, date, heure, heure max d'inscription, nombre de place, lieu, catégorie, tarif)</p></div>
            <div><p>Fiche organisateur (pseudo, photo, tél, réseau social, mail)</p></div>
            <div><p>Présentation de la sortie, précisons pour se retrouver</p></div>
            <div><p>Liste participants</p></div>
            <div><p>Inscription ou désinscription à la sortie</p></div>
            <div><p>Carte accès google map</p></div>
            <div><p>Commentaires (à bloquer après le début de l'heure de la sortie)</p></div>


        </div>
    )
}

export default InscriptionSortie;