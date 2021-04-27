<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title><?= $title ?></title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../public/styles/index.css" />
    <link rel="stylesheet" href="../public/styles/responsive.css" />
    <link rel="stylesheet" href="../public/styles/customerList.css" />
    <link rel="stylesheet" href="../public/styles/addNewCustomerResponsive.css" />
    <link rel="stylesheet" href="../public/styles/staffData.css" />
</head>

<body>
    <?php include("../view/template/header.php"); ?>
    <?= $content ?>
    <?php include("../view/template/footer.php"); ?>

    <script src="../public/scripts/navbar.js"></script>
    <script src=../public/scripts/customerList.js"></script>
    <script src="../public/scripts/main.js"></script>
    <script src="../public/scripts/addNewCustomer.js"></script>
    <script src="../public/scripts/staffData.js"></script>

</body>


</html>