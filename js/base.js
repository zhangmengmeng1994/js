$(".left li").first().css({
	background:"#bf8d01",
	color:"#fff"
	})
//隐藏所有的内容区
$(".right li").hide();
$(".right li").first().show();

$(".left li").each(function(index, element) {
    $(this).click(function(){
		$(".left li").css({
			background:"#fff",
			color:"#000"
			})
		$(this).css({
			background:"#bf8d01",
			color:"#fff"
			})
		$(".right li").hide();
		$(".right li").eq(index).show();
		})
});