document.getElementById("form").addEventListener("submit",(e)=>{
    const clientNumberString = sessionStorage.getItem('clientNumber') ? sessionStorage.getItem('clientNumber') : 5;
    let clientNumber = parseInt(clientNumberString);
    if (confirm(`Are you sure you want add the customer as number ${clientNumber}?`)) {
        const customerList = JSON.parse(sessionStorage.getItem('clients')) ? JSON.parse(sessionStorage.getItem('clients')) : [];
        const clientsData = JSON.parse(sessionStorage.getItem('clientsData')) ? JSON.parse(sessionStorage.getItem('clientsData')) : [];
        let contact = "";

        const companyName = document.getElementById("companyName").value;
        const clientType = document.getElementById("clientType").value;
        const clientActivity = document.getElementById("clientActivity").value;
        const clientTurnover = document.getElementById("clientTurnover").value;
        const clientTurnoverInt = parseInt(clientTurnover);
        if ((!clientTurnoverInt) && (clientTurnover.length)) {
            e.preventDefault();
            alert(`Please enter a number for client turnover`);
            throw `Please enter a number for client turnover`;
        };
        const clientStaff = document.getElementById("clientStaff").value;
        const clientStaffInt = parseInt(clientStaff);
        if ((!clientStaffInt) && (clientStaff.length)) {
            e.preventDefault();
            alert(`Please enter a number for client staff`);
            throw `Please enter a number for client staff`;
        };
        const clientAdress = document.getElementById("clientAdress").value;
        const clientPhone = document.getElementById("clientPhone").value;
        const clientPhoneInt = parseInt(clientPhone);
        if (!clientPhoneInt) {
            e.preventDefault();
            alert(`Please enter a number for client phone`);
            throw `Please enter a number for client phone`;
        };
        const primaryNature = document.getElementById("primaryNature").value;
        const secondaryNature = document.getElementById("secondaryNature").value;
        const oldNature = document.getElementById("oldNature").value;
        const contact1 = document.getElementById("contact1").value;
        const contactPhone1 = document.getElementById("contactPhone1").value;
        const contactPhone1Int = parseInt(contactPhone1);
        if (!contactPhone1Int) {
            e.preventDefault();
            alert(`Please enter a number for contact phone 1`);
            throw `Please enter a number for contact phone 1`;
        };
        const contactMail1 = document.getElementById("contactMail1").value;
        const contactDepartment1 = document.getElementById("contactDepartment1").value;
        const contact2 = document.getElementById("contact2").value;
        const contactPhone2 = document.getElementById("contactPhone2").value;
        const contactPhone2Int = parseInt(contactPhone2);
        if ((!contactPhone2Int) && (contactPhone2.length)) {
            e.preventDefault();
            alert(`Please enter a number for contact phone 2`);
            throw `Please enter a number for contact phone 2`;
        } else if ((!contact2.length) && (contactPhone2)) {
            e.preventDefault();
            alert(`Please add contact 2 to save contact phone 2`);
            throw `Please add contact 2 to save contact phone 2`;
        };
        const contactMail2 = document.getElementById("contactMail2").value;
        if ((!contact2.length) && (contactMail2)) {
            e.preventDefault();
            alert(`Please add contact 2 to save contact mail 2`);
            throw `Please add contact 2 to save contact mail 2`;
        };
        const contactDepartment2 = document.getElementById("contactDepartment2").value;
        if ((!contact2.length) && (contactDepartment2)) {
            e.preventDefault();
            alert(`Please add contact 2 to save contact department 2`);
            throw `Please add contact 2 to save contact department 2`;
        };
        const contact3 = document.getElementById("contact3").value;
        const contactPhone3 = document.getElementById("contactPhone3").value;
        const contactPhone3Int = parseInt(contactPhone3);
        if ((!contactPhone3Int) && (contactPhone3.length)) {
            e.preventDefault();
            alert(`Please enter a number for contact phone 3`);
            throw `Please enter a number for contact phone 3`;
        } else if ((!contact3.length) && (contactPhone3)) {
            e.preventDefault();
            alert(`Please add contact 3 to save contact phone 3`);
            throw `Please add contact 3 to save contact phone 3`;
        };
        const contactMail3 = document.getElementById("contactMail3").value;
        if ((!contact3.length) && (contactMail3)) {
            e.preventDefault();
            alert(`Please add contact 3 to save contact mail 3`);
            throw `Please add contact 3 to save contact mail 3`;
        };
        const contactDepartment3 = document.getElementById("contactDepartment3").value;
        if ((!contact3.length) && (contactDepartment3)) {
            e.preventDefault();
            alert(`Please add contact 3 to save contact department 3`);
            throw `Please add contact 3 to save contact department 3`;
        };
        const comercialComments = document.getElementById("comercialComments").value;

        if (contactDepartment1) {
            contact += `Contact 1 : ${contact1}, Phone : ${contactPhone1}, Mail : ${contactMail1}, Departement : ${contactDepartment1}`;
        } else {
            contact += `Contact 1 : ${contact1}, Phone : ${contactPhone1}, Mail : ${contactMail1}`;
        };
        if (contact2) {
            if (contactDepartment2) {
                contact += `<br>Contact 2 : ${contact2}, Phone : ${contactPhone2}, Mail : ${contactMail2}, Departement : ${contactDepartment2}`;
            } else {
                contact += `<br>Contact 2 : ${contact2}, Phone : ${contactPhone2}, Mail : ${contactMail2}`;
            };
            if (contact3) {
                if (contactDepartment3) {
                    contact += `<br>Contact 3 : ${contact3}, Phone : ${contactPhone3}, Mail : ${contactMail3}, Departement : ${contactDepartment3}`;
                } else {
                    contact += `<br>Contact 3 : ${contact3}, Phone : ${contactPhone3}, Mail : ${contactMail3}`;
                };
            };
        } else if (contact3) {
            if (contactDepartment3) {
                contact += `<br>Contact 2 : ${contact3}, Phone : ${contactPhone3}, Mail : ${contactMail3}, Departement : ${contactDepartment3}`;
            } else {
                contact += `<br>Contact 2 : ${contact3}, Phone : ${contactPhone3}, Mail : ${contactMail3}`;
            };
        };

        clientsData.push({
            companyName,
            clientNumber,
            clientType,
            clientActivity,
            clientTurnover,
            clientStaff,
            clientAdress,
            clientPhone,
            primaryNature,
            secondaryNature,
            oldNature,
            contact,
            comercialComments
        })

        const clientsDataJson = JSON.stringify(clientsData);
        sessionStorage.setItem('clientsData', clientsDataJson);
        const clientsDataSaveJson = sessionStorage.getItem('clientsData');
        const clientsDataSave = JSON.parse(clientsDataSaveJson);

        customerList.push({
            companyName,
            clientNumber,
            clientType,
            clientActivity,
            clientTurnover,
            clientStaff,
            clientAdress,
            clientPhone,
            contact,
            comercialComments
        });
        
        const customerListJson = JSON.stringify(customerList);
        sessionStorage.setItem('clients', customerListJson);
        const customerListSaveJson = sessionStorage.getItem('clients');
        const customerListSave = JSON.parse(customerListSaveJson);

        alert(`You have just created the customer number ${clientNumber}`)
        clientNumber += 1;
        sessionStorage.setItem('clientNumber', clientNumber);
    } else {
        e.preventDefault();
    };
})

document.getElementById("form").addEventListener("reset",(e)=>{
    (confirm(`Are you sure to refresh the current form?`)) ? alert(`Input cancelled`) : e.preventDefault();
})

