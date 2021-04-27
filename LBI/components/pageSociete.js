import React from 'react';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';
import societes from '../data/societe'




function Company() {

    return (
        <div className="container-fluid page">
            <div className="row">

                <div className="col-2">
                    <AsideLeft />
                </div>

                <div className="col-8">
                    <div className="m-5">
                        <div>
                            <h1>{societes[1].name}</h1>
                            <p>{societes[1].tel}</p>
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

export default Company;