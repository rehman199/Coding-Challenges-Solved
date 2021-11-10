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
