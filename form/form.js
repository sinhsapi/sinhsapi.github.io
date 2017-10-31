var url=new URL(window.location.href)
var searchParams = new URLSearchParams(url.search);
document.getElementById('a').innerHTML=searchParams.get('hoten');
document.getElementById('b').innerHTML=searchParams.get('gmail');

document.getElementById('c').innerHTML=searchParams.get('std');

document.getElementById('d').innerHTML=searchParams.get('dc');
document.getElementById('e').innerHTML=searchParams.get('taikhoan');
document.getElementById('f').innerHTML=searchParams.get('pass');
document.getElementById('g').innerHTML=searchParams.get('ngay')+'/'+searchParams.get('thang')+"/"+searchParams.get('năm');
document.getElementById('m').innerHTML=searchParams.get('gioitinh');