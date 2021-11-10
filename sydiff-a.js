function sym(args) {
  return calcSymDiff(args[0],args[1]);
}

function calcSymDiff(arr1,arr2){
	let arr=new Array();
	arr=arr1.concat(arr2);
	for(var i=0;i<arr.length;i++){
	let n=arr[i];
	if(arr1.includes(n) & arr2.includes(n)){
		do{
			arr.splice(arr.indexOf(n),1);
		}
		while(arr.includes(n));
	}
	}
	arr.sort();
	return arr;
}

console.log(sym([[1, 2, 3], [5, 2, 1, 4]]));