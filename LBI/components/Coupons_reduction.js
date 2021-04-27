import React from 'react';
import AlertDismissibleExample from './Alert';
import { useHistory } from "react-router-dom";

const DiscountCoupons = () => {

    let history = useHistory();

    setTimeout(() => {
        history.push('/Accueil')
    }, 3000);

    return (
        <div className="container mt-5 page">

            <AlertDismissibleExample />
            <h1>Coupons de réduction</h1>



        </div>
    )
}

export default DiscountCoupons;