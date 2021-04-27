<?php $title ="Staff data"; ?>

<?php ob_start(); ?>
    
    <h2 class="staffData">Staff list</h2>  
    <form id="listcollab">
        <div>
            <button id="butt"> submit </button>
        </div>
    </form>
    <table id="customers" class="tbWrapper">
        <thead id = "bodyTable">
            <tr class='trStuff'>
                 <th >Registration number</th>
                 <th >Contrat</th>
                 <th>First name</th>
                 <th >Last name</th>
                 <th>Qualification</th>
                 <th>Salary</th>
                 <th >Hiring date</th>
                 <th >End contrat date</th>
            </tr>
        </thead>
        <tbody id= 'stBody'>
            <tr class='trStuff'></tr>
        </tbody>
    </table>
    <?php $content= ob_get_clean(); ?>
 
 <?php require('../template/template.php'); ?>
</body>
</html>
