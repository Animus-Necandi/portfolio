const form = document.querySelector('#listcollab').addEventListener('submit', (e)=>{
    e.preventDefault();
    const staffy = [
        {regNumber : 001,
        contract : "CDD",
        fstName : "Dalila",
        lstName : "Dah",
        qualif : "employee",
        salar : 1500,
        hDate : "20/12/2020",
        endCDate : "31/12/2021"
        },
        {regNumber : 002,
        contract : "CDI",
        fstName : "nico",
        lstName : "Ben",
        qualif : "employee",
        salar : 1900,
        hDate : "20/12/2020",
        endCDate : ""
        },
        {regNumber : 003,
        contract : "CDI",
        fstName : "Inaya",
        lstName : "Malec",
        qualif : "employee",
        salar : 1500,
        hDate : "01/01/2019",
        endCDate : ""
         }
    ]
    for (let i = 0; i < staffy.length; i++) {
        const customerTab = [
            staffy[i].regNumber,
            staffy[i].contract,
            staffy[i].fstName,
            staffy[i].lstName,
            staffy[i].qualif,
            staffy[i].salar,
            staffy[i].hDate,
            staffy[i].endCDate,
        ];
        const tbody = document.getElementById("stBody");
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        for (let j = 0; j < customerTab.length; j++) {
            const td = document.createElement('td');
            td.innerHTML = customerTab[j];
            tr.appendChild(td);
        }; 
    };
})