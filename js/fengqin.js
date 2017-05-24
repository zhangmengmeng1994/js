var itemIndex;
$('.submenu1 li').on('click',function(){
	$('.ss1').css("display","block");
	$('.ss2').css("display","none");
	$('.ss3').css("display","none");
	$('.ss4').css("display","none");
     itemIndex = $(this).index();
		console.log(itemIndex);
        //$this.addClass('cur').siblings('.item').removeClass('cur');
        $('.ss1 li').eq(itemIndex).show().siblings().hide();


});
$('.submenu2 li').on('click',function(){
	$('.ss2').css("display","block");
	$('.ss1').css("display","none");
	$('.ss3').css("display","none");
	$('.ss4').css("display","none");
     itemIndex = $(this).index();
		console.log(itemIndex);
        //$this.addClass('cur').siblings('.item').removeClass('cur');
        $('.ss2 li').eq(itemIndex).show().siblings().hide();


});
$('.submenu3 li').on('click',function(){
	$('.ss3').css("display","block");
	$('.ss4').css("display","none");
	$('.ss2').css("display","none");
	$('.ss1').css("display","none");	
     itemIndex = $(this).index();
		console.log(itemIndex);
        //$this.addClass('cur').siblings('.item').removeClass('cur');
        $('.ss3 li').eq(itemIndex).show().siblings().hide();
});
$('.submenu4 li').on('click',function(){
	$('.ss4').css("display","block");
	$('.ss3').css("display","none");
	$('.ss2').css("display","none");
	$('.ss1').css("display","none");	
     itemIndex = $(this).index();
		console.log(itemIndex);
        //$this.addClass('cur').siblings('.item').removeClass('cur');
        $('.ss4 li').eq(itemIndex).show().siblings().hide();
});




$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});