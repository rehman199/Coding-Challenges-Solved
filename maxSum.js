function ArrayChallenge(arr) { 

  let presentSum=0, maxTillNow=Number.MIN_VALUE;
	console.log('hi!');
  for(let i=0;i<arr.size;i++) {
    console.log('in for');
	presentSum+=arr[i];
    if(presentSum<0){
      presentSum=0;
    }
    maxTillNow=Math.max(maxTillNow,presentSum);
    console.log(maxTillNow);
  }

  return maxTillNow; 

}
   
// keep this function call here 
console.log(ArrayChallenge([1, -2, 0, 3]));


function ArrayChallenge(arr) { 

  let presentSum=0, maxTillNow=Number.MIN_VALUE;

  for(var i=0;i<arr.length;i++) {
    presentSum+=arr[i];
    if(presentSum<0){
      presentSum=0;
    }
    maxTillNow=Math.max(maxTillNow,presentSum);
  }

  return maxTillNow; 

}
   
// keep this function call here 
console.log(ArrayChallenge(readline()));