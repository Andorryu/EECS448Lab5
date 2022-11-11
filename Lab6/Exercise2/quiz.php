<?php

// get answer values for each question
$qs = array();
for ($i = 0; $i < 5; $i++) {
    $qs[$i] = $_POST["q".($i + 1)];
}

for ($i = 0; $i < 5; $i++) {
    $j = $i+1;
    echo "Question " . $j . ": ";
    /*.
    $j==1 ? "Which color is the best?" :
    $j==2 ? "How many fingers am I holding up?" :
    $j==3 ? "Who is your favorite student?" :
    $j==4 ? "<p>
                <math display="inline">
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
                </math>
            </p>" :
    "Did you enjoy this quiz?";
}
*/
?>