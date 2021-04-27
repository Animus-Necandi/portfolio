import { Card } from 'react-bootstrap';
import React from 'react';
import articles from '../data/articles';
import { Link } from 'react-router-dom'

function Articles(props) {

    let idNumber = (props.idArticle - 1).toString();

    return (


        <Card key={props.idArticle} style={{ width: '25rem' }} className="articlesCard container d-flex  justify-content-center">
            <Card.Body>
                <Card.Title>{articles[idNumber].date} </Card.Title>
                <Card.Title>{articles[idNumber].titre} </Card.Title>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/articles/' + articles[idNumber].photo} />
                <Card.Text>
                    {articles[idNumber].accroche}
                    <br /><br />
                    {articles[idNumber].contenu}
                </Card.Text>
                <Link className="btn-retour" to="/Accueil">Retour</Link>

            </Card.Body>
        </Card>

    )
}

export default Articles;


