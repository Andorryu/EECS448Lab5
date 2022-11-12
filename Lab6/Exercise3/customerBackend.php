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
        <h1>Here\'s your receipt!</h1>
        <br>
';

// echo end of file
echo '
    </body>
</html>
';

?>