<?
// Solution for problem "Equal Sums" from Google Code Jam 2012
//
// See https://code.google.com/codejam/contest/1836486/dashboard#s=p2

function solve($case){
	$Y=6;
	$N = count($case);
	$memo = array();
	while(true){
		for($i=0;$i<$Y;$i++){
			$j = rand($i, $N - 1);
			$tmp = $case[$i];
			$case[$i] = $case[$j];
			$case[$j] = $tmp;
		}
		$sol = array_slice($case, 0, $Y);
		$s = array_sum($sol);
		if( array_key_exists($s, $memo) ){
			$other = $memo[$s];
			sort($other);
			sort($sol);
			if($other!=$sol){
				$nice = implode(" + ", $other) . " = " . $s;
				$nice .= "\n";
				$nice .= implode(" + ", $sol) . " = " . $s;
				return $nice;
			}
		}else{
			$memo[$s] = $sol;
		}
	}
	return ":(";
}

function randomCases($T, $N, $maxValue){
	$cases = array();
	for($t=0;$t<$T;$t++){
		$case = array();
		for($i=0;$i<$N;$i++){
			$x = rand(0, $maxValue);
			$case[] = $x;
		}
		$cases[] = $case;
	}
	return $cases;
}

header("Content-type: text/plain");
echo( "(php)\n" );

$getParam = $_GET["case"];
$case = explode(",", $getParam);
echo( solve($case) );
?>