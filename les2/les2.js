var devMode = process.argv;

var total = 0;
var numbers = 0;

for (i = 2; i < devMode.length; i++){
  numbers++;
  total += Number(devMode[i]);
  console.log('tot ' + total)
}

average = total / numbers;

console.log(average);
