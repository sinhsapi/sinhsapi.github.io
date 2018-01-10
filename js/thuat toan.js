function hv(n)
{
	var k='';
	for(var i=0;i<n;i++)
	{
		for (var j=0;j<m;j++)
		{
			k=k+'*';
		}
		k+='<br/>';
	}
	return k;
}
function tg(n)
{
	var k='';
	for (var i=0;i<n;i++)
	{
		for(var j=0;j<i+1;j++)
		{
			k=k+'*';
		}
		k=k+"<br/>";
	}
	return k;
}
function hvr(n,m)
{
	var k='';
	for(var i=0;i<n;i++)
	{
		if(i==0||i==n-1)
		{
			for (var j=0;j<m;i++)
			{
				k=k+'*';
			}
		}
		k=k+'<br/>';
	}
	return k;
}