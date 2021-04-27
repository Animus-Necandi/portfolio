import React from 'react';
import left from '../pictures/articles/left.jfif'



function AsideLeft() {

    return (


        <div className="mt-5 d-none d-lg-block">

            <h1 >MENU GAUCHE</h1>
            <div className="mt-5"><img className=" col imgRight" src={left} alt="left" /></div>
            <hr></hr>



        </div>
    )
}

export default AsideLeft;