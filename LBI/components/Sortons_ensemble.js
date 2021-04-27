import React from 'react';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';
import { Link } from 'react-router-dom';
import SEListe from './SEListeSorties';

const AllOut = (props) => {




    return (
        <div className="container-fluid page">
            <div className="row">

                <div className="col-2">
                    <AsideLeft />
                </div>

                <div className="col-8">
                    <div className="m-5">
                        <h1 className="m-2">Faites connaissance avec les membres de LBI! Organisez-vous des sorties. Aidez-vous de la page <Link to="/Sorties" >Sorties</Link> pour trouver la sortie qui vous convient le mieux!</h1>
                        <a href="http://localhost:81/TP/blog/" >Blog</a>

                    </div>


                    <div className="container page  col-10  justify-content-center align-items-center ">
                        <form className=" ">
                            <table id="nothing" className="tableSorties  ">
                                <thead >
                                    <tr>
                                        <th>Date</th>
                                        <th>Heure</th>
                                        <th>Organisateur</th>
                                        <th>Titre Sortie</th>
                                    </tr>
                                </thead>

                                {SEListe}
                            </table>
                        </form>




                    </div>

                </div>

                <div className="col-2">
                    <AsideRight />
                </div>

            </div>



        </div>
    )
}

export default AllOut;