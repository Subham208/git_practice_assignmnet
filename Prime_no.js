let factor=0;
let num=13
for(let i=1;i<=num;i++){
	if(num%13==0){
		factor++;
	}
}
if (factor==2){
	console.log("prime no.");
}else{
	console.log("not prime no.");
}