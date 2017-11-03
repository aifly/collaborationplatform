			$(function(){
				$('.gs-list li').hover(function(){
					var index2 = $(this).index();
					$('.gs-name').css('color','')
					$('.gs-name').eq(index2).css('color','#5daf42')
				},function(){
					$('.gs-name').css('color','')
				});
				$('.gs-list li').click(function(){
					var index = $(this).index();
					console.log(index);
					$('.gs-list li').removeClass('sty4');
					$('.gs-list li').eq(index).addClass('sty4');
					$('.main1-box').eq(index).show().siblings().hide();
					$('.gs-name').removeClass('sty3')
					$('.gs-name').eq(index).addClass('sty3');
				});
				
				
				
				var num = 0;
				$('.cyjg-box1').hover(function(){
					var index1 = $(this).index();
					$('.cyjg-box1-pic').eq(index1).find('img').eq(1).show().siblings().hide();
					$('.cyjg-box1-name').eq(index1).addClass('sty1');
					$('.cyjg-box1-name1').eq(index1).addClass('sty2');
					num = index1;
				},function(){
					$('.cyjg-box1-pic').eq(num).find('img').eq(0).show().siblings().hide();
					$('.cyjg-box1-name').removeClass('sty1');
					$('.cyjg-box1-name1').removeClass('sty2');
				})
			})