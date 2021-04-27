const btnLogout = document.getElementById('btn-deconnexion');

let email = JSON.parse(localStorage.getItem('user'))

// Cette fonction nettoie le localStorage
btnLogout.addEventListener('click', function (){
    localStorage.clear('user');
    location.href = 'index.html';
})