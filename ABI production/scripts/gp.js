
// fonction recherche collaborateurs
let txt = [];
let names = '';
// let names = document.getElementById('names').value;


function Collabo(form) 
{
    i = collaborator.Rubrique.selectedIndex;
    if (i == 0) 
    {
        return;
    }
    switch (i) 
    {
        case 1:
            {
            txt = new Array('Dossier DV-A', 'Dossier DV-B', 'Dossier DV-C');
            // alert();
            names = document.getElementById('names').value;
            alert("Vous avez sélectionné : " + names);
            break;
        }
        case 2:
            {
            txt = new Array('Dossier DG-A', 'Dossier DG-B', 'Dossier DG-C');
            names = document.getElementById('names').value;
            alert("Vous avez sélectionné : " + names);
            break;
        }
        case 3:
            {
            txt = new Array('Dossier DN-A', 'Dossier DN-B', 'Dossier DN-C');
            names = document.getElementById('names').value;
            alert("Vous avez sélectionné : " + names);
            break;
            }
            case 4:
            {
            txt = new Array('Dossier CM-A', 'Dossier CM-B', 'Dossier CM-C');
            names = document.getElementById('names').value;
            alert("Vous avez sélectionné : " + names);
            break;
            }
    }
    
    for (i = 0 ; i < 3 ; i++) {
        collaborator.Page.options[i + 1].text = txt[i];
    }
}

// fonction recherche projets
let txt1 = [];
let projectName = '';

function Projet(form) 
{
    j = project.nameProject.selectedIndex;
    if (j == 0) 
    {
        return;
    }
    switch (j) 
    {
        case 1:
            {
                txt1 = new Array('Projet Alpha-A', 'Projet Alpha-B', 'Projet Alpha-C');
                projectName = document.getElementById('projectName').value;
                alert("Vous avez sélectionné le : " + projectName);
                break;
            }
        case 2:
            {
                txt1 = new Array('Dossier Delta-A', 'Dossier Delta-B', 'Dossier Delta-c');
                projectName = document.getElementById('projectName').value;
                alert("Vous avez sélectionné le : " + projectName);
                break;
            }
            case 3:
            {
                txt1 = new Array('Dossier Oméga-A', 'Dossier Oméga-B', 'Dossier Oméga-C');
                projectName = document.getElementById('projectName').value;
                alert("Vous avez sélectionné le : " + projectName);
                break;
            }
    }
    
    for (j = 0; j < 3; j++) {
        project.filesProject.options[j + 1].text = txt1[j];
    }
}
