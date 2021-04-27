<?php $title = "Add new customer"; ?>

<?php ob_start(); ?>

<section id="body">
    <h2 id="addNewCustomer">Add new customer</h2>
    <form id="form" method="post" action="../controller/addNewCustomerPost.php">
        <fieldset class="information" id="personalInformation">
            <legend>Customer's personal informations</legend>
            <div>
                <div class="responssive">
                    <label for="companyName">Company name :</label>
                    <input type="text" name="companyName" id="companyName" size="30" maxlength="20" placeholder="Royal Kebab" required />
                </div>
                <div class="responssive">
                    <label for="clientAdress">Address :</label>
                    <input type="text" name="clientAdress" id="clientAdress" size="30" maxlength="50" placeholder="34th Dupont street 76000 Rouen Cedex" required />
                </div>
                <div class="responssive">
                    <label for="clientPhone">Phone number :</label>
                    <input type="tel" name="clientPhone" id="clientPhone" size="30" maxlength="15" placeholder="02 XX XX XX XX" required />
                </div>
            </div>
            <div>
                <div class="responssive">
                    <label for="clientActivity">Field of activity :</label>
                    <input type="text" name="clientActivity" id="clientActivity" size="30" maxlength="30" placeholder="Agri-food, industry, ..." required />
                </div>
                <div class="responssive">
                    <label for="clientStaff">Staff :</label>
                    <input type="text" name="clientStaff" id="clientStaff" size="30" maxlength="5" placeholder="135" />
                </div>
                <div class="responssive">
                    <label for="clientTurnover">Turnover (k€) :</label>
                    <input type="text" name="clientTurnover" id="clientTurnover" size="30" maxlength="9" placeholder="1 500" />
                </div>
            </div>
            <div class="responssive">
                <label for="clientType">Type of customer :</label>
                <select name="clientType" id="clientType">
                    <option value="Public" selected="selected">Public</option>
                    <option value="Private">Private</option>
                </select>
            </div>
        </fieldset>
        <fieldset class="information">
            <legend>Nature of the customer</legend>
            <div class="responssive">
                <label for="primaryNature">Primary :</label>
                <input name="primaryNature" id="primaryNature" type="text" size="15" maxlength="15" placeholder="Agri-food" required />
            </div>
            <div class="responssive">
                <label for="secondaryNature">Secondary :</label>
                <input name="secondaryNature" id="secondaryNature" type="text" size="15" maxlength="15" placeholder="Trade" />
            </div>
            <div class="responssive">
                <label for="oldNature">Old :</label>
                <input name="oldNature" id="oldNature" type="text" size="15" maxlength="15" placeholder="Transportation" />
            </div>
        </fieldset>
        <fieldset class="information">
            <legend>Customer contact's</legend>
            <div>
                <div class="responssive">
                    <label for="contact1">1st contact :</label>
                    <input name="contact1" id="contact1" type="text" size="15" maxlength="15" placeholder="Name Surname" required />
                </div>
                <div class="responssive">
                    <label for="contactPhone1">Phone number :</label>
                    <input name="contactPhone1" id="contactPhone1" type="text" size="15" maxlength="15" placeholder="06 XX XX XX XX" required />
                </div>
                <div class="responssive">
                    <label for="contactMail1">Mail :</label>
                    <input name="contactMail1" id="contactMail1" type="email" size="30" maxlength="30" placeholder="name.mail@company.com" required />
                </div>
                <div class="responssive">
                    <label for="contactDepartment1">Department :</label>
                    <input name="contactDepartment1" id="contactDepartment1" type="text" size="15" maxlength="15" placeholder="CEO" />
                </div>
            </div>
            <div>
                <div class="responssive">
                    <label for="contact2">2nd contact :</label>
                    <input name="contact2" id="contact2" type="text" size="15" maxlength="15" placeholder="Name Surname" />
                </div>
                <div class="responssive">
                    <label for="contactPhone2">Phone number :</label>
                    <input name="contactPhone2" id="contactPhone2" type="text" size="15" maxlength="15" placeholder="06 XX XX XX XX" />
                </div>
                <div class="responssive">
                    <label for="contactMail2">Mail :</label>
                    <input name="contactMail2" id="contactMail2" type="email" size="30" maxlength="30" placeholder="name.mail@company.com" />
                </div>
                <div class="responssive">
                    <label for="contactDepartment2">Department :</label>
                    <input name="contactDepartment2" id="contactDepartment2" type="text" size="15" maxlength="15" placeholder="HRD" />
                </div>
            </div>
            <div>
                <div class="responssive">
                    <label for="contact3">3rd contact :</label>
                    <input name="contact3" id="contact3" type="text" size="15" maxlength="15" placeholder="Name Surname" />
                    <div class="responssive">
                        <label for="contactPhone3">Phone number :</label>
                        <input name="contactPhone3" id="contactPhone3" type="text" size="15" maxlength="15" placeholder="06 XX XX XX XX" />
                    </div>
                    <div class="responssive">
                        <label for="contactMail3">Mail :</label>
                        <input name="contactMail3" id="contactMail3" type="email" size="30" maxlength="30" placeholder="name.mail@company.com" />
                    </div>
                    <div class="responssive">
                        <label for="contactDepartment3">Department :</label>
                        <input name="contactDepartment3" id="contactDepartment3" type="text" size="15" maxlength="15" placeholder="IT" />
                    </div>
                </div>
        </fieldset>
        <fieldset class="information">
            <legend>Commercial comments</legend>
            <textarea name="comercialComments" id="comercialComments" cols="100" rows="3"></textarea>
        </fieldset>
        <div id="submission">
            <input type="submit" value="Submit new customer" class="loginButton" />
            <input type="reset" value="Reset input" class="loginButton" />
        </div>
    </form>
</section>
<?php $content = ob_get_clean(); ?>

<?php require('../view/template/template.php'); ?>

</body>

</html>