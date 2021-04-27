import React from 'react';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';
import { Carousel } from 'react-bootstrap';
import lisere from '../pictures/lisere.png';






function AuPaletDOr() {

    return (
        <div className="container-fluid page">
            <div className="row">

                <div className="col-2">
                    <AsideLeft />
                </div>

                <div className="col-8">
                    <div className="m-5">
                        <div>
                            <h1 className='m-5'>Au Palet d'Or</h1>

                            <div className="blocPhoto d-flex ">
                                <div> <img className="imgArticle" src={process.env.PUBLIC_URL + '/img/auplatdor.png'} alt="" width="400" height="250" />
                                </div>
                                <div className="m-3 d-flex flex-column align-items-center justify-content-center">
                                    <h2>Stéphane Manigaut, artisan Pâtissier Chocolatier</h2>
                                    <div className=" pt-5 m-3 border d-flex flex-column align-items-center justify-content-center"><p>15 Rue Bannier, 45000 Orléans</p>
                                        <p> Tél: 02 38 53 22 70</p>
                                        <a href="https://www.palets-or.com/stephane-manigaut-artisan-patissier-chocolatier/" target="_blank" rel="noreferrer">Au Palet D'or</a>
                                    </div>
                                </div>
                            </div>

                            <div className=" d-flex flex-column align-items-center justify-content-center m-5">
                                <h1>Présentation</h1>
                                <p>Issu de 4 générations de pâtissier et boulanger, Stéphane a naturellement choisi la voie de la gourmandise et s’est spécialisé dans la pâtisserie et la chocolaterie.</p>

                                <p>Après ses début en 1991 dns une grande maison parisienne , Peltier, un des membres fondateurs de l’association relais dessert, il poursuit sa carrière au Japon tout d’abord en 1999 puis sur l’ile des Bermudes en 2001 ou il découvre la pâtisserie de restauration auprès d’un meilleur ouvrier de France.</p>

                                <p>C’est de retour en France, dans un restaurant en Champagne qu’il rencontre Agnès, son épouse, avec qui, il reprend la pâtisserie Aux Palets or à Orléans en 2004.</p>

                                <p>Depuis tous les deux et leur équipe n’ont de cesse de vous accompagner dans vos moments de plaisirs sucrés et de vos fêtes de famille, anniversaire, communion, batpème, mariage….</p>
                                <div className="d-flex flex-column align-items-center justify-content-center">
                                    <div><img className="m-5" src={lisere} alt="lisere" /></div>
                                    <h2>Bons plans</h2>
                                    <h1 className="text-danger font-weight-bold" id="blinker" >En ce moment: -10% sur tous les Macarons!</h1>
                                </div>
                                <div><img className="m-5" src={lisere} alt="lisere" /></div>
                                <h1>Produits et services</h1>
                                <div className="d-flex justify-content-center">
                                    <div><Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block "
                                                src={process.env.PUBLIC_URL + '/img/AuPaletDOrCarroussel1.jpg'}
                                                alt="First slide"
                                                width="340px"
                                                height="340px"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block "
                                                src={process.env.PUBLIC_URL + '/img/AuPaletDOrCarroussel2.jpg'}
                                                alt="Second slide"
                                                width="340px"
                                                height="340px"
                                            />

                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block "
                                                src={process.env.PUBLIC_URL + '/img/AuPaletDOrCarroussel3.jpg'}
                                                alt="Third slide"
                                                width="340px"
                                                height="340px"
                                            />

                                        </Carousel.Item>
                                    </Carousel>
                                    </div>
                                    <div className="m-5">
                                        <h3>Nos spécialités: Les pavés du Martroi et le O d'Orléans. Retrouvez également nos succelentes Patisseries, Chocolats, Petits plaisirs, Macarons</h3>
                                    </div>
                                </div>
                                <div><img className="m-5" src={lisere} alt="lisere" /></div>
                                <div className="d-flex justify-content-center mt-5">
                                    <div><Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block "
                                                src={process.env.PUBLIC_URL + '/img/AuPaletDOrCarroussel4.png'}
                                                alt="First slide"
                                                width="340px"
                                                height="340px"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block "
                                                src={process.env.PUBLIC_URL + '/img/AuPaletDOrCarroussel5.png'}
                                                alt="Second slide"
                                                width="340px"
                                                height="340px"
                                            />

                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block "
                                                src={process.env.PUBLIC_URL + '/img/AuPaletDOrCarroussel6.png'}
                                                alt="Third slide"
                                                width="340px"
                                                height="340px"
                                            />

                                        </Carousel.Item>
                                    </Carousel>
                                    </div>
                                    <div className="m-5">
                                        <h3>Les pots givrés, le fraisier glacé, Macaron glacé et bien d'autres délices vous attendent</h3>
                                    </div>
                                </div>
                                <div><img className="m-5" src={lisere} alt="lisere" /></div>
                                <h1>Horaires, Accès</h1>
                                <div className="d-flex justify-content-between m-5">
                                    <div>
                                        <img
                                            className="d-block mr-5"
                                            src={process.env.PUBLIC_URL + '/img/AuPaletDOrMap.png'}
                                            alt="First slide"
                                            width="535px"
                                            height="245px"
                                        />
                                    </div>
                                    <div>

                                        <h3>Près de la place du marché</h3>
                                    </div>
                                </div>
                                <div><img className="m-5" src={lisere} alt="lisere" /></div>
                                <div className="m-5 border border-dark rounded">
                                    <h3>Du mardi au jeudi de 9h30 à 12h30 et de 15h à 19h</h3>
                                    <h3>Le vendredi de 9h30 à 12h et de 14h30 à 19h</h3>
                                    <h3>Le samedi de 9h à 12h30 et de 14h à 19h</h3>
                                    <h3>Fermé le dimanche sauf jours fériés de 9h30 à 12h30</h3>
                                </div>
                                <div><img className="m-5" src={lisere} alt="lisere" /></div>
                                <h1>Témoignages</h1>
                                <div className="border border-dark rounded p-5">
                                    <p><span className="name font-weight-bold">Paul: </span> Moi et ma famille allons régulièrement au Palet d'Or car les produits sont absolument fabuleux et délicieux!</p>
                                    <p><span className="name font-weight-bold">Sophie: </span>Je recommande!</p>
                                    <p><span className="name font-weight-bold">Marc: </span>A chaque commande, une nouvelle découverte! Que du bonheur! Merci à vous!</p>

                                </div>

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

export default AuPaletDOr;

