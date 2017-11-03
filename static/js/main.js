var ZmitiUtil = {

	init: function() {

		this.bindEvent()

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
			s.toggleMask('block', '.zmiti-login-C');
		});

		$('#ico-t2').on('click', function() {
			s.toggleMask('block', '.zmiti-ask-C');
		});

		$('.zmiti-login-mask').on('click', function(e) {
			var target = $(e.target);

			if (target.hasClass('zmiti-login-C') || target.parents('.zmiti-login-C').length > 0 || target.hasClass('zmiti-ask-C') || target.parents('.zmiti-ask-C').length > 0) {
				return;
			}

			s.toggleMask('none', '.zmiti-login-C');
			s.toggleMask('none', '.zmiti-ask-C');
		});

		$('.zmiti-ask-C li').on('click', function() {
			$(this).addClass('active').siblings().removeClass('active')
		});
	},
	toggleMask: function(status, selector) {
		$('.zmiti-login-mask').css({
			display: status
		}).find(selector).css({
			display: status
		});

	}

};


ZmitiUtil.init();