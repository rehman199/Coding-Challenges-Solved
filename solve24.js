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