import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import repertoireAlpha from '../data/repertoireAlpha';
import { NavLink } from 'react-router-dom';







function DirectoryAlpha() {

    const annuaire = repertoireAlpha.map(({ lettre, content }, i) => {
        let listeSocietes = content.split(',');



        const liste = listeSocietes.map(e => {

            let link = `/${e}`
            console.log(link);

            return (

                <div><NavLink to={link} >{e}</NavLink></div>
            )
        });

        ; return (
            <Accordion className="w-100" defaultActiveKey="1">
                <Card className="d-flex flex-column align-items-center justify-content-center">

                    <Accordion.Toggle className="d-flex justify-content-center w-100" as={Card.Header} eventKey="0">
                        <div id="societe" key={i} className="border m-2 d-flex flex-row" >
                            <div><p className="rep">{lettre}</p>
                            </div>
                            <div className=" d-flex justify-content-center">
                                <p className="ml-5 pl-5"></p>
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

export default DirectoryAlpha;


