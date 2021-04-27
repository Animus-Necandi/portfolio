function returnDatas(){ 
    let lastName = document.getElementById('lastName').value;
    let firstName = document.getElementById('firstName').value; 
    let job = document.getElementById('job').value;
    let email = document.getElementById('email').value; 
    location.replace(encodeURI("./rh.html?l="+lastName+"&f="+firstName+"&j="+job+"&e="+email)); 
}

// découper sur ? ==> tableau à 2 postes 
let datas = (decodeURI(location.href).split("?"))[1]; 
// découper sur & ==> tableau à n postes (ici n=2) 
// (on pouvait aussi parcourir le tableau tab avec une boucle for) 
let tab = datas.split("&");
// les valeurs sont dans le 2° poste de chacun des tableaux 
lastName = decodeURI((tab[0].split("="))[1]); 
firstName = decodeURI((tab[1].split("="))[1]);
job = decodeURI((tab[2].split("="))[1]);
email = decodeURI((tab[3].split("="))[1]); 
// afficher dans le tableau 
document.getElementById('lastName').innerHTML = lastName;
document.getElementById('firstName').innerHTML = firstName;
document.getElementById('job').innerHTML = job;
document.getElementById('email').innerHTML = email;

function searchContracts() {
    let input, tr, tbody, filter, txtValue, contract, i;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    tbody = document.getElementById("tab_contracts");
    tr = tbody.getElementsByTagName('tr');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        contract = tr[i].getElementsByTagName("span")[0];
        txtValue = contract.textContent || contract.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

function searchEmployees() {
    let input, tr, tbody, filter, txtValue, employee, i;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    tbody = document.getElementById("tab_employees");
    tr = tbody.getElementsByTagName('tr');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        employee = tr[i].getElementsByTagName("span")[0];
        txtValue = employee.textContent || employee.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}
