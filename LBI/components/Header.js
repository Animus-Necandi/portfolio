import React from 'react';
// import header from '../pictures/banniere4.png';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../pictures/logotest17.png';
import Connection from './Connection';
import { Button, Form, FormControl } from 'react-bootstrap';






function Header() {

    return (
        <div className="  container-fluid  bg-dark">
            <div className="row">
                <div className="col d-flex flex-column ">
                    {/* <div className=" headerHaut d-flex justify-content-around ">
                        <img className="logo  " src={logo} alt="orleans" width="200px" height="150px" />
                        <img className="banniere " src={header} alt="orleans" />
                        <div className="cale col-1 "></div>
                    </div> */}
                    <div className=" d-flex  justify-content-around align-items-center">
                        <p className="slogan text-center">Le site qui te rends ta ville plus facile!!</p>
                        <Form inline className=" search ">
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button className="btn-search">Search</Button>
                        </Form>
                        <Connection />
                    </div>
                </div>
            </div>
        </div>

    );

}


export default Header;
