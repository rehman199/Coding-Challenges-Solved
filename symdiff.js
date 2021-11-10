
//args=[[1,2,3],[5,2,1,4]]
function sym(args) {
    let outputArr=new Array();
	for(var i=0;i<args.length;i++){
      for(var j=0;j<args[i].length;j++){
		if(!outputArr.includes(args[i][j])){
			console.log('pushing '+args[i][j])
			outputArr.push(args[i][j])
        }
        else{
			console.log('popping '+args[i][j])
			outputArr.splice(outputArr.indexOf(args[i][j]),1);
        }
      }
	  console.log('after round '+i+': '+outputArr);
    }
	outputArr.sort()
	return outputArr;
}

console.log(sym([[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]]));