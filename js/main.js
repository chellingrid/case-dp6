(function(jQuery) {
	var body = jQuery(document.body || 'body');
	var clear = 0;
	var main = jQuery('main');
	var lb = jQuery('.lightbox');
	var lbContent = lb.find('.lightbox-content').on('scroll', function() {
		lb.toggleClass('scrolled', lbContent.scrollTop() > 10);
	});

	setTimeout(function() {
		body.addClass('domready');
	}, 500);

	jQuery('.cards-montadoras').on('click tap', '.card-montadoras', function(ev) {
		var data = jQuery(this).data();
		var content = jQuery('.info-montadora[data-id="' + data.id + '"]').html();
		lb.find('.lightbox-icon').attr('src', 'img/montadoras/' + data.id + '.png').attr('alt', data.name);
		lb.find('.lightbox-title').text(data.name);
		lbContent.html(content).scrollTop(0);
		setTimeout(function() {
			body.addClass('lightbox-open');
		}, 200);
	});

	jQuery('.lightbox-backdrop, .lightbox-fechar').on('click tap', function() {
		body.removeClass('lightbox-open');
	});

	jQuery('.cabecalho-menu, .menu-fechar').on('click tap', function() {
		body.toggleClass('menu-open', this.className === 'cabecalho-menu')
	});

	jQuery('.menu-backdrop').on('click tap', function() {
		body.removeClass('menu-open');
	});

	jQuery('.menu').on('click tap', '.menu-lista-sublista > a', function(e) {
		e.preventDefault();
		jQuery(this).parent().toggleClass('fechado').siblings().addClass('fechado');
	}).on('click tap', '.menu-sublista-link', function(e) {
		if (this.pathname === location.pathname) {
			body.removeClass('menu-open');
			if (!this.hash) {
				e.preventDefault();
				main.scrollTop(0);
			}
		}
	});

	jQuery('.menu-lista-' + location.pathname.split('/').reverse()[0].replace('.html', '')).parent().removeClass('fechado');
}(jQuery));