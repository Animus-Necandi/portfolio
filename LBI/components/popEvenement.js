
import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import evenements from '../data/evenement.js';




const PopEvenement = (props) => {

    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);
    const info = evenements[props.id - 1];
    const idNew = props.id - 1;


    return (
        <div className="evenementCard" key={idNew}>
            <Button id="popover1" type="button" className="btn-evenement">
                + d'infos
            </Button>
            <Popover placement="bottom" isOpen={popoverOpen} target="popover1" toggle={toggle} trigger="focus" >

                <PopoverHeader>{evenements[idNew].titre}</PopoverHeader>
                <PopoverBody className="popEvenement d-flex flex-column align-items-center justify-content-center">
                    <img className="mt-1" src={process.env.PUBLIC_URL + '/evenements/marche.jfif'} alt="" />
                    <h1> {info.titre}</h1>
                    <h2>{info.date}</h2>
                    <h3> {info.lieu}</h3>
                    <div className="d-flex ">
                        <div className="d-flex flex-column m-5 ">
                            <p>{info.h1}</p>
                            <p>{info.h2}</p>
                            <p>{info.tarif}</p>
                        </div>
                        <div className="d-flex flex-column m-5 ">

                            <p><a href="/Sortons_ensemble">Créer/Rejoignez une sortie pour cet évènement!</a></p>
                            <p> Lien évenement</p>
                        </div>
                        <div className="d-flex flex-column m-5 ">
                            <p>Accès par carte </p>
                            <img className="mt-1" src={process.env.PUBLIC_URL + '/evenements/' + info.carte} alt="" height="200px" width="400px" />

                        </div>
                    </div>
                    <p>Contact évenement</p>
                    <h4>{info.categorie}</h4>

                </PopoverBody>
            </Popover>
        </div>
    );

}





export default PopEvenement;



