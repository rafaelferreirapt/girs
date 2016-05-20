<?php

$start_script = gettimeofday();

const INTERVAL = 0.04;
$dummy = 0;
$cycles = 10000;

$rand = rand(50, 100);
for($j = 0; $j < $rand; $j++){
  $start = gettimeofday();
  for($i=0; $i<$cycles; $i++){
    $dummy += $i*$i;
  }
  $stop = gettimeofday();

  $spentTime = ($stop["sec"]-$start["sec"]) + ($stop["usec"]-$start["usec"]) / 1000000.0;
  $cycles = ($cycles / $spentTime) * ($target_load / 100.0) * INTERVAL;
  usleep((1000000 * INTERVAL - $spentTime*1000000));
}

$stop_script = gettimeofday();

echo "<pre>";
echo "start: ";
print_r($start_script);
echo "\n stop:";
print_r($stop_script);
echo "\n done! \n";
echo "hostname: ";
echo gethostname();
echo "</pre>";

?>
