import React from 'react';
// import AlertDismissibleExample from './Alert';
// import { useHistory } from "react-router-dom";
import Blog from './Blog';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';



const MonBlog = () => {

    return (


        <div className="home container-fluid page">

            <div className="row">

                <div className="col-2">
                    <AsideLeft />
                </div>

                <div className="col-8">
                    <Blog />

                </div>

                <div className="col-2">
                    <AsideRight />
                </div>

            </div>



        </div>

    )
}

export default MonBlog;