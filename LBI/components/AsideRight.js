import React from 'react';
import right from '../pictures/articles/right.jfif'
import right1 from '../pictures/articles/right1.jfif'
import right3 from '../pictures/articles/right3.jfif'



function AsideRight() {

    return (


        <div className="mt-5 d-none d-lg-block">

            <h1>MENU DROIT</h1>
            <div className="mt-5"><img className=" col imgRight" src={right} alt="right" /></div>
            <hr></hr>
            <div><img className=" col imgRight" src={right1} alt="right1" /></div>
            <hr></hr>
            <div><img className=" col imgRight" src={right3} alt="right3" /></div>
            <hr></hr>


        </div>

    )
}

export default AsideRight;
