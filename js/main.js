var $window = $(window);
var velocity = 0.3;

function update(){
    var pos = $window.scrollTop();
	//console.log('pos: ' + pos);

    $('.page').each(function() {
        var $element = $(this);
        var height = $element.height();
		var top = $element.offset().top;
		//console.log('top: ' + top);

		var newOffset = ((height - pos) * velocity) - (height * velocity);
        $(this).css('backgroundPosition', '50% ' + newOffset + 'px');
    });
};

$window.bind('scroll', update);

$('#menu a[href*=#]').each(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname
		&& this.hash.replace(/#/,'') ) {
			var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
			var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
			if ($target) {
			var targetOffset = $target.offset().top - $('#header').height() - parseInt($('#header').css('margin-top'));;
			$(this).click(function() {
				$("#menu li a").removeClass("active");
				$(this).addClass('active');
				$('html, body').animate({scrollTop: targetOffset}, 1000);
				return false;
			});
		}
	}
});