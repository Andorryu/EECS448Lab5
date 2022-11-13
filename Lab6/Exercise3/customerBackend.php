<?php
// echo start of file
echo '
<!DOCTYPE html>
<html>
    <head>
        <script src="../../nav.js"></script>
        <link rel="stylesheet" href="../../style.css">
        <script>
            hrefPrefixes["Lab 5 Home"] = "../../Lab5/";
            navItems[3].href = "Quiz.html";
            navItems[4].href = "customerFrontend.html";
            lab6Mode = true;
        </script>
        <script src="formChecker.js"></script>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <nav></nav>
        <h1>Welcome! Thanks for your purchase!</h1>
        <br>
';

// display password
echo '
<section>
    <h3>This is the password you entered</h3>
    <p>'.$_POST["password"].'</p>
</section>
';

// display receipt
echo '
<section>
    <h3>Here\'s your receipt!</h3>
    <table>
        <tr>
            <th></th>
            <th>Quantity</th>
            <th>Cost per Item</th>
            <th>Sub Total</th>
        </tr>
        <tr>
            <th>Vacuum</th>
            <td>'.$_POST["vacuum"].'</td>
            <td>$90</td>
            <td>$'.(90 * $_POST["vacuum"]).'</td>
        </tr>
        <tr>
            <th>Car</th>
            <td>'.$_POST["car"].'</td>
            <td>$800</td>
            <td>$'.(800 * $_POST["car"]).'</td>
        </tr>
        <tr>
            <th>Cat?</th>
            <td>'.$_POST["cat?"].'</td>
            <td>$60</td>
            <td>$'.(60 * $_POST["cat?"]).'</td>
        </tr>
        <tr>
            <th>Shipping</th>
            <td colspan="2">'.($_POST["shipping"] == '0' ? 'Free 7 day': ($_POST["shipping"] == '50' ? '$50.00 over night' : '$5.00 three night')).'</td>
            <td>'.$_POST["shipping"].'</td>
        </tr>
        <tr>
            <th colspan="3">Total Cost</th>
            <th>'.((60 * $_POST["cat?"]) + (800 * $_POST["car"]) + (90 * $_POST["vacuum"]) + $_POST["shipping"]).'</th>
        </tr>
    </table>
</section>
';

// echo end of file
echo '
    </body>
</html>
';

?>