// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.


(function(jQuery) {	

//menu
// opção "entre em contato"
	jQuery('.menu-lista-contato').on('click', function() {
		ga('send', 'event', {
		    eventCategory: 'menu',
		    eventAction: 'entre_em_contato',
		    eventLabel: 'link_externo',
    		transport: 'beacon',
			hitCallback: function() {
				console.log("callback menu | entre_em_contato | link_externo");
			}
		})
	});
	
// opção "Download PDF"	
	jQuery('.menu-lista-download').on('click', function() {
		ga('send', 'event', {
		    eventCategory: 'menu',
		    eventAction: 'download_pdf',
		    eventLabel: 'download_pdf',
    		transport: 'beacon',
			hitCallback: function() {
				console.log("callback menu | download_pdf | download_pdf");
			}
		});
	});
	
//	eventos página analise.html

//	evento ao clicar nos botões 'lorem', 'ipsum' e 'dolor'	
	jQuery('div[data-id="lorem"],div[data-id="ipsum"],div[data-id="dolor"]').on('click', function() {
		let button = jQuery(this).data("name");			
		ga('send', 'event', {
		    eventCategory: 'analise',
		    eventAction: 'ver_mais',
		    eventLabel: jQuery(this).data("name"),
			hitCallback: function() {
				console.log("callback analise | "+button+" | ver_mais");
			}
		});
	});
	
//	eventos página contato.html

//	evento ao modificar os campos: nome, email, telefone e contato (no pdf fala-se de 'aceito', porém o atributo name do mesmo é contato)
	jQuery('input[type="text"][name="nome"],input[type="email"][name="email"],input[type="tel"][name="telefone"],input[type="checkbox"][name="contato"]').on('change', function() {		
			let input = jQuery(this).attr("name");
			ga('send', 'event', {
			    eventCategory: 'contato',
			    eventAction: jQuery(this).attr("name"),
			    eventLabel: 'preencheu',
				hitCallback: function() {
					console.log("callback contato | "+input+" | preencheu");
				}
			});
	});

//	evento após submissão de formulário de contato 	
//	originalmente pedido para se enviar o evento na exibição do popup, porém não há código implementado em main.js para a exibição do mesmo na página contato.html
//	de todo modo, o popup seria exibido após o submit do form
	jQuery('form').on('submit', function(e) {
		let form = jQuery(this);
		e.preventDefault();
		ga('send', 'event', {
		    eventCategory: 'contato',
		    eventAction: 'enviado',
		    eventLabel: 'enviado',
    		transport: 'beacon',
			hitCallback: function() {
      			form.unbind();
      			form.submit();
				console.log("callback contato | enviado | enviado");
    		}
		});
	});
	
}(jQuery));