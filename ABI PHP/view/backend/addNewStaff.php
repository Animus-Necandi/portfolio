<?php $title ="Add new staff"; ?>

<?php ob_start(); ?>
<h2>Add new staff</h2>
        <section class=" formContainer">
            <form class="form">
                <table>
                    <thead>
                            
                    </thead>
                    <tbody>
                        <tr>
                            <th><label for="registrationNumber">Registration</label></th>
                            <td><input type="text" name="registrationNumber" id="registrationNumber" size="30"  maxlength="15"/></td>
                        </tr>
                        <tr>
                            <th><label for="contrat">Contrat</label></th>
                            <td><input type="text" name="contrat" id="contrat" size="30" maxlength="15"/></td>
                        </tr> 
                        <tr>
                            <th><label for="firstName">First name</label></th>
                            <td><input type="text" name="firstName" id="firstName" size="30" maxlength="15"/></td>
                        </tr>
                        <tr>
                            <th><label for="lastName">Last name</label></th>
                            <td><input type="text" name="lastName" id="lastName" size="30" maxlength="15"/></td>
                            
                        </tr>
                        <tr>
                            <th><label for="qualification">Qualification</label></th>
                            <td><input type="text" name="qualification" id="qualification" size="30" maxlength="15"/></td>
                            
                        </tr>
                        <tr>
                            <th><label for="salary">Salary</label></th>
                            <td><input type="text" name="salary" id="salary" size="30" maxlength="15"/></td>
                        </tr>
                        <tr>
                            <th><label for="hiringDate">Hiring date</label></th>
                            <td><input type="text" name="hiringDate" id="hiringDate" size="30" maxlength="15"/></td>
                        </tr>
                        <tr>
                            <th><label for="endContratDate">End contrat date</label></th>
                            <td> <input type="text" name="endContratDate" id="endContratDate" size="30" maxlength="15" /></td>
                        </tr>
                        <tr>
                            <th><Label for="comment">Comment</Label></th>
                            <td><textarea name="comercialComments" id="comercialComments" cols="25" rows="10" ></textarea></td>
                        </tr>
                        <tr>
                            <th></th>
                            <td><input type="submit" value="Save" class="loginButton" />
                                <input type="submit" value="Exit" class="loginButton" /></td>
                        </tr>
                    </tbody>
                </table>    
            </form>
        </section>
        <?php $content= ob_get_clean(); ?>
 
 <?php require('../template/template.php'); ?>
    </body>
</html>