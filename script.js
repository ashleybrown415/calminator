var pics = [
'url("http://cdn.twitrcovers.com/wp-content/uploads/2013/02/Water-Landscapes%EF%BC%8Dl.jpg")',
 'url("http://o9.us.icdn.ru/a/ap001/1/34059861vEE.jpg")', 
 'url("http://illusion.scene360.com/wp-content/themes/sahara-10/submissions/2013/04/reflection-landscapes-02.jpg")', 
 'url("http://www.fubiz.net/wp-content/uploads/2014/01/The-Infrared-Landscapes-3.jpg")', 
 'url("http://media1.santabanta.com/full1/Outdoors/Landscapes/landscapes-167v.jpg")']

var i = 0

$("#prev").click(function() {
   i--;
   if (i == -1) {
   	i = 4;
   }
   $(".container").css('background-image', pics[i])
});

$("#next").click(function() {
   i++;
   if (i == pics.length) {
   	i = 0;
   }
   $(".container").css('background-image', pics[i])
});

var timer = false;
 
$('#autocalm').click(function(){
  if (timer == false){
	timer = setInterval(function(){
  	$('#next').click();
	}, 3000);
}
  else{
    clearInterval(timer);
    timer = false;
  }
});


