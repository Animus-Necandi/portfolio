import React from 'react';
import LastArticle from './aLaUne';
import articles from '../data/articles';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';
import header from '../pictures/banniere5.png';






const Home = () => {
    return (

        <div className="home container-fluid page">
            <div className="headerHaut"><img src={header} alt="" width="100%" height="400px" /></div>
            <div className="row">

                <div className="col-2">
                    <AsideLeft />
                </div>

                <div className="col-8">
                    <div className="m-5">
                        <h1 className="m-2">Bienvenue sur le site de la bonne info, région Orléans et alentours!</h1>
                        <p className="m-3">Retrouvez pleins d'informations sur vos commerçants locaux et pleins de super bons plans!
                        Vous avez accéder à un contenu de sorties pour lesquelles vous aurez la possibilité de rejoindre la communauté sur un forum pour vous organiser des rencontres.</p>
                    </div>


                    <div className="container page">
                        <div className="row">
                            <div className="col d-flex flex-column justify-content-center align-items-center">
                                <LastArticle idArticle={articles} />
                            </div>
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

export default Home;