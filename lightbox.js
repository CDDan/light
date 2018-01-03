/**
 * Created by Administrator on 2017/11/23.
 */

"use strict";
function lightbox(id){
    var figure=$("#"+id+" figure>figcaption")
$("#"+id).append("<div class='lightboxMen'>"+
        "<img src=''>"+
        "<div class='icon'>"+
       "<img src=img/toPre.png />"+
        "<img src=img/toNext.png>"+
        "<img src=img/close.png>"
    +"</div>"+
    +"</div>")
//点击获取下标
    var index;
$("#"+id+" figure>figcaption").click(function(){
    for(var i=0;i<figure.length;i++){
       if(figure[i]==this){
           index=i;
       }
    }
    $(".lightboxMen >img ")[0].src= $(this).prev().attr("src");
    $(".lightboxMen").show();
});
    //关闭
$(".icon img:last-of-type").click(function(){
    $(".lightboxMen").hide();
});
    //左箭头
$(".icon img:nth-child(1)").click(function(){
    index--;
    if(index<0){
        index = $("#"+id+" figure").length-1;
        $(".lightboxMen >img")[0].src=$(figure[index]).prev().attr("src");
    }else{
        $(".lightboxMen >img")[0].src=$(figure[index]).prev().attr("src")
    }
});
    //右箭头
 $(".icon img:nth-child(2)").click(function(){
     index++;
     if(index>$("#"+id+" figure").length-1){
         index=0;
         $(".lightboxMen >img")[0].src=$(figure[index]).prev().attr("src")
     }else{
         $(".lightboxMen >img")[0].src=$(figure[index]).prev().attr("src")
     }
 })
}
