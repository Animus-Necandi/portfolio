<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <header>
        <article class="prez">
            <div class="logo">
                <a href="./index.html"><img src="../public/pictures/ABI.png" /></a>
            </div>
            <div id="websiteTitle">
                <h1>ABI</br>Active Bretagne Informatique</h1>
                <p id="description">The IT Services and Engineering Company</p>
            </div>
            <form id="connection">
                <div>
                    <label for="login">Login :</label><br />
                    <input type="text" name="login" id="login" size="15" maxlength="30" placeholder="login" required />
                </div>
                <div>
                    <label for="password">Password :</label><br />
                    <input type="password" name="password" id="password" size="15" maxlength="15" placeholder="password" required />
                </div>
                <input type="submit" value="Connection" class="loginButton" />
            </form>
            <form id="disconnection">
                <p id="user"></p>
                <input type="submit" value="Disconnection" />
            </form>
        </article>
        <article class="navigation">
            <div class="topnav" id="myTopnav">
                <nav>
                    <p><?php echo "On reprends la main en PHP!"; ?></p>

                    <a href="../controller/home.php" class="menu">Menu :</a>
                    <a href="../controller/customer.php">Customer list</a>
                    <a href="../controller/addNewCustomer.php">Add new customer</a>
                    <a href="../view/frontend/staffData.php">Staff data</a>
                    <a href="../view/backend/addNewStaff.php">Add new staff</a>
                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                </nav>
            </div>
        </article>
    </header>
</body>

</html>