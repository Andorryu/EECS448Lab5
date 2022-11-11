<?php

// init arrays
$qs = array();
$qv = array();
$qa = array();
for ($i = 0; $i < 5; $i++) {$qa[$i] = array();}

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
$qa[3][1] = '<math display="inline"><msup>2<mi>π</mi><mn>2</mn></msup>
            </math>';
$qa[3][2] = '<math display="inline"><mfrac><mn>1</mn><msup><mi>π</mi>
            <mn>2</mn></msup></mfrac></math>';
$qa[3][3] = '<math display="inline"><mfrac><msup><mi>π</mi><mn>2</mn>
            </msup><mn>3</mn></mfrac></math>';
$qa[4][0] = "yes";
$qa[4][1] = "yes";

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

// write questions back
for ($i = 0; $i < 5; $i++) {
    $j = $i+1;
    echo "Question $j: $qs[$i]<br>";
    echo "You answered: $qa[$i][$qv[$i]]<br>";
}
?>