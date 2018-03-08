function bai1(x){
  return x*x;
}
var x;
function bai2(a,b,c){
  x=(3*a+2*b-c);
  return x*x;
}
var string="name=sinh,nickname=sinhlinhtinh,adress=bắc ninh ";
function bai3(string){
  return string.slice(0,10);
}
var string="chac ai do se ve";
var string1;
function bai4(string){
  string1=string.charAt(0);
  return string1.toUpperCase() + string.slice(1);
}
var a=[5,3,6];
function bai5(a){
   a.sort();
  return a[0];
  
}
var student=["sinh","ngoc","linh","sơn","anh"];
function bai6(student){
  return student.sort();
}
 // document.write("mang sau khi sắp xếp là:"+bai6(student));
// bai7
var teacher={
  firstname:"tran",
  lastname:"linh",
  age:40,
  say:function(){
}
}
var student={
  firstname:"nguyen",
  lastname:"sinh",
  age:20,
  say:function(){}
} 
var father={
  firstname:"nguyen",
  lastname:"a",
  age:50,
  say:function(){}
}
var aboutme=function(){
    document.write("xin chao , toi la "+this.firstname+" "+this.lastname+","+this.age+"tuoi")
  }


father.say=aboutme;
father.say();
student.say=aboutme;
student.say();
teacher.say=aboutme;
teacher.say();
// 
function a(c,d)
{
  return c+d;
}
var bai2 =function(num)
{
  return Math.(abs(x));
}
var bai3=function(n)
{
  var sum =0;
  for (var i=1;i<=n;i++)
  {
    sum+=i;
  }
  return sum;
}
var bai4=function (n)
{
  var n1=0;
  var n2=1;
  var n3;
  for(var i=1;i<=n;i++)
  {
    document.write(n3=n2+n1);
    n1=n2;
    n2=n3;
    n3=n1;
  }


}
function bai2(name2) {
  var name1 = name2.length - 1;
  for (var i = name1; i >= 0; i--) 
    document.write(name2[i]);
}
function bai6(n)
{ var dem =0;
  for(var i=1;i<=n; i++)
    for (var j=2;j<=n;j++)
    {
      if(j%i==0)

      dem++;
    if(dem<3)
      document.write(j);
    }
  
}
function bai7(a)
{
  var k=0;
  var m=0;
  var max=a[0];
  var min=a[0];
  for (var i=0;i<a.length;i++)
  {
    if(a[i]>max)
    {
      max=a[i];
      k=i;
    }
    if(a[i]<min)
    {
      min=a[i];
      m=i;
    }

  }
  return "so lon nhat la:"+max+"vi tri cua no la:"+k+" so nho nhat la:"+min+"vi tri cua no la:"+m;
}
function bai8(b)
{
  var c=[];
  var max=b[0];
  for(var i=0;i<b.length;i++)
  {
    if(b[i]>max)
        {
      max=b[i];
    c.push(max);
    b.splice(i,1);
        }
  }
return b;
}




function kiemtra(a)
{
  var b=a.toString();
  var c=b.length;
  if(c%2==0)
    {
      var tong1=0;
      var tong2=0;
      for(var i=0;i<=c/2-1;i++)
        {
          tong1=tong1++(c[i]);
        }
      console.log(tong1);
      for(var j=c-1;j>=c/2;j--)
        {
          tong2=tong2++(c[j]);
        }
       console.log(tong2);
      if(tong2==tong1)
        {
          return true;
        }
      else
        {
          return false;
        }
    }
  else
    {
      return "so khong la so may man ";
    }
}

function bai2(b)
{
  var newstr="";
  var m= b[0].toUpperCase();
  var c='';
  for(var i=1;i<b.length;i++)
    {
      c=c+b[i].toLowerCase();
    }
  var k=m+c;
  for(var j=0;j<k.length;j++)
    {
      if(k[j]!=',')
        {
          newstr+=k[j];
        }
    }
  newstr+='.'
  console.log(newstr);
}
function kiemtramang(a)
{
  var b=[];
  var max=a[0].length;
  var max1=a[0].length;
  for(var i=0;i<a.length;i++)
    {
      if(a[i].length>max)
        {
          max=a[i].length;
          b.push(a[i]);
          a.splice(a[i]);
        }
    }
  for(i=0;i<a.length;i++)
    {
      if(max1>a[i].length)
        {
          b.push(a[i]);
        }
    }
  return b;
}

function bai4(weight1,weight2,weight3,value1,value2)
{
  if((weight1+weight2)>weight3)
    {
      var max=value1;
      if(max<value2)
        {
          max=value2;
         
        }
      console.log(max);
    }
  else
    {
      var tong=value1+value2;
      console.log(tong);
    }
}




var cauthu=[{
name: "Bui Tien Dung",
position: "goalkeeper",
birth_year: 1997,
height: "1m81",
club: "FLC Thanh Hoa",
},
{
name: "Bui Tien Dung",
position: "defender",
birth_year: 1995,
height: "1m76",
club: "Viettel",
},
{
name: "Nguyen Cong Phuong",
position: "striker",
birth_year: 1996,
height: "1m68",
club: "HAGL",
},
];
function countAllPlayers(a){
  return a.length;
}
function heckNumberOfPlayers(a){
  var m=true;
  if(a.length<16)
  {
    m=false;
  }
  return m;
}
function getPlayersByBirthYear(year)
{
  var b=[];
  for(var i=0;i<cauthu.length;i++)
    {
      if(cauthu[i].birth_year==year)
        {
          b.push(cauthu[i]);
        }
    }
  return b;
}
function getPlayersByClub(club)
{
  var b=[];
  for(var i=0;i<cauthu.length;i++)
    {
      if(cauthu[i].club===club)
        {
          b.push(cauthu[i]);
        }
    }
  return b;
}
function getTallerPlayers(height){
   var b=[];
  for(var i=0;i<cauthu.length;i++)
    {
      if(cauthu[i].height>=height)
        {
          b.push(cauthu[i]);
        }
    }
  return b;
}