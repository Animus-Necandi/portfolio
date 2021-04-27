<?php

//Connection à la base de donnée

function dbConnect()
{


    try {


        $bdd = new PDO('mysql:host=localhost;dbname=mission7;charset=utf8', 'root', 'root');
        $bdd->SetAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $bdd;
    } catch (Exception $e) {
        die('Erreur : ' . $e->getMessage());
    }
}
