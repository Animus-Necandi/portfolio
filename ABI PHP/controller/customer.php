<?php
require('../model/customer.php');
$donnee = customerList();

require('../view/frontend/customerList.php');
