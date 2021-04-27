const customerList = JSON.parse(sessionStorage.getItem('clients')) ? JSON.parse(sessionStorage.getItem('clients')) : [];

for (let i = 0; i < customerList.length; i++) {
    const customerTab = [
        customerList[i].companyName,
        customerList[i].clientNumber,
        customerList[i].clientType,
        customerList[i].clientActivity,
        customerList[i].clientTurnover,
        customerList[i].clientStaff,
        customerList[i].clientAdress,
        customerList[i].clientPhone,
        customerList[i].contact,
        customerList[i].comercialComments
    ];
    const tbody = document.getElementById("listCustomer");
    const tr = document.createElement('tr');
    tbody.appendChild(tr);
    for (let j = 0; j < customerTab.length; j++) {
        const td = document.createElement('td');
        td.innerHTML = customerTab[j];
        tr.appendChild(td);
    }; 
};


