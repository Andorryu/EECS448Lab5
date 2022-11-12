<?php
// set up basic html
echo '
    <head>
        <script src="../../nav.js"></script>
        <link rel="stylesheet" href="../../style.css">
        <script>
            // init
            hrefPrefixes["Lab 5 Home"] = "../../Lab5/";
            navItems[3].href = "Quiz.html";
            navItems[4].href = "customerFrontend.html";
            lab6Mode = true;
        </script>
    </head>
    <nav></nav>
    <br>
    <h1>Quiz Answers!</h1>
';

// init arrays
$qs = array();
$qv = array();
$qa = array();
$qc = array();
for ($i = 0; $i < 5; $i++) {$qa[$i] = array();}

// question statements
$qs[0] = "Which color is the best?";
$qs[1] = "How many fingers am I holding up?";
$qs[2] = "Who is your favorite student?";
$qs[3] = '<math display="inline"><mrow><munderover><mo>∑</mo><mrow>
    <mi>n</mi><mo>=</mo><mn>1</mn></mrow><mrow><mo>+</mo><mn>∞</mn>
    </mrow></munderover><mfrac><mn>1</mn><msup><mi>n</mi><mn>2</mn>
    </msup></mfrac></mrow></math>';
$qs[4] = "Did you enjoy this quiz?";

// question values
for ($i = 0; $i < 5; $i++) {
    $qv[$i] = $_POST["q".($i + 1)];
}

// question answers
$qa[0][0] = "blue";
$qa[0][1] = "green";
$qa[0][2] = "red";
$qa[0][3] = "yellow";
$qa[1][0] = "one";
$qa[1][1] = "four";
$qa[1][2] = "two";
$qa[1][3] = "three";
$qa[1][4] = "eleven";
$qa[1][5] = "This is an unfair question.";
$qa[2][0] = "Andrew";
$qa[2][1] = "Billy";
$qa[2][2] = "Samuel";
$qa[2][3] = "Batman";
$qa[3][0] = '<math display="inline"><mfrac><msup><mi>π</mi><mn>2</mn>
            </msup><mn>6</mn></mfrac></math>';
$qa[3][1] = '<math display="inline"><msup><mi>π</mi><mn>2</mn></msup>
            </math>';
$qa[3][2] = '<math display="inline"><mfrac><mn>1</mn><msup><mi>π</mi>
            <mn>2</mn></msup></mfrac></math>';
$qa[3][3] = '<math display="inline"><mfrac><msup><mi>π</mi><mn>2</mn>
            </msup><mn>3</mn></mfrac></math>';
$qa[4][0] = "yes";

// correct answers
$qc[0] = "0";
$qc[1] = "3";
$qc[2] = "3";
$qc[3] = "0";
$qc[4] = "0"; // both are correct

// calculate grade
$score = 0;
for ($i = 0; $i < 5; $i++) {
    if ($qv[$i] == $qc[$i]) {
        $score++;
    }
}
$grade = ($score / 5) * 100;

// write questions back
for ($i = 0; $i < 5; $i++) {
    $j = $i+1;
    echo "Question $j: $qs[$i]<br>";
    echo "You answered: ".$qa[$i][$qv[$i]]."<br>";
    echo "Correct answer: ".$qa[$i][$qc[$i]]."<br><br>";
}

// write final grade back
echo "Your grade is $grade% ($score/5).";

?>