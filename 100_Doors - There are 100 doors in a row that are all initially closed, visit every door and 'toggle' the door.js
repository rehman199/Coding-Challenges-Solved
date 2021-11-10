// There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. 
// The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). 

//Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.

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
