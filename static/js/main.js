function Obserable() {
	this.handlers = {};
}

Obserable.prototype.on = function(type, handler) {
	this.handlers[type] = this.handlers[type] || [];
	this.handlers[type].push(handler);
}

Obserable.prototype.trigger = function(event) {
	if (!event.target) {
		event.target = this;
	}
	if (this.handlers[event.type] instanceof Array) {
		var handlers = this.handlers[event.type]; //检出被观察者注册的观察者
		for (var i = 0, len = handlers.length; i < len; i++) {
			return handlers[i](event.data); //回调函数执行，也就是观察者更新自己
		}
	}
}
Obserable.prototype.off = function(type) {
	this.handlers[type] && this.handlers[type].forEach((item, i) => {
		if (item.type === type) {
			this.handlers[type].splice(i, 1);
		};
	});
}

var obserable = new Obserable();


var ZmitiUtil = {

	init: function() {

		this.bindEvent();

		this.setSize();

		this.setDefault();



	},

	setDefault: function() {
		var mc = $('.mc').html();
		$('.lx-nav li').each(function(i, n) {

			if (mc === $(n).text()) {
				$(n).addClass('active');
			}
		});
	},
	bindEvent: function() {
		var s = this;
		$('.zmiti-login-close').on('click', function() {
			s.toggleMask('none', '.zmiti-login-C');
		});

		$('.zmiti-ask-close').on('click', function() {
			s.toggleMask('none', '.zmiti-ask-C');
		})

		$('#ico-t1').on('click', function() {
			if (window.username) { //已经登录
				$('#ico-t3').trigger('click')
			} else {
				s.toggleMask('block', '.zmiti-login-C');
				$('input[name="username"]').focus();
			}
		});

		$('input[name="password"]').on('keydown', function(e) {
			if (e.keyCode === 13) {
				$('.zmiti-login-btn').trigger('click')
			}
		})

		$('#ico-t2').on('click', function() {
			s.toggleMask('block', '.zmiti-ask-C');

		});

		$('#ico-t3').on('click', function() {
			s.toggleMask('block', '.zmiti-collect-C');
			s.renderCollect();
		});

		$('.zmiti-login-mask').on('click', function(e) {
			var target = $(e.target);

			if (target.hasClass('zmiti-collect-C') || target.parents('.zmiti-collect-C').length > 0 || target.hasClass('zmiti-login-C') || target.parents('.zmiti-login-C').length > 0 || target.hasClass('zmiti-ask-C') || target.parents('.zmiti-ask-C').length > 0 || target.hasClass('zmiti-detail-C') || target.parents('.zmiti-detail-C').length > 0) {
				return;
			}

			s.toggleMask('none', '.zmiti-login-C');
			s.toggleMask('none', '.zmiti-detail-C');
			s.toggleMask('none', '.zmiti-ask-C');
			s.toggleMask('none', '.zmiti-collect-C');
			$('#zmiti-qrcode').remove();
		});

		$('.zmiti-ask-C li').on('click', function() {
			$(this).addClass('active').siblings().removeClass('active')
		});

		$('#zmiti-collect').on('click', function(e) {
			s.isCollect = !s.isCollect;
			if (s.isCollect) {
				$(this).addClass('active');
				$(this).html('已收藏')
			} else {
				$(this).removeClass('active');
				$(this).html('收藏')
			}

			obserable.trigger({
				type: 'collect',
				data: {
					isCollect: s.isCollect,
					index: s.index
				}
			})

			e.preventDefault();

			return 0;


		});

		$('.zmiti-detail-close').on('click', function() {
			s.toggleMask('none', '.zmiti-detail-C');
			$('#zmiti-qrcode').remove()
		});

		$('#zmiti-ask-key').on('click', function() {
			$('.zmiti-detail-C').hide();
			$('.zmiti-ask-C').show();
		});

		//登录

		$('.zmiti-login-btn').on('click', function() {
			var username = $('input[name="username"]').val(),
				password = $('input[name="password"]').val();
			$('.zmiti-login-close').trigger('click');

			window.username = username;
			username && $('.zmiti-collect-top span').html(username)
		});

		$('.zmiti-detail-bottom-right div:eq(-1)').on('click', function() {
			var img = document.createElement('img');
			img.src = './assets/images/qrcode.png';
			img.style.position = 'absolute';
			img.style.left = '50%';
			img.style.width = '200px';
			img.style.marginLeft = '-100px'
			img.style.top = '40px';
			img.id = 'zmiti-qrcode';
			img.style.boxShadow = '0 0 20px rgba(0,0,0,.5)'
			$('#zmiti-qrcode').remove()

			$('.zmiti-detail-C').append(img);

		});
	},

	showDetail: function(title, content, isCollect, index) { //展示列表明细
		this.index = index;
		this.isCollect = isCollect;
		var s = this;
		s.toggleMask('block', '.zmiti-detail-C');
		$('.zmiti-detail-C .zmiti-detail-title').html(title);
		$('.zmiti-detail-C .zmiti-detail-content').html(content);
		var obj = $('#zmiti-collect');
		if (isCollect) {
			obj.addClass('active');
			obj.html('已收藏')
		} else {
			obj.removeClass('active');
			obj.html('收藏')
		}

	},
	toggleMask: function(status, selector) {
		$('.zmiti-login-mask').css({
			display: status
		}).find(selector).css({
			display: status
		});

	},
	setSize: function() {
		$('.zmiti-collect-content').height(document.documentElement.clientHeight - 250);
	},

	renderCollect: function() {
		var ul = $('.zmiti-collect-content>div>ul');

		var html = '';
		window.dataSource = window.dataSource || [];
		var len = window.dataSource.length;
		for (var i = 0; i < len; i++) {
			html += '<li><div>' + window.dataSource[i].id + '</div><div>' + window.dataSource[i].name + '</div><div class="zmiti-collect-del" data-key=' + window.dataSource[i].key + '>删除</div></li>'
		}
		ul.html('');
		ul.append(html);

		var scroll = new IScroll('.zmiti-collect-content', {
			scrollbars: true,
			mouseWheel: true,
			interactiveScrollbars: true, //允许用户拖动滚动条
		});

		$('.zmiti-collect-del').off('click').on('click', function() {
			var key = $(this).data('key');

			$(this).parents('li').hide();


			window.obserable.trigger({
				type: "collect",
				data: {
					index: key * 1 - 1,
					isCollect: false
				}
			})

			scroll.refresh();

		})
	}

};


ZmitiUtil.init();