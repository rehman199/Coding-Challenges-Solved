// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

function sym(args) {
  args=args.reduce(calcSymDiff);
  let set=new Set(args);
  return Array.from(set);
}

function calcSymDiff(arr1,arr2){
	let arr=new Array();
	arr=arr1.concat(arr2);
	console.log('concatenated Array:'+arr);
	for(var i=0;i<arr.length;i++){
	console.log('round '+i+':');
	let n=arr[i];
	if(arr1.includes(n) & arr2.includes(n)){
		console.log('remove number :'+n);
		do{
			arr.splice(arr.indexOf(n),1);
		}
		while(arr.includes(n));
		console.log('array after removal: '+arr);

	}
	}
	arr.sort();
	console.log('returned array: '+arr);
	return arr;
}

let array=[]
//sym([[1, 2, 3], [5, 2, 1, 4]]);
//array=sym([[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]]);
array=sym([[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]]);
console.log(array);
