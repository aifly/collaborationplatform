$('.carousel').carousel({
    interval:3000
})
$(".zxzx .index-menu span").click(function(){
    var index=$(".zxzx .index-menu span").index(this);
    $(".zxzx .index-menu span").eq(index).addClass("curr").siblings().removeClass("curr");
    $(".tab-content .sub-con").eq(index).show().siblings().hide();
})
