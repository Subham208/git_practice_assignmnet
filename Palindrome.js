let str="madam";
let rev="";
for(let i=str.length;i>=0;i++){
	rev+=str[i];
}
if(rev===str){
	console.log("palindrome");
else{
	console.log("NA");
}
