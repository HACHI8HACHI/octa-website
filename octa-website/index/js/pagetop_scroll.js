$(function(){
var topBtn=$('#pageTopaaa');
topBtn.hide();
 
$(window).scroll(function(){
  if($(this).scrollTop()>500){
    //---- 画面を500pxスクロールしたらボタンを表示
    topBtn.fadeIn();
  }else{
    topBtn.fadeOut();
  } 
});
 
topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},500);
  return false;
});

});