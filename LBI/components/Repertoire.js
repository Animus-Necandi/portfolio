import React from 'react';
import repertoire from '../data/repertoire';
import { Accordion, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';







function Directory() {

    const annuaire = repertoire.map(({ lettre, categorie, content }, i) => {
        let listeSocietes = content.split(',');


        const liste = listeSocietes.map(e => {

            let link = `/${e}`

            return (

                <div><NavLink to={link} >{e}</NavLink></div>
            )
        });

        ; return (
            <Accordion className="w-100" defaultActiveKey="1" key={i}>
                <Card className="d-flex flex-column align-items-center justify-content-center">

                    <Accordion.Toggle className="d-flex justify-content-center w-100" as={Card.Header} eventKey="0">
                        <div id="societe" className="border m-2 d-flex flex-row" >
                            <div><p className="rep">{lettre}</p>
                            </div>
                            <div className=" d-flex justify-content-center">
                                <p className="ml-5 pl-5">SOCIETES TYPE: {categorie}</p>
                            </div>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse className="w-50" eventKey="0">
                        <Card.Body className="d-flex justify-content-center listes">
                            <div className=" m-2 d-flex flex-row" >

                                <div>{liste}</div>

                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    })

    return (

        <div className="col d-flex flex-column justify-content-center align-items-center">
            {annuaire}
        </div>
    )
}

export default Directory;


