let clientA = ["Clairon", "02 54 39 18 74", "3 rue des pivoines 75000 Paris", "13/12/2019", "Nissim", "clairon@afpa.fr", "Contrat Insane", "A rencontrer - URGENT", "no contact"]
let clientB = ["Fatbat", "04 54 39 18 36", "10 rue des anges 29000 Rennes", "27/11/2020", "Micha", "fatbat@afpa.fr", "Contrat  à revoir pour la livraison", "MAJ pour 2021", "no contact"]
let clientC = ["Truchaud", "06 54 39 18 22", "6 juin 1944 18000 Bourges", "15/07/2020", "Gabriel", "truchaud@afpa.fr", "Contrat a renouvellement automatique", "Revoir le tarif annuel", "Mickael de Clairon: 06 54 78 21 95"]


let bname = "Clairon";
let clientA1 = document.getElementsByClassName("clientA");
let clientB1 = document.getElementsByClassName("clientB");
let clientC1 = document.getElementsByClassName("clientC")

let regString = new RegExp("^[A-Za-z0-9 \.\*\+\(\)'\?\!,@\$\#-]{1,1000}$");
let regTel = new RegExp("^0[0-7]([-. ]?[0-9]{2}){4}$");
let regMail = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$");
let regDate = new RegExp("^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)[0-9]{4}$");

//Fonction recherche au fur et à mesure de la saisie
function searche() {
    let input, tr, tbody, filter, txtValue, customerSearch, i;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    tbody = document.getElementById("searchTable");
    tr = tbody.getElementsByTagName('tr');


    for (i = 0; i < tr.length; i++) {
        customerSearch = tr[i].getElementsByTagName("span")[0];
        txtValue = customerSearch.textContent || customerSearch.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}



//fonctions de consultations/changements qui envoie les données en sessionStorage

function consultA() {

    if (clientA1) {
        window.event.returnValue = false;
        sessionStorage.setItem("customer_name", clientA[0]);
        sessionStorage.setItem("phone", clientA[1]);
        sessionStorage.setItem("adress", clientA[2]);
        sessionStorage.setItem("last_contact", clientA[3]);
        sessionStorage.setItem("contact", clientA[4]);
        sessionStorage.setItem("social_name", clientA[5]);
        sessionStorage.setItem("specification", clientA[6]);
        sessionStorage.setItem("coment", clientA[7]);
        sessionStorage.setItem("friendly_contact", clientA[8]);
        window.location = './gc_client.html';
    }

    else { alert('une erreur c\'est produite!') }

}

function consultB() {

    if (clientB1) {
        window.event.returnValue = false;
        sessionStorage.setItem("customer_name", clientB[0]);
        sessionStorage.setItem("phone", clientB[1]);
        sessionStorage.setItem("adress", clientB[2]);
        sessionStorage.setItem("last_contact", clientB[3]);
        sessionStorage.setItem("contact", clientB[4]);
        sessionStorage.setItem("social_name", clientB[5]);
        sessionStorage.setItem("specification", clientB[6]);
        sessionStorage.setItem("coment", clientB[7]);
        sessionStorage.setItem("friendly_contact", clientB[8]);
        window.location = './gc_client.html';
    }

    else { alert('une erreur c\'est produite!') }

}

function consultC() {

    if (clientC1) {
        window.event.returnValue = false;
        sessionStorage.setItem("customer_name", clientC[0]);
        sessionStorage.setItem("phone", clientC[1]);
        sessionStorage.setItem("adress", clientC[2]);
        sessionStorage.setItem("last_contact", clientC[3]);
        sessionStorage.setItem("contact", clientC[4]);
        sessionStorage.setItem("social_name", clientC[5]);
        sessionStorage.setItem("specification", clientC[6]);
        sessionStorage.setItem("coment", clientC[7]);
        sessionStorage.setItem("friendly_contact", clientC[8]);
        window.location = './gc_client.html';
    }
    else { alert('une erreur c\'est produite!') }

}

function changeA() {

    if (clientA1) {
        window.event.returnValue = false;
        sessionStorage.setItem("customer_name", clientA[0]);
        sessionStorage.setItem("phone", clientA[1]);
        sessionStorage.setItem("adress", clientA[2]);
        sessionStorage.setItem("last_contact", clientA[3]);
        sessionStorage.setItem("contact", clientA[4]);
        sessionStorage.setItem("social_name", clientA[5]);
        sessionStorage.setItem("specification", clientA[6]);
        sessionStorage.setItem("coment", clientA[7]);
        sessionStorage.setItem("friendly_contact", clientA[8]);
        window.location = './gc_client_modif.html';
    }

    else { alert('une erreur c\'est produite!') }

}

function changeB() {

    if (clientB1) {
        window.event.returnValue = false;
        sessionStorage.setItem("customer_name", clientB[0]);
        sessionStorage.setItem("phone", clientB[1]);
        sessionStorage.setItem("adress", clientB[2]);
        sessionStorage.setItem("last_contact", clientB[3]);
        sessionStorage.setItem("contact", clientB[4]);
        sessionStorage.setItem("social_name", clientB[5]);
        sessionStorage.setItem("specification", clientB[6]);
        sessionStorage.setItem("coment", clientB[7]);
        sessionStorage.setItem("friendly_contact", clientB[8]);
        window.location = './gc_client_modif.html';
    }

    else { alert('une erreur c\'est produite!') }

}

function changeC() {

    if (clientC1) {
        window.event.returnValue = false;
        sessionStorage.setItem("customer_name", clientC[0]);
        sessionStorage.setItem("phone", clientC[1]);
        sessionStorage.setItem("adress", clientC[2]);
        sessionStorage.setItem("last_contact", clientC[3]);
        sessionStorage.setItem("contact", clientC[4]);
        sessionStorage.setItem("social_name", clientC[5]);
        sessionStorage.setItem("specification", clientC[6]);
        sessionStorage.setItem("coment", clientC[7]);
        sessionStorage.setItem("friendly_contact", clientC[8]);
        window.location = './gc_client_modif.html';
    }
    else { alert('une erreur c\'est produite!') }

}

function changeOk() {

    let regstring = document.getElementsByClassName('regstring')[0].value;
    let regstring1 = document.getElementsByClassName('regstring')[1].value;
    let regstring2 = document.getElementsByClassName('regstring')[2].value;
    let regstring3 = document.getElementsByClassName('regstring')[3].value;
    let regstring4 = document.getElementsByClassName('regstring')[4].value;
    let regstring5 = document.getElementsByClassName('regstring')[5].value;
    let regtel = document.getElementById("phone regtel").value;
    let regdate = document.getElementById('last_contact regdate').value;
    let regmail = document.getElementById('social_name regmail').value;
    let change = regTel.test(regtel) && regMail.test(regmail) && regString.test(regstring) && regString.test(regstring1) && regString.test(regstring2) && regString.test(regstring3) && regString.test(regstring4) && regString.test(regstring5) && regDate.test(regdate);

    console.log(regDate.test(regdate));


    if (change) {

        alert('Nous vous remercions de tester ces changements. Etant donné qu\'il s\'agit d\'une démo, il n\'est pas possible d\'enregistrer ces ajouts/modifications');
        window.location = './gc.html'
    } else {
        alert('Attention, une ou des erreurs se sont glissées dans votre saisie')
    }
}
