$(document).ready(function(){
	//設定相關變數

	var $block = $('#slideShow_warp'),
		$slide = $block.find('.slideShow'),
		$ul = $slide.find('ul'),
		_width = $slide.width(),
		_left = _width * -2,
		_animateSpeed = 600;

		//把最後一張 li 插到第一張 li 前面
		//然後設定 $ul 的 left 和 width
		$ul.find('li:first').before($ul.find('li:last')).end().css({
			left:_left,
			width:_width*($ul.find('li').length+1)
		})

	
		//點擊 prev 時
		$block.find('a.prev').click(function(){

			//移動ul
			$ul.stop(false, true).animate({'left':_left + _width}, _animateSpeed, function(){
				//將最後一張 li 插入到第一張 li 前面
				$ul.find('li:first').before($ul.find('li:last')).end().css('left', _left);
			})
			return false;
		})

		//點擊 next 時
		$block.find('a.next').click(function(){
			//移動ul
			$ul.stop(false, true).animate({'left':_left - _width}, _animateSpeed, function(){
				//將第一張 li 插入到最後一張 li 後面
				$ul.find('li:last').after($ul.find('li:first')).end().css('left', _left);
			})
			return false;
		})

		/*$block.find('a').focus(function(){
			this.blur();
		})*/
})