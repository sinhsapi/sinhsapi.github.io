
function changefontsize(x)
{ var a=document.getElementsByClassName("c1");
	for(var i=0;i<a.length;i++)
		a[i].style.fontSize=x+"px";

	return a;
}

//----------------------------------- decreasefontsize-----------------------------

function decreasefontsize(c)
{
	var e;
	if(c==1)
	{					
	var a=document.getElementById("d1");
	 var m=parseFloat(window.getComputedStyle(a, null).getPropertyValue('font-size'));
	 	m--;
		if(m>10)
		{
			e=m;
		}
		else
			e=10;
    }
    else if(c==2)
    {
    	var a=document.getElementById("d2");
    	var m=parseFloat(window.getComputedStyle(a, null).getPropertyValue('font-size'));
    	m--;
		if(m>10)
		{
			e=m;
		}
		else
			e=10;
    }
    else if(c==3)
    {
    	var a=document.getElementById("d3");
    	var m=parseFloat(window.getComputedStyle(a, null).getPropertyValue('font-size'));
    	m--;
		if(m>10)
		{
			e=m;
		}
		else
			e=10;

    }
    return a.style.fontSize=e+"px";

}

// console.log(decreasefontsize(1))
// console.log(decreasefontsize(2))
// console.log(decreasefontsize(3))



//-------------------------------- increasefontsize---------------------------



function increasefontsize(b)
{
	if(b==1)
	{	var e;				
		var a=document.getElementById("d1");
		var m=parseFloat(window.getComputedStyle(a, null).getPropertyValue('font-size'));
		m++;
		if(m<30)
		{
			e=m;
		}
		else
			e=30;

	}
	else if(b==2)
	{
		var a=document.getElementById("d2");
		var m=parseFloat(window.getComputedStyle(a, null).getPropertyValue('font-size'));
		m++;
		if (m<30)
		{
			e=m;
		}
		else 
		{
			e=30;
		}

	}
	else if(b==3)
	{
		var a=document.getElementById("d3");
		var m=parseFloat(window.getComputedStyle(a, null).getPropertyValue('font-size'));
		m++;
		if(m<30)
		{
			e=m;		
		}
		else 
			e=30;

	}
	return a.fontSize=e+"px";

}
console.log(increasefontsize(1))
// console.log(increasefontsize(2))
// console.log(increasefontsize(3))


//----------------------------------- changecolor------------------------



function changecolor()
{
	document.getElementById("d1").style.color="green ";
	document.getElementById("d2").style.color="yellow";
	document.getElementById("d3").style.color="red";
}
// console.log(changecolor())



//-------------------------------------- changeBGcolor-------------------


function changeBGcolor(color)
{
	document.body.style.backgroundColor=color;
}
// console.log(changeBGcolor("black"))


// ---------------------------------------------copycontent------------------------

function copycontent(a,b)
{	if(a==1 && b==2)
	document.getElementById("d1").innerHTML=document.getElementById("d2").innerHTML;
	if(a==2 && b==3)
	document.getElementById("d2").innerHTML=document.getElementById("d3").innerHTML;
	if(a==3 && b==1)
	document.getElementById("d3").innerHTML=document.getElementById("d1").innerHTML;
}
// console.log(copycontent(1,2))
// console.log(copycontent(2,3))
// console.log(copycontent(3,1))