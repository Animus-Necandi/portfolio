<<?php $title ="Contact"; ?>

<?php ob_start(); ?>
        <h2> Contact Us </h2>
        <p> If you have any question you can complete this form and we reply to you ASAP !</p>
        <section class=" formContainer">
            <form class="form">
                <table>
                    <thead>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <th><Label for="name"> Name</Label></th>
                            <td><input type="text" name ="name" id="name" size="30"  maxlength="15" /></td>                        
                        </tr>
                        <tr>
                            <th><Label for="Object"> Object</Label></th>
                            <td><input type="text" name ="Object" id="Object" size="30"  maxlength="15" /></td>
                            
                        </tr>
                        <tr>
                            <th><Label for="email"> Email</Label></th>
                            <td><input type="text" name ="email" id="email" size="30"  maxlength="15" /></td> 
                        </tr>
                        <tr>
                            <th><Label for="comment"> Comment</Label></th>
                            <td><textarea name="comercialComments" id="comercialComments" cols="25" rows="10" ></textarea></td>
                        </tr>
                        <tr>
                            <th></th>
                            <td><input type="submit" value="Submit Contact" class="loginButton" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </section>
        <?php $content= ob_get_clean(); ?>
 
 <?php require('../view/template/template.php'); ?>
    </body>
</html>