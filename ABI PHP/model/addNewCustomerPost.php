<?php

function valid_donnees($donnees){
    $donnees = trim($donnees);
    $donnees = stripslashes($donnees);
    $donnees = htmlspecialchars($donnees);
    $donnees = addslashes($donnees);
    return $donnees;
}

    
function ContactPhone2() {

if (!isset($_POST['contactPhone2'])){
          
        $contactPhone2 = preg_match($regPhone,$contactPhone2);
    }else{
        $contactPhone2 = NUll;
    }

    return $contactPhone2;
}

function ContactMail2() {

       if (!isset($_POST['contactMail2'])){
              
            $contactMail2 = preg_match($regMail,$contactMail2);
        }else{
            $contactMail2 = NUll;
        }
    
        return $contactMail2;
    }

function ContactPhone3() {

if (!isset($_POST['contactPhone3'])){
          
        $contactPhone3 = preg_match($regPhone,$contactPhone3);
    }else{
        $contactPhone3 = NUll;
    }

    return $contactPhone3;
}

function ContactMail3() {

       if (!isset($_POST['contactMail3'])){
              
            $contactMail3 = preg_match($regMail,$contactMail3);
        }else{
            $contactMail3 = NUll;
        }
    
        return $contactMail3;
    }



function AddNewCustomer()
{

    
    $companyName = valid_donnees($_POST['companyName']);
    $clientAdress =valid_donnees($_POST['clientAdress']);
    $clientPhone = valid_donnees($_POST['clientPhone']);
    $clientActivity = valid_donnees($_POST['clientActivity']);
    $clientStaff = valid_donnees($_POST['clientStaff']);
    $clientTurnover = valid_donnees($_POST['clientTurnover']);
    $clientType = valid_donnees($_POST['clientType']);
    $primaryNature= valid_donnees($_POST['primaryNature']);
    $contact1= valid_donnees($_POST['contact1']);
    $contactPhone1 = valid_donnees($_POST['contactPhone1']);
    $contactMail1 = valid_donnees($_POST['contactMail1']);
    $contactDepartment1=valid_donnees($_POST['contactDepartment1']);
    $contact2= valid_donnees($_POST['contact2']);
    $contactPhone2 = valid_donnees($_POST['contactPhone2']);
    $contactMail2 = valid_donnees($_POST['contactMail2']);
    $contactDepartment2= valid_donnees($_POST['contactDepartment2']);
    $contact3= valid_donnees($_POST['contact3']);
    $contactPhone3 = valid_donnees($_POST['contactPhone3']);
    $contactMail3 = valid_donnees($_POST['contactMail3']);
    $contactDepartment3= valid_donnees($_POST['contactDepartment3']);
    $comercialComments = valid_donnees($_POST['comercialComments']);

    

    $regMail="#^[0-9a-z._-]+@[a-z0-9_._]{2,}\.[a-z]{2,4}$#";
    $regPhone = "#^[0-9]{2}[-/ ]?[0-9]{2}[-/ ]?[0-9]{2}[-/ ]?[0-9]{2}[-/ ]?[0-9]{2}?$#";
   

    ContactPhone2();
    ContactMail2();
    ContactPhone3();
    ContactMail3();
    

    if ( !empty($_POST['companyName']) && !empty($_POST['clientAdress']) && !empty($_POST['clientPhone']) && !empty($_POST['clientActivity']) && !empty($_POST['primaryNature']) && !empty($_POST['contact1']) && !empty($_POST['contactPhone1']) && !empty($_POST['contactDepartment1']) &&  preg_match($regPhone,$clientPhone) && preg_match($regPhone,$contactPhone1) && preg_match($regMail,$contactMail1)) 
    {

        require('../model/bdd.php');
        $bdd = dbConnect();
        $req = $bdd->prepare('INSERT INTO customer (customer_name, customer_adress, customer_phone, field_of_act, staff, turnover, typ_of_cust, customer_nature, cust_first_contact, cfc_phone, cfc_mail, cfc_dept, cust_second_contact, csc_phone, csc_mail, csc_dept, cust_third_contact, ctc_phone, ctc_mail, ctc_dept, commercial_comments ) VALUES(:customer_name, :customer_adress, :customer_phone, :field_of_act, :staff, :turnover, :typ_of_cust, :customer_nature, :cust_first_contact, :cfc_phone, :cfc_mail, :cfc_dept, :cust_second_contact, :csc_phone, :csc_mail, :csc_dept, :cust_third_contact, :ctc_phone, :ctc_mail, :ctc_dept, :commercial_comments)');
        $req->execute(array(':customer_name' => $companyName, ':customer_adress' => $clientAdress, ':customer_phone' => $clientPhone, ':field_of_act' => $clientActivity, ':staff' => $clientStaff, ':turnover' => $clientTurnover, ':typ_of_cust' => $clientType, ':customer_nature' => $primaryNature, ':cust_first_contact' => $contact1, ':cfc_phone' => $contactPhone1, ':cfc_mail' => $contactMail1, ':cfc_dept' => $contactDepartment1, ':cust_second_contact' => $contact2, ':csc_phone' => $contactPhone2, ':csc_mail' => $contactMail2, ':csc_dept' => $contactDepartment2, ':cust_third_contact' => $contact3, ':ctc_phone' => $contactPhone3, ':ctc_mail' => $contactMail3, ':ctc_dept' => $contactDepartment3, ':commercial_comments' => $comercialComments));

    }else{echo "Une erreur est survenue, veuillez refaire votre saisie";}
    
}