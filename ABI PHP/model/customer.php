<?php
require('../model/bdd.php');

function customerList()
{
    $db = dbConnect();
    $req = $db->query('SELECT customer_name, customer_id, typ_of_cust, field_of_act, turnover, staff, customer_adress, customer_phone, customer_contact,cust_first_contact, customer_comments, commercial_comments FROM customer');

    return $req;
}
