<?php $title = "Customer list"; ?>

<?php ob_start(); ?>
<h2>Customer List</h2>


<table class="rtable rtable--flip">
    <thead>
        <tr>
            <th>Customer name</th>
            <th>Customer ID</th>
            <th>Type of Customer</th>
            <th>Field of activity</th>
            <th>Turnhover(KF)</th>
            <th>Staff</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Contact</th>
            <th>Comments</th>
        </tr>
    </thead>



    <?php
    while ($donnees = $donnee->fetch()) {

        $customer_name = $donnees['customer_name'];
        $customer_id = $donnees['customer_id'];
        $typ_of_cust = $donnees['typ_of_cust'];
        $field_of_act = $donnees['field_of_act'];
        $turnover = $donnees['turnover'];
        $staff = $donnees['staff'];
        $customer_adress = $donnees['customer_adress'];
        $customer_phone = $donnees['customer_phone'];
        if (!empty($donnees['customer_contact'])) {
            $customer_contact = $donnees['customer_contact'];
        } else {
            $customer_contact = $donnees['cust_first_contact'];
        }
        if (!empty($donnees['customer_comments'])) {
            $customer_comments = $donnees['customer_comments'];
        } else {
            $customer_comments = $donnees['commercial_comments'];
        }




    ?>

        <tbody>
            
                <tr>

                    <td><?php echo $customer_name ?></td>
                    <td><?php echo $customer_id ?></td>
                    <td><?php echo $typ_of_cust ?></td>
                    <td><?php echo $field_of_act ?></td>
                    <td><?php echo $turnover ?></td>
                    <td><?php echo $staff ?></td>
                    <td><?php echo $customer_adress ?></td>
                    <td><?php echo $customer_phone ?></td>
                    <td><?php echo $customer_contact ?></td>
                    <td><?php echo $customer_comments ?></td>

                </tr>
            </a>



        <?php
    }
        ?>
        </tbody>
</table>

<?php $content = ob_get_clean(); ?>

<?php require('../view/template/template.php'); ?>
</body>

</html>