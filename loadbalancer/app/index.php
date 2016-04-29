<?php

const INTERVAL = 0.04;
$dummy = 0;
$cycles = 100000;

for(;;){
  $start = gettimeofday();
  for($i=0; $i<$cycles; $i++){
    $dummy += $i*$i;
  }
  $stop = gettimeofday();

  $spentTime = ($stop["sec"]-$start["sec"]) + ($stop["usec"]-$start["usec"]) / 1000000.0;
  $cycles = ($cycles / $spentTime) * ($target_load / 100.0) * INTERVAL;
  usleep((1000000 * INTERVAL - $spentTime*1000000));
}

?>
