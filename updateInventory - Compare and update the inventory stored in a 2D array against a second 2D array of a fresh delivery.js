// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
// Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. 
// The returned inventory array should be in alphabetical order by item..

function updateInventory(arr1, arr2) {
    let ar=arr1.concat(arr2);
	console.log(ar);
	arr2.forEach(function(e,i){
		let found=false;
		for(var i=0;i<arr1.length;i++){
			if(arr1[i].includes(e[1])){
				arr1[i][0]+=e[0];
				found=true;
			}
		}
		if(!found){
			arr1.push(e);
		}
	});
	return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

/* var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
]; */

//console.log('Updated Inventory:',updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
console.log('Updated Inventory:',updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]));
