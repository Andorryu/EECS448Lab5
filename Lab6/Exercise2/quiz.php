<?php

$qs = array();
$qv = array();

// question statements
$qs[0] = "Which color is the best?";
$qs[1] = "How many fingers am I holding up?";
$qs[2] = "Who is your favorite student?";
$qs[3] = '  <math display="inline">
                <mrow>
                    <munderover>
                        <mo>∑</mo>
                        <mrow>
                            <mi>n</mi>
                            <mo>=</mo>
                            <mn>1</mn>
                        </mrow>
                        <mrow>
                            <mo>+</mo>
                            <mn>∞</mn>
                        </mrow>
                    </munderover>
                    <mfrac>
                        <mn>1</mn>
                        <msup>
                            <mi>n</mi>
                         <mn>2</mn>
                        </msup>
                    </mfrac>
                </mrow>
            </math>';
$qs[4] = "Did you enjoy this quiz?";

// question values
for ($i = 0; $i < 5; $i++) {
    $qv[$i] = $_POST["q".($i + 1)];
}

// write questions back
for ($i = 0; $i < 5; $i++) {
    $j = $i+1;
    echo "Question $j: $qs[$i]<br>";
}
?>