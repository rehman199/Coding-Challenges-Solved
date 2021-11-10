// The aim of the game is to arrange four numbers in a way that when evaluated, the result is 24

// Implement a function that takes a string of four digits as its argument, with each digit from 1 to 9 (inclusive) with repetitions allowed, 
// and returns an arithmetic expression that evaluates to the number 24. If no such solution exists, return "no solution exists".

function solve24 (numStr) {
  numStr=numStr.split('');
  let exp='';
  if(((numStr[2]-numStr[3]/numStr[1])*numStr[0])==24){
    exp=`(${numStr[2]}-${numStr[3]}/${numStr[1]})*${numStr[0]}`;
  }
  else if(numStr[0]*numStr[1]*numStr[2]*numStr[3]==24){
	exp=`${numStr[0]}*${numStr[1]}*${numStr[2]}*${numStr[3]}`;  
  }
  else if(((numStr[0]*numStr[2])/(numStr[3]-numStr[1]))==24){
  exp=`(${numStr[0]}*${numStr[2]})/(${numStr[3]}-${numStr[1]})`;  
  }
  else if(((numStr[0]+numStr[3])*(numStr[2]+numStr[1]))==24){
	exp=`(${numStr[0]}+${numStr[3]})*(${numStr[2]}+${numStr[1]}`;  
  }
  
  return (exp == '' ?'No Solution Existes': exp);}

console.log(solve24('1127'));
