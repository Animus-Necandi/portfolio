<?php

//Connection à la base de donnée

function dbConnect()
{


    try {


        $bdd = new PDO('****);
        $bdd->SetAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $bdd;
    } catch (Exception $e) {
        die('Erreur : ' . $e->getMessage());
    }
}
