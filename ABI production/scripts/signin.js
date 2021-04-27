

let userLastName = document.getElementById('nom');
let userName= document.getElementById('prenom');
let work = document.getElementById('poste');
let createEmail = document.getElementById('creation-email');
let createPassword = document.getElementById('creation-mdp');
let logOut = JSON.parse(localStorage.getItem('user'))

// Stocker les informations dans le localStorage
function store() {

    if (createPassword.value === null || createPassword.value === '') {

            localStorage.clear('user');
            alert('Vous avez oublié de créer un mot de passe !');
            return false

    }else if (createPassword.value.length < 7) {

        alert('Votre mot de passe doit contenir au minimum 8 caractères !')
        return false

    }else {
        alert(`Merci ${userLastName.value} d'avoir créer un compte chez ABI`);
        location.href = './connexion.html';
        window.event.returnValue = false;
    } 
    
    localStorage.setItem('Nom', userLastName.value);
    localStorage.setItem('Prénom', userName.value);
    localStorage.setItem('Poste', work.value);
    localStorage.setItem('creation-email', createEmail.value);
    localStorage.setItem('creation-mdp', createPassword.value);
 
}





