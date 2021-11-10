function getFinalOpenedDoors(numDoors) {
  let arr=new Array(numDoors);
  
  for(let i=0;i<numDoors;i++){
    arr[i]=0;
  }

  for(let i=0;i<numDoors;i++){
    for(let j=i;j<numDoors;j+=i+1){
      console.log('i: '+i+' j: '+j);
	  if(arr[j]==0){
		console.log('opening door: '+(j+1));
        arr[j]=1;
      }
	  else{
		console.log('closing door: '+(j+1));
		arr[j]=0;
	  }
    }
  }
  console.log(arr);
let openedDoors=[];
  for(let i=0;i<numDoors;i++){
    if(arr[i]==1){
    openedDoors.push(i+1);
    }
  }
  return openedDoors;
}

console.log(getFinalOpenedDoors(100));