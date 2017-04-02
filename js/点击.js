window.onload = function(){
		var menu_btn = document.getElementById('menu_btn');
		var top = document.getElementById('top');
		var bottom = document.getElementById('bottom');
		var menu = document.getElementById('menu');
		var layer = document.getElementById('layer');
		var clickNumber = 0;

		menu_btn.onclick = function(){
			if(clickNumber%2 == 0){
				menu.style.left = '0';
				
				top.style.width = '24px';
				top.style.right = '-2px';
				top.style.transform = 'rotate(42deg)';
				top.style['-ms-transform'] = 'rotate(42deg)';
				top.style['-moz-transform'] = 'rotate(42deg)';
				top.style['-webkit-transform'] = 'rotate(42deg)';
				top.style['-o-transform'] = 'rotate(42deg)';
				
				bottom.style.width = '24px';
				bottom.style.right = '-2px';
				bottom.style.transform = 'rotate(-42deg)';
				bottom.style['-ms-transform'] = 'rotate(-42deg)';
				bottom.style['-moz-transform'] = 'rotate(-42deg)';
				bottom.style['-webkit-transform'] = 'rotate(-42deg)';
				bottom.style['-o-transform'] = 'rotate(-42deg)';
				
				menu_btn.style.transform = 'rotate(180deg)';
				menu_btn.style['-ms-transform'] = 'rotate(180deg)';
				menu_btn.style['-moz-transform'] = 'rotate(180deg)';
				menu_btn.style['-webkit-transform'] = 'rotate(180deg)';
				menu_btn.style['-o-transform'] = 'rotate(180deg)';
				
				layer.style.background = 'black';
			}
			else{
				menu.style.left = '-261px';
				
				top.style.width = '36px';
				top.style.right = '0px';
				top.style.transform = 'rotate(0deg)';
				top.style['-ms-transform'] = 'rotate(0deg)';
				top.style['-moz-transform'] = 'rotate(0deg)';
				top.style['-webkit-transform'] = 'rotate(0deg)';
				top.style['-o-transform'] = 'rotate(0deg)';
				
				bottom.style.width = '36px';
				bottom.style.right = '0px';
				bottom.style.transform = 'rotate(0deg)';
				bottom.style['-ms-transform'] = 'rotate(0deg)';
				bottom.style['-moz-transform'] = 'rotate(0deg)';
				bottom.style['-webkit-transform'] = 'rotate(0deg)';
				bottom.style['-o-transform'] = 'rotate(0deg)';
				
				menu_btn.style.transform = 'rotate(0deg)';
				menu_btn.style['-ms-transform'] = 'rotate(0deg)';
				menu_btn.style['-moz-transform'] = 'rotate(0deg)';
				menu_btn.style['-webkit-transform'] = 'rotate(0deg)';
				menu_btn.style['-o-transform'] = 'rotate(0deg)';
				
				layer.style.background = 'transparent';
			}
			clickNumber ++;
		}
	}