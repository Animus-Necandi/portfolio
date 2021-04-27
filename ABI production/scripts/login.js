

const loginAccount = document.getElementById('loginaccount');

loginAccount.addEventListener('submit', function(e){

    e.preventDefault();

    // chercher dans le localStorage les données
    let storedName = localStorage.getItem('creation-email');
    let storedPw = localStorage.getItem('creation-mdp');

    // Entrer les données de la page connexion
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    // regarder si ce qu'il y a dans le localStorage et le même que les données de la page de connexion
    if(email === '' && password === '') {

        alert('Veuillez remplir tout les champs');
        return false

    }else if(email != storedName && password != storedPw) {

        alert('Vos informations ne sont pas correctes ! Si vous navez pas de compte, veuillez en créer un.');
        return false

    }else if(email != storedName && password == storedPw) {

        alert('Veuillez entrer un email valide !');
        return false

    }else if(email == storedName && password != storedPw) {

        alert('Veuillez entrer le mot de passe correspondant à Email !');
        return false

    }else if (password === '') {

        alert('Vous avez oublié de mettre votre mot de passe !');
        return false

    }else if (email === '') {

        alert('Vous avez oublié de renseigner votre email !');
        return false

    }else if(email == storedName && password == storedPw) {

        alert(`Bienvenue ${email}`);
        location.href = './accueil-johndoe.html';
        window.event.returnValue = false;
        return true
        
    }
  
});

