

// Pour initialiser l'animation avec AOS
AOS.init({
    duration: 1000,
    easing:'linear',
    mirror: true
});



// Ce script ci-dessous à été trouvé sur google... !! 

// On initialise la latitude et la longitude de Paris (centre de la carte)

let lat = 48.14805182568865;
let lon = -1.7572784289001453;
let map = null;
let marker;
// Fonction d'initialisation de la carte
function initMap() {
    // Créer l'objet "map" et l'insèrer dans l'élément HTML qui a l'ID "map"
    map = new google.maps.Map(document.getElementById("map"), {
        // Nous plaçons le centre de la carte avec les coordonnées ci-dessus
        center: new google.maps.LatLng(lat, lon), 
        // Nous définissons le zoom par défaut
        zoom: 11, 
        // Nous définissons le type de carte (ici carte routière)
        mapTypeId: google.maps.MapTypeId.ROADMAP, 
        // Nous activons les options de contrôle de la carte (plan, satellite...)
        mapTypeControl: false,
        // Nous désactivons la roulette de souris
        scrollwheel: false, 
        mapTypeControlOptions: {
            // Cette option sert à définir comment les options se placent
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR 
        },
        // Activation des options de navigation dans la carte (zoom...)
        navigationControl: false, 
        navigationControlOptions: {
            // Comment ces options doivent-elles s'afficher
            style: google.maps.NavigationControlStyle.ZOOM_PAN 
        }
    });
    marker = new google.maps.Marker({
	    // Nous définissons sa position (syntaxe json)
	    position: {lat: lat, lng: lon},
	    // Nous définissons à quelle carte il est ajouté
	    map: map
    });
}

window.onload = function(){
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap(); 
};



