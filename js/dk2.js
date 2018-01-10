
var bai1 = function() {
  var now = new Date();
  var month = now.getMonth+1();
  var date = now.getDate();
  var year = now.getFullYear();
  var mua;
  switch (month) {
    case (1, 2, 3): {
      mua = "mua xuan";
      break;
    }
    case (4, 5, 6): {
      mua = "mua ha";
      break;
    }
    case (7, 8, 9): {
      mua = "mua thu";
      break;
    }
    case (10, 11, 12): {
      mua = "mau dong";
      break;
    }
  }
  return "ngay"+date+"thang"+month+"nam"+year+"mua"+mua;
}
// console.log(bai1())
// bai2(can hoi)
var bai3=function(x){
  var diem;
  var x=5;
  switch(x)
  {
    case(0<=x<=3.9):
    diem ="F";
    break;
    case(4<=x<=5.4):
    diem="D";
    break;
    case(5.5<=x<=6.9):
    diem="C";
    break;
    case(7<=x<=8.4):
    diem="B";
    break;
    case(8.5<=x<=10):
    diem="A";
    break;
  }
  return diem;
}
console.log(bai3(5))
// 
var bai1 = function() {
  var now = new Date();
  var month = now.getMonth()+1;
  var date = now.getDate();
  var year = now.getFullYear();
  var mua;
  switch (month) {
    case (1, 2, 3): {
      mua = "mua xuan";
      break;
    }
    case (4, 5, 6): {
      mua = "mua ha";
      break;
    }
    case (7, 8, 9): {
      mua = "mua thu";
      break;
    }
    case (10, 11, 12): {
      mua = "mau dong";
      break;
    }
  }
  return "ngay:"+date+" "+"thang:"+month+" "+"nam:"+year+" "+mua;
}
// console.log(bai1())

//bai2
var bai2=function(a){
  var hienthi;
  if(typeof a=="number")
  { console.log("ham sai");
   hienthi=a.toString();
 }
 else if(typeof a=="string")
 {
   if(a.length<10)
    hienthi=a;
  else
    hienthi=a.slice(0,10)+"...";
}
return hienthi;
}
var bai3=function(x){
  var diem;
  {
    if(0<=x<=3.9)
     diem="F";
   else
    if(4<=x<=5.4)
     diem="D";
   else
    if(5.5<=x<=6.9)
     diem="C";
   else
    if(7<=x<=8.4)
     diem="B";
   else
    if(8.5<=x<=10)
     diem="A";
 }
 return "ban duoc diem:"+diem+" trong mon lap trinh";
}
// console.log(bai3(5))
// bai4
var bai4=function(language)
{
  var a="hello";
  switch(language)
  {
   case("vietnamese"):
   a="xin chao";
   break;
   case("german"):
   a="Hallo" 
   case("janpanese"):
   a="こんにちは";
   break;
   case("korean"):
   a="안녕하세요";
   break;
   case("lao"):
   a="ສະບາຍດີ";
   break;
 }
 return a;
}
// bai5
var bai5=function(a){
  var vitri;
  for (var i=0;i<a.length;i++)
    if(a[i]==true){
      vitri=i;
      break;}
      return "vi tri dau tien cua true trong mang la:"+vitri;
    }
// bai6
function x(n){
  var i=0;
  while(i<n)
  {
    while(i%2==0){
      document.write("<p style='color:red;display:block'>"+(i+1)+"</p>");
      i++;
    }
    while(i%2 != 0){
      document.write("<p style='color:green;display:block'>"+(i+1)+"</p>");
      i++;  
    }
  }
}
