var max;
function bai1(a,b){
  if(typeof a=="number"){
    max=a;
  if(b>max)
    max=b;
    return max;
  }
  else return false;

}
function bai2(n){
 if(n>0){
   var gt=1;
   for (var i=1;i<=n;i++)
     gt=gt*i;
   return gt;
 }
  else return false;
}
function bai3(a){
  var b=[];
  for (var i=0;i<a.length;i++)
  if(a[i]%2==0){
  b.push(a[i]);
  }
  b.sort(function(a,b){return(b-a)})
return b;
}
var user={
  username:"username",
  password:"secret",
  confirm:"secret"
}
var so1;
var so2; var so3;
var bai4=function(a){
if(a.username.length==0)
{
   so1="chuoi rong";
}
  else if(a.username.length<=20)
  {
    so1= "chuoi hop le";
  }
  if(6<=a.password.length<=32 )
  {
     so2="password hop le";
  }
  else 
  { 
    so2="pass khong hop le";
  }
if (a.password===a.confirm)
{
  so3= "confirm hop le";
}
 else
  {
    so3= "confirm khong hop le";
  }
  return (so1+"."+so2+"."+so3+".");
}
console.log(bai4(user))