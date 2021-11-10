// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

function pairwise(arr, arg) {
	let indexArr=[];
	for(let i=0;i<arr.length;i++){
		for(let j=0;j<arr.length;j++){
			if(j==i) continue;
			if(arr[i]+arr[j]==arg){
				if(!(indexArr.includes(i) || indexArr.includes(j))){
					indexArr.push(i);
					indexArr.push(j);
				}
			}
		}
	}
	let i_sum=0;
	indexArr.forEach((item)=>{i_sum+=item;});
	return i_sum;
}
console.log(pairwise([1,4,2,3,0,5], 7));



/* function pairwise(arr, arg) {
  let minSumIndex1=Number.MAX_VALUE,minSumIndex2=Number.MAX_VALUE,indicesSum=0;
  //let visitedPairs={};
	let indexArr=[];
	for(let i=0;i<arr.length;i++){
		for(let j=0;j<arr.length;j++){
			if(j==i) continue;
			if(arr[i]+arr[j]==arg){
				if(!(indexArr.includes(i) || indexArr.includes(j))){
					indexArr.push(i);
					indexArr.push(j);
				}
			//let currentIndexSum=i+j;
			//if(!visitedPairs.hasOwnProperty(`${j},${i}`)){
				//let currentSum=i+j;
				//visitedPairs[`${i},${j}`]=currentIndexSum;
				//console.log(`adding ${i},${j} to visitedPairs`);
				//console.log(visitedPairs);
			/* if(!(indexArr.includes(i)&& indexArr.includes(j))){
			console.log('i: '+i+' j: '+j);
			console.log('current_sum: ',currentSum);
			 */
			//console.log('pushing current sum into array!');
			//indexArr.push(i);
			//indexArr.push(j);
			//}
			//console.log('currentSum: ',currentSum);
			//console.log('sumSoFar: ',minSumIndex1+minSumIndex2);
			//indicesSum+=currentSum;
			/* if(currentSum<(minSumIndex1+minSumIndex2)){
				minSumIndex1=i;
				minSumIndex2=j;
			} 
		}
	}
	let i_sum=0;
	indexArr.forEach((item)=>{i_sum+=item;});
  //return (minSumIndex1+minSumIndex2);
	//return indicesSum;
	return i_sum;
}

let indiceSum=pairwise([1, 1, 1], 2);
console.log(indiceSum); 
*/

/* let vp={
	12: 24,
	26: 45,
	32: 66
}
console.log('vp: ',vp);
vp[40]=77;
vp[52]=92;
console.log('after adding elements to vp: ',vp); */

