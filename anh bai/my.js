




var arr=["anh3.jpg","anh7.png","anh13.png","anh9.png","anh11.png","anh6.jpg","anh8.jpg","anh5.png"];
var current= null;
var count=0;
var time=60;
var ischeck=false;
	function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
$(function(){
  // nhân đôi phần tuử trong mảng
  arr=arr.concat(arr);
  // hàm đảo vị trí phần tủ trong mảng
  arr=shuffle(arr);
  // chèn nội dung vào class .cha .content
  var nd='';
  for(var i=0;i<arr.length;i++)
    {
      nd+='<div class="card" data-name="'+arr[i]+'" onclick="check(this)">'+ '<div class="mt"><img src="baiup3.jpg"/></div>'+ '<div class="ms"><img src="'+arr[i]+'"/></div>'+'</div>';
    }
    $('.content').html(nd);
    var run=setInterval(function(){ 
         time--;
      $('progress').val(time);
      //het thoi gian
      if(time==0)
      {
        clearInterval(run);
        if(count<8)
        {
         $('.ketthuc').css('display','block');
          $('#lose').css('display','block');
          document.getElementById('bai-lose').play();
          document.getElementById('bg-music').pause();

        }
      }
      else
      {
        if(count==8)
        {
            $('.ketthuc').css('display','block');
            $('#win').css('display','block');
            document.getElementById('bg-music').pause();
            document.getElementById('bai-win').play();

            clearInterval(run); 
        }
      }
    },1000);
});
function check(card)
{
  $(card).toggleClass('flipped');
  $(card).css('pointer-events', 'none');
   // nếu current là null hoặc không tồn tại
  if(!current)
    {
      current=$(card);
    }
  else
  {
      if(current.attr('data-name')!=$(card).attr('data-name'))
      {
        setTimeout(function(){
          console.log('khac nhau');
          current.toggleClass('flipped');
          $(card).toggleClass('flipped');
          document.getElementById('bai-lose').play();
          document.getElementById('bai-win').pause();
          current=null;

        },400);
        $(card).css('pointer-events', 'auto');
        current.css('pointer-events', 'auto');
      }
      else
      {
        setTimeout(function(){
          console.log('giong nhau');
          current.css('opacity','0');
          $(card).css('opacity','0');
          document.getElementById('bai-win').play();
          document.getElementById('bai-lose').pause();

        current=null;
        count++;
        if(count==8)
        {
          clearInterval();
        $('.ketthuc').css('display','block');
        $('#win').css('display','block');
        }
        },400)
      }
  }
}
function kt(){
  $('.ketthuc').css('display','none');
   $('#win').css('display','none');
    $('#lose').css('display','none');
    window.location.href="memorycard.html";
  }
function start(){
  $('.time').css('display','block');
  $('.cha').css('display','block');
  $('.a').css('display','none');
  document.getElementById('bg-music').play();
  time=60;
}
