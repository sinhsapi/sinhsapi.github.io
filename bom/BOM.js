
	var hienthi=document.getElementById('k');
		var stt1=document.getElementById('op1');
		var stt2=document.getElementById('op2');
		var stt3=document.getElementById('op3');
		var stt4=document.getElementById('op4');
		var index=0;
		var vtt=null;
		var diem=0;
		var a=[
		{
			cauhoi:"2*2 bang bao nhiêu?",
			dapan:[2,5,4,8],
			vitri:2
		},
		{
			cauhoi:"2*3 bang bao nhiêu?",
			dapan:[2,5,4,6],
			vitri:3
		},
		{
			cauhoi:"4*6 bang bao nhiêu?",
			dapan:[24,5,4,8],
			vitri:0
		},
		{
			cauhoi:"7*9 bang bao nhiêu?",
			dapan:[2,5,4,63],
			vitri:3
		},
		{
			cauhoi:"9*8 bang bao nhiêu?",
			dapan:[72,5,4,63],
			vitri:0
		}];

		function check(c)
		{

			var m=a.length;
			vtt=c;

			if(vtt===a[index].vitri)
			{
				diem = diem+10;
			}
			else
			{
				diem=diem+0;
			}
			if (index<m-1)
			{
				index++;
				gan(index);
			}
			else
			{
				index=m-1;
				document.getElementById('cham').style.display="block";
			}
			if(diem==50){
				document.getElementById('anh').style.display="block";
			}
			document.getElementById('em').innerHTML='ĐIỂM CỦA BẠN LÀ:'+diem+'/50';
			
		}
		gan(index);
		

		  


function tiep(){
	document.getElementById('menu').style.display='block';
}

	


	function gan(index)
	{
		
		hienthi.innerText=(index+1)+'. '+a[index].cauhoi;
		stt1.innerText="A. "+a[index].dapan[0];
		stt2.innerText="B. "+a[index].dapan[1];
		stt3.innerText="C. "+a[index].dapan[2];
		stt4.innerText="D. "+a[index].dapan[3];
    }

    function quaylai()
    {
        window.location.href=('BOM.html');
	}