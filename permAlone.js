function permAlone(str) {
	let s=Array.from(new Set(str.split('')));
	console.log(s);
	let p=[];
	p=perm(p,str,0,str.length-1);
	console.log(p);
	let count=0;
	let str_= "("
	for(let i=0;i<s.length;i++){
		if(i!=s.length-1){
		str_+=s[i]+s[i]+"|";
		}
		else{
		str_+=s[i]+s[i];
		}
	}
	str_+=")"
	let re=new RegExp(str_);  // "("+item+item+")"
	console.log(str_);
	for(let i=0;i<p.length;i++){
		if(re.test(p[i])){
			console.log('found-'+p[i]+" i:"+i);
			count++;
		}
	}
	
	return p.length-count;
}
function swapStr(s,sI,eI){
	chArr=s.split('');
	[chArr[sI],chArr[eI]]=[chArr[eI],chArr[sI]];
	return chArr.join('');
}
function perm(arr,s,l,r){
	if(l==r){
		arr.push(s);
		return;
	}
	else{
	for(let i=l;i<=r;i++){
		s=swapStr(s,l,i);
		perm(arr,s,l+1,r);
		s=swapStr(s,l,i);
	}
	}
	return arr;
}


console.log(permAlone('abcdefa'));

/* let arr=['abba','abba','abba','abba','abba','abba','abba'];
let reStr='(aa|bb)';
let re=new RegExp(reStr);
let count=0
for(let i=0;i<arr.length;i++){
	if(re.test(arr[i])){
		count++;
	}
}
console.log('count: ',count); */